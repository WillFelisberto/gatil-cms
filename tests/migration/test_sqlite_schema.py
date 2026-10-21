"""Teste real de DDL SQLite (sem Payload instalado) com registros legados simulados.
Roda: python3 -m unittest discover -s tests/migration -p 'test_*.py'
"""
import re
import sqlite3
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MIGRATIONS = ROOT / 'app/(payload)/migrations'
NAMES = [
    '20250428_150102',
    '20250429_143440',
    '20261020_220000_landing_editorial',
    '20261020_230000_complete_landing_migration',
]


def statements(name, direction='up'):
    source = (MIGRATIONS / f'{name}.ts').read_text()
    if direction == 'up':
        source = source.split('export async function down')[0]
    else:
        source = source.split('export async function down', 1)[1]
    return [s.replace('\\`', '`').strip() for s in re.findall(
        r'db\.run\(\s*sql`((?:\\.|[^`])*)`\s*\)', source, flags=re.S
    )]


class SQLiteMigrationTests(unittest.TestCase):
    def setUp(self):
        self.db = sqlite3.connect(':memory:')
        self.db.execute('PRAGMA foreign_keys=ON')
        for migration in NAMES[:2]:
            for statement in statements(migration):
                self.db.execute(statement)
        # O banco real contém registros antes da evolução editorial.
        self.db.execute('INSERT INTO homepage (id) VALUES (1)')
        self.db.execute('INSERT INTO site_config (id, whatsapp) VALUES (1, ?)', ('48999999999',))
        self.db.execute('INSERT INTO sobre (id, descricao) VALUES (1, ?)', ('{"root":{"children":[{"text":"Nossa historia"}]}}',))
        self.db.execute('INSERT INTO apadrinhe (id) VALUES (1)')
        self.db.execute('INSERT INTO media (id) VALUES (11)')
        self.db.execute('''INSERT INTO homepage_blocks_hero
            (_order, _parent_id, _path, id, title, subtitle, background_image_id)
            VALUES (0, 1, 'layout', 'orig-home-hero', 'Hero existente', 'Apresentacao original', 11)''')
        self.db.execute('''INSERT INTO apadrinhe_blocks_hero
            (_order, _parent_id, _path, id, title, subtitle, background_image_id)
            VALUES (0, 1, 'layout', 'orig-sponsor-hero', 'Apadrinhe', 'Ajude os gatinhos', 11)''')
        self.db.execute('''INSERT INTO cats (id, nome, sexo, show, disponivel_para_apadrinhamento)
            VALUES (1, 'Atena', 'F', 1, 1)''')
        self.db.commit()

    def tearDown(self):
        self.db.close()

    def test_up_preserves_legacy_records_and_backfills(self):
        for migration in NAMES[2:]:
            for statement in statements(migration):
                self.db.execute(statement)
        hero = self.db.execute('''SELECT hero_title, hero_subtitle, hero_image_id,
            about_description, sponsorship_description, show_complementary_content, legacy_migration_completed FROM homepage WHERE id=1''').fetchone()
        self.assertEqual(hero[0], 'Hero existente')
        self.assertEqual(hero[1], 'Apresentacao original')
        self.assertEqual(hero[2], 11)
        self.assertIn('Nossa historia', hero[3])
        self.assertEqual(hero[4], 'Ajude os gatinhos')
        self.assertEqual(hero[5], 0)
        self.assertEqual(hero[6], 0)
        self.assertEqual(self.db.execute('SELECT nome FROM cats').fetchone()[0], 'Atena')
        self.assertEqual(self.db.execute('SELECT whatsapp FROM site_config').fetchone()[0], '48999999999')
        self.assertEqual(self.db.execute('SELECT COUNT(*) FROM homepage_blocks_hero').fetchone()[0], 1)
        self.assertEqual(self.db.execute('SELECT COUNT(*) FROM apadrinhe_blocks_hero').fetchone()[0], 1)
        self.assertEqual(self.db.execute('PRAGMA foreign_key_check').fetchall(), [])

    def test_new_migration_can_roll_back_without_losing_existing_data(self):
        for migration in NAMES[2:]:
            for statement in statements(migration):
                self.db.execute(statement)
        for statement in statements(NAMES[-1], 'down'):
            self.db.execute(statement)
        self.assertNotIn('show_complementary_content', [c[1] for c in self.db.execute('PRAGMA table_info(homepage)')])
        self.assertNotIn('legacy_migration_completed', [c[1] for c in self.db.execute('PRAGMA table_info(homepage)')])
        self.assertEqual(self.db.execute('SELECT hero_title FROM homepage WHERE id=1').fetchone()[0], 'Hero existente')
        self.assertEqual(self.db.execute('SELECT nome FROM cats').fetchone()[0], 'Atena')


if __name__ == '__main__':
    unittest.main()

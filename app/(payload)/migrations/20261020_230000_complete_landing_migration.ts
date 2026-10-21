import { sql, type MigrateUpArgs, type MigrateDownArgs } from '@payloadcms/db-sqlite';

/** Exibição opcional do material importado: nenhum bloco antigo é apagado. */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`homepage\` ADD COLUMN \`show_complementary_content\` integer DEFAULT false;`);
  await db.run(sql`ALTER TABLE \`homepage\` ADD COLUMN \`legacy_migration_completed\` integer DEFAULT false;`);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`legacy_migration_completed\`;`);
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`show_complementary_content\`;`);
}

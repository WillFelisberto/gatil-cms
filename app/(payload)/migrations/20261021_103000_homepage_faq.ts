import { sql, type MigrateDownArgs, type MigrateUpArgs } from '@payloadcms/db-sqlite';

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`homepage\` ADD COLUMN \`faq_eyebrow\` text;`);
  await db.run(sql`ALTER TABLE \`homepage\` ADD COLUMN \`faq_title\` text;`);
  await db.run(sql`ALTER TABLE \`homepage\` ADD COLUMN \`faq_title_emphasis\` text;`);
  await db.run(sql`ALTER TABLE \`homepage\` ADD COLUMN \`faq_description\` text;`);
  await db.run(sql`ALTER TABLE \`homepage\` ADD COLUMN \`faq_button\` text;`);

  await db.run(sql`CREATE TABLE \`homepage_faq_items\` (
    \`id\` integer PRIMARY KEY NOT NULL,
    \`pergunta\` text,
    \`resposta\` text,
    \`_order\` integer NOT NULL,
    \`_parent_id\` integer NOT NULL,
    FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );`);
  await db.run(sql`CREATE INDEX \`homepage_faq_items_order_idx\` ON \`homepage_faq_items\` (\`_order\`);`);
  await db.run(sql`CREATE INDEX \`homepage_faq_items_parent_id_idx\` ON \`homepage_faq_items\` (\`_parent_id\`);`);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE IF EXISTS \`homepage_faq_items\`;`);
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`faq_button\`;`);
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`faq_description\`;`);
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`faq_title_emphasis\`;`);
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`faq_title\`;`);
  await db.run(sql`ALTER TABLE \`homepage\` DROP COLUMN \`faq_eyebrow\`;`);
}

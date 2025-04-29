import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`img_pos\` RENAME TO \`adote_img_pos\`;`)
  await db.run(sql`CREATE TABLE \`contato_img_pos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_position\` text DEFAULT 'left',
  	\`background_color\` text DEFAULT 'light',
  	\`image_id\` integer NOT NULL,
  	\`title\` text,
  	\`text\` text,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`contato_img_pos_order_idx\` ON \`contato_img_pos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`contato_img_pos_parent_id_idx\` ON \`contato_img_pos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`contato_img_pos_path_idx\` ON \`contato_img_pos\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`contato_img_pos_image_idx\` ON \`contato_img_pos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`colabore_img_pos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_position\` text DEFAULT 'left',
  	\`background_color\` text DEFAULT 'light',
  	\`image_id\` integer NOT NULL,
  	\`title\` text,
  	\`text\` text,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`colabore_img_pos_order_idx\` ON \`colabore_img_pos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`colabore_img_pos_parent_id_idx\` ON \`colabore_img_pos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`colabore_img_pos_path_idx\` ON \`colabore_img_pos\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`colabore_img_pos_image_idx\` ON \`colabore_img_pos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`apadrinhe_img_pos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_position\` text DEFAULT 'left',
  	\`background_color\` text DEFAULT 'light',
  	\`image_id\` integer NOT NULL,
  	\`title\` text,
  	\`text\` text,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`apadrinhe_img_pos_order_idx\` ON \`apadrinhe_img_pos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`apadrinhe_img_pos_parent_id_idx\` ON \`apadrinhe_img_pos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`apadrinhe_img_pos_path_idx\` ON \`apadrinhe_img_pos\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`apadrinhe_img_pos_image_idx\` ON \`apadrinhe_img_pos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`politica_adocao_img_pos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_position\` text DEFAULT 'left',
  	\`background_color\` text DEFAULT 'light',
  	\`image_id\` integer NOT NULL,
  	\`title\` text,
  	\`text\` text,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`politica_adocao_img_pos_order_idx\` ON \`politica_adocao_img_pos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`politica_adocao_img_pos_parent_id_idx\` ON \`politica_adocao_img_pos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`politica_adocao_img_pos_path_idx\` ON \`politica_adocao_img_pos\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`politica_adocao_img_pos_image_idx\` ON \`politica_adocao_img_pos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_img_pos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_position\` text DEFAULT 'left',
  	\`background_color\` text DEFAULT 'light',
  	\`image_id\` integer NOT NULL,
  	\`title\` text,
  	\`text\` text,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`politica_apadrinhamento_img_pos_order_idx\` ON \`politica_apadrinhamento_img_pos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`politica_apadrinhamento_img_pos_parent_id_idx\` ON \`politica_apadrinhamento_img_pos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`politica_apadrinhamento_img_pos_path_idx\` ON \`politica_apadrinhamento_img_pos\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`politica_apadrinhamento_img_pos_image_idx\` ON \`politica_apadrinhamento_img_pos\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`homepage_img_pos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_position\` text DEFAULT 'left',
  	\`background_color\` text DEFAULT 'light',
  	\`image_id\` integer NOT NULL,
  	\`title\` text,
  	\`text\` text,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`homepage_img_pos_order_idx\` ON \`homepage_img_pos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`homepage_img_pos_parent_id_idx\` ON \`homepage_img_pos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`homepage_img_pos_path_idx\` ON \`homepage_img_pos\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`homepage_img_pos_image_idx\` ON \`homepage_img_pos\` (\`image_id\`);`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_adote_img_pos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_position\` text DEFAULT 'left',
  	\`background_color\` text DEFAULT 'light',
  	\`image_id\` integer NOT NULL,
  	\`title\` text,
  	\`text\` text,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_adote_img_pos\`("_order", "_parent_id", "_path", "id", "image_position", "background_color", "image_id", "title", "text", "cta_text", "cta_link", "block_name") SELECT "_order", "_parent_id", "_path", "id", "image_position", "background_color", "image_id", "title", "text", "cta_text", "cta_link", "block_name" FROM \`adote_img_pos\`;`)
  await db.run(sql`DROP TABLE \`adote_img_pos\`;`)
  await db.run(sql`ALTER TABLE \`__new_adote_img_pos\` RENAME TO \`adote_img_pos\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`adote_img_pos_order_idx\` ON \`adote_img_pos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`adote_img_pos_parent_id_idx\` ON \`adote_img_pos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`adote_img_pos_path_idx\` ON \`adote_img_pos\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`adote_img_pos_image_idx\` ON \`adote_img_pos\` (\`image_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`img_pos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_position\` text DEFAULT 'left',
  	\`background_color\` text DEFAULT 'light',
  	\`image_id\` integer NOT NULL,
  	\`title\` text,
  	\`text\` text,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`img_pos_order_idx\` ON \`img_pos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`img_pos_parent_id_idx\` ON \`img_pos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`img_pos_path_idx\` ON \`img_pos\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`img_pos_image_idx\` ON \`img_pos\` (\`image_id\`);`)
  await db.run(sql`DROP TABLE \`adote_img_pos\`;`)
  await db.run(sql`DROP TABLE \`contato_img_pos\`;`)
  await db.run(sql`DROP TABLE \`colabore_img_pos\`;`)
  await db.run(sql`DROP TABLE \`apadrinhe_img_pos\`;`)
  await db.run(sql`DROP TABLE \`politica_adocao_img_pos\`;`)
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_img_pos\`;`)
  await db.run(sql`DROP TABLE \`homepage_img_pos\`;`)
}

import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`cats_galeria\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`imagem_id\` integer,
  	\`legenda\` text,
  	FOREIGN KEY (\`imagem_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(sql`CREATE INDEX \`cats_galeria_order_idx\` ON \`cats_galeria\` (\`_order\`);`);
  await db.run(
    sql`CREATE INDEX \`cats_galeria_parent_id_idx\` ON \`cats_galeria\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE INDEX \`cats_galeria_imagem_idx\` ON \`cats_galeria\` (\`imagem_id\`);`);
  await db.run(sql`CREATE TABLE \`cats_vacinas\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`nome\` text NOT NULL,
  	\`data\` text,
  	\`observacoes\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(sql`CREATE INDEX \`cats_vacinas_order_idx\` ON \`cats_vacinas\` (\`_order\`);`);
  await db.run(
    sql`CREATE INDEX \`cats_vacinas_parent_id_idx\` ON \`cats_vacinas\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`cats_vermifugacoes\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`nome\` text,
  	\`data\` text,
  	\`observacoes\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`cats_vermifugacoes_order_idx\` ON \`cats_vermifugacoes\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`cats_vermifugacoes_parent_id_idx\` ON \`cats_vermifugacoes\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`cats\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`nome\` text NOT NULL,
  	\`birth_date\` text,
  	\`idade\` text,
  	\`descricao\` text,
  	\`sexo\` text NOT NULL,
  	\`foto_id\` integer,
  	\`castrado\` integer DEFAULT false,
  	\`doencas\` text,
  	\`data_entrada\` text,
  	\`observacoes_saude\` text,
  	\`adotado\` integer DEFAULT false,
  	\`show\` integer DEFAULT true,
  	\`disponivel_para_apadrinhamento\` integer DEFAULT true,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`foto_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `);
  await db.run(sql`CREATE INDEX \`cats_foto_idx\` ON \`cats\` (\`foto_id\`);`);
  await db.run(sql`CREATE INDEX \`cats_updated_at_idx\` ON \`cats\` (\`updated_at\`);`);
  await db.run(sql`CREATE INDEX \`cats_created_at_idx\` ON \`cats\` (\`created_at\`);`);
  await db.run(sql`CREATE TABLE \`adoptions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`gato_id\` integer NOT NULL,
  	\`tutor_id\` integer NOT NULL,
  	\`data_adocao\` text NOT NULL,
  	\`observacoes\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`gato_id\`) REFERENCES \`cats\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`tutor_id\`) REFERENCES \`guardians\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `);
  await db.run(sql`CREATE INDEX \`adoptions_gato_idx\` ON \`adoptions\` (\`gato_id\`);`);
  await db.run(sql`CREATE INDEX \`adoptions_tutor_idx\` ON \`adoptions\` (\`tutor_id\`);`);
  await db.run(sql`CREATE INDEX \`adoptions_updated_at_idx\` ON \`adoptions\` (\`updated_at\`);`);
  await db.run(sql`CREATE INDEX \`adoptions_created_at_idx\` ON \`adoptions\` (\`created_at\`);`);
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`telefone\` text,
  	\`show_phone\` integer DEFAULT true,
  	\`photo_id\` integer,
  	\`role\` text DEFAULT 'voluntario' NOT NULL,
  	\`show\` integer DEFAULT true,
  	\`email_updates\` integer DEFAULT false,
  	\`first_login\` integer DEFAULT true,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	FOREIGN KEY (\`photo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `);
  await db.run(sql`CREATE INDEX \`users_photo_idx\` ON \`users\` (\`photo_id\`);`);
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`);
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`);
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`);
  await db.run(sql`CREATE TABLE \`guardians\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`nome\` text NOT NULL,
  	\`email\` text NOT NULL,
  	\`telefone\` text NOT NULL,
  	\`document\` text,
  	\`endereco\` text,
  	\`whatsapp\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await db.run(sql`CREATE INDEX \`guardians_updated_at_idx\` ON \`guardians\` (\`updated_at\`);`);
  await db.run(sql`CREATE INDEX \`guardians_created_at_idx\` ON \`guardians\` (\`created_at\`);`);
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric,
  	\`sizes_thumbnail_url\` text,
  	\`sizes_thumbnail_width\` numeric,
  	\`sizes_thumbnail_height\` numeric,
  	\`sizes_thumbnail_mime_type\` text,
  	\`sizes_thumbnail_filesize\` numeric,
  	\`sizes_thumbnail_filename\` text,
  	\`sizes_card_url\` text,
  	\`sizes_card_width\` numeric,
  	\`sizes_card_height\` numeric,
  	\`sizes_card_mime_type\` text,
  	\`sizes_card_filesize\` numeric,
  	\`sizes_card_filename\` text,
  	\`sizes_tablet_url\` text,
  	\`sizes_tablet_width\` numeric,
  	\`sizes_tablet_height\` numeric,
  	\`sizes_tablet_mime_type\` text,
  	\`sizes_tablet_filesize\` numeric,
  	\`sizes_tablet_filename\` text
  );
  `);
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`);
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`);
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`);
  await db.run(
    sql`CREATE INDEX \`media_sizes_thumbnail_sizes_thumbnail_filename_idx\` ON \`media\` (\`sizes_thumbnail_filename\`);`
  );
  await db.run(
    sql`CREATE INDEX \`media_sizes_card_sizes_card_filename_idx\` ON \`media\` (\`sizes_card_filename\`);`
  );
  await db.run(
    sql`CREATE INDEX \`media_sizes_tablet_sizes_tablet_filename_idx\` ON \`media\` (\`sizes_tablet_filename\`);`
  );
  await db.run(sql`CREATE TABLE \`sponsorships\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`apadrinha_projeto\` integer DEFAULT false,
  	\`padrinho_id\` integer NOT NULL,
  	\`forma_pagamento\` text,
  	\`valor_mensal\` text NOT NULL,
  	\`certificado_digital\` integer,
  	\`visitas\` integer,
  	\`aceita_termos\` integer DEFAULT false NOT NULL,
  	\`data_atualizacao\` text,
  	\`proxima_atualizacao\` text,
  	\`ativo\` integer DEFAULT true,
  	\`whatsapp\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`padrinho_id\`) REFERENCES \`guardians\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `);
  await db.run(
    sql`CREATE INDEX \`sponsorships_padrinho_idx\` ON \`sponsorships\` (\`padrinho_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`sponsorships_updated_at_idx\` ON \`sponsorships\` (\`updated_at\`);`
  );
  await db.run(
    sql`CREATE INDEX \`sponsorships_created_at_idx\` ON \`sponsorships\` (\`created_at\`);`
  );
  await db.run(sql`CREATE TABLE \`sponsorships_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`cats_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`sponsorships\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cats_id\`) REFERENCES \`cats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`sponsorships_rels_order_idx\` ON \`sponsorships_rels\` (\`order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`sponsorships_rels_parent_idx\` ON \`sponsorships_rels\` (\`parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`sponsorships_rels_path_idx\` ON \`sponsorships_rels\` (\`path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`sponsorships_rels_cats_id_idx\` ON \`sponsorships_rels\` (\`cats_id\`);`
  );
  await db.run(sql`CREATE TABLE \`cron_logs\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`executado_em\` text,
  	\`total_vencidos\` numeric,
  	\`email_enviado\` integer,
  	\`mensagem\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await db.run(sql`CREATE INDEX \`cron_logs_updated_at_idx\` ON \`cron_logs\` (\`updated_at\`);`);
  await db.run(sql`CREATE INDEX \`cron_logs_created_at_idx\` ON \`cron_logs\` (\`created_at\`);`);
  await db.run(sql`CREATE TABLE \`exports\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`format\` text DEFAULT 'csv' NOT NULL,
  	\`limit\` numeric,
  	\`sort\` text,
  	\`locale\` text DEFAULT 'all',
  	\`drafts\` text DEFAULT 'yes',
  	\`collection_slug\` text NOT NULL,
  	\`where\` text DEFAULT '{}',
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `);
  await db.run(sql`CREATE INDEX \`exports_updated_at_idx\` ON \`exports\` (\`updated_at\`);`);
  await db.run(sql`CREATE INDEX \`exports_created_at_idx\` ON \`exports\` (\`created_at\`);`);
  await db.run(sql`CREATE UNIQUE INDEX \`exports_filename_idx\` ON \`exports\` (\`filename\`);`);
  await db.run(sql`CREATE TABLE \`exports_texts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`exports\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`exports_texts_order_parent_idx\` ON \`exports_texts\` (\`order\`,\`parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`payload_jobs_log\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`executed_at\` text NOT NULL,
  	\`completed_at\` text NOT NULL,
  	\`task_slug\` text NOT NULL,
  	\`task_i_d\` text NOT NULL,
  	\`input\` text,
  	\`output\` text,
  	\`state\` text NOT NULL,
  	\`error\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`payload_jobs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`payload_jobs_log_order_idx\` ON \`payload_jobs_log\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_jobs_log_parent_id_idx\` ON \`payload_jobs_log\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`payload_jobs\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`input\` text,
  	\`completed_at\` text,
  	\`total_tried\` numeric DEFAULT 0,
  	\`has_error\` integer DEFAULT false,
  	\`error\` text,
  	\`task_slug\` text,
  	\`queue\` text DEFAULT 'default',
  	\`wait_until\` text,
  	\`processing\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await db.run(
    sql`CREATE INDEX \`payload_jobs_completed_at_idx\` ON \`payload_jobs\` (\`completed_at\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_jobs_total_tried_idx\` ON \`payload_jobs\` (\`total_tried\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_jobs_has_error_idx\` ON \`payload_jobs\` (\`has_error\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_jobs_task_slug_idx\` ON \`payload_jobs\` (\`task_slug\`);`
  );
  await db.run(sql`CREATE INDEX \`payload_jobs_queue_idx\` ON \`payload_jobs\` (\`queue\`);`);
  await db.run(
    sql`CREATE INDEX \`payload_jobs_wait_until_idx\` ON \`payload_jobs\` (\`wait_until\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_jobs_processing_idx\` ON \`payload_jobs\` (\`processing\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_jobs_updated_at_idx\` ON \`payload_jobs\` (\`updated_at\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_jobs_created_at_idx\` ON \`payload_jobs\` (\`created_at\`);`
  );
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`
  );
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`cats_id\` integer,
  	\`adoptions_id\` integer,
  	\`users_id\` integer,
  	\`guardians_id\` integer,
  	\`media_id\` integer,
  	\`sponsorships_id\` integer,
  	\`cron_logs_id\` integer,
  	\`exports_id\` integer,
  	\`payload_jobs_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cats_id\`) REFERENCES \`cats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`adoptions_id\`) REFERENCES \`adoptions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`guardians_id\`) REFERENCES \`guardians\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`sponsorships_id\`) REFERENCES \`sponsorships\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cron_logs_id\`) REFERENCES \`cron_logs\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`exports_id\`) REFERENCES \`exports\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`payload_jobs_id\`) REFERENCES \`payload_jobs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_cats_id_idx\` ON \`payload_locked_documents_rels\` (\`cats_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_adoptions_id_idx\` ON \`payload_locked_documents_rels\` (\`adoptions_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_guardians_id_idx\` ON \`payload_locked_documents_rels\` (\`guardians_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_sponsorships_id_idx\` ON \`payload_locked_documents_rels\` (\`sponsorships_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_cron_logs_id_idx\` ON \`payload_locked_documents_rels\` (\`cron_logs_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_exports_id_idx\` ON \`payload_locked_documents_rels\` (\`exports_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_locked_documents_rels_payload_jobs_id_idx\` ON \`payload_locked_documents_rels\` (\`payload_jobs_id\`);`
  );
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await db.run(
    sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`
  );
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`
  );
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `);
  await db.run(
    sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`
  );
  await db.run(
    sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`
  );
  await db.run(sql`CREATE TABLE \`site_config_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`type\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_config\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`site_config_links_order_idx\` ON \`site_config_links\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`site_config_links_parent_id_idx\` ON \`site_config_links\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`site_config\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`whatsapp\` text,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `);
  await db.run(sql`CREATE TABLE \`sobre\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`imagem_id\` integer,
  	\`descricao\` text,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`imagem_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `);
  await db.run(sql`CREATE INDEX \`sobre_imagem_idx\` ON \`sobre\` (\`imagem_id\`);`);
  await db.run(sql`CREATE TABLE \`sobre_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`sobre\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`sobre_meta_meta_image_idx\` ON \`sobre_locales\` (\`meta_image_id\`,\`_locale\`);`
  );
  await db.run(
    sql`CREATE UNIQUE INDEX \`sobre_locales_locale_parent_id_unique\` ON \`sobre_locales\` (\`_locale\`,\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`adote_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`subtitle\` text,
  	\`background_image_id\` integer NOT NULL,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_hero_order_idx\` ON \`adote_blocks_hero\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_hero_parent_id_idx\` ON \`adote_blocks_hero\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_hero_path_idx\` ON \`adote_blocks_hero\` (\`_path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_hero_background_image_idx\` ON \`adote_blocks_hero\` (\`background_image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`adote_blocks_gallery_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_gallery_images_order_idx\` ON \`adote_blocks_gallery_images\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_gallery_images_parent_id_idx\` ON \`adote_blocks_gallery_images\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_gallery_images_image_idx\` ON \`adote_blocks_gallery_images\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`adote_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_gallery_order_idx\` ON \`adote_blocks_gallery\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_gallery_parent_id_idx\` ON \`adote_blocks_gallery\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_gallery_path_idx\` ON \`adote_blocks_gallery\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`adote_blocks_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_text_block_order_idx\` ON \`adote_blocks_text_block\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_text_block_parent_id_idx\` ON \`adote_blocks_text_block\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_text_block_path_idx\` ON \`adote_blocks_text_block\` (\`_path\`);`
  );
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
  `);
  await db.run(sql`CREATE INDEX \`img_pos_order_idx\` ON \`img_pos\` (\`_order\`);`);
  await db.run(sql`CREATE INDEX \`img_pos_parent_id_idx\` ON \`img_pos\` (\`_parent_id\`);`);
  await db.run(sql`CREATE INDEX \`img_pos_path_idx\` ON \`img_pos\` (\`_path\`);`);
  await db.run(sql`CREATE INDEX \`img_pos_image_idx\` ON \`img_pos\` (\`image_id\`);`);
  await db.run(sql`CREATE TABLE \`adote_blocks_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`tag\` text DEFAULT 'h2' NOT NULL,
  	\`alignment\` text DEFAULT 'left' NOT NULL,
  	\`show_icon\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_title_order_idx\` ON \`adote_blocks_title\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_title_parent_id_idx\` ON \`adote_blocks_title\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_title_path_idx\` ON \`adote_blocks_title\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`adote_blocks_products_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`buy_link\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote_blocks_products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_products_products_order_idx\` ON \`adote_blocks_products_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_products_products_parent_id_idx\` ON \`adote_blocks_products_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_products_products_image_idx\` ON \`adote_blocks_products_products\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`adote_blocks_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'Compre e ajude!' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_products_order_idx\` ON \`adote_blocks_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_products_parent_id_idx\` ON \`adote_blocks_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_products_path_idx\` ON \`adote_blocks_products\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`adote_blocks_faq_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`pergunta\` text NOT NULL,
  	\`resposta\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_faq_faq_order_idx\` ON \`adote_blocks_faq_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_faq_faq_parent_id_idx\` ON \`adote_blocks_faq_faq\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`adote_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_blocks_faq_order_idx\` ON \`adote_blocks_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_faq_parent_id_idx\` ON \`adote_blocks_faq\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`adote_blocks_faq_path_idx\` ON \`adote_blocks_faq\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`adote\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `);
  await db.run(sql`CREATE TABLE \`adote_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`adote\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`adote_meta_meta_image_idx\` ON \`adote_locales\` (\`meta_image_id\`,\`_locale\`);`
  );
  await db.run(
    sql`CREATE UNIQUE INDEX \`adote_locales_locale_parent_id_unique\` ON \`adote_locales\` (\`_locale\`,\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`subtitle\` text,
  	\`background_image_id\` integer NOT NULL,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_hero_order_idx\` ON \`contato_blocks_hero\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_hero_parent_id_idx\` ON \`contato_blocks_hero\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_hero_path_idx\` ON \`contato_blocks_hero\` (\`_path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_hero_background_image_idx\` ON \`contato_blocks_hero\` (\`background_image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_gallery_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_gallery_images_order_idx\` ON \`contato_blocks_gallery_images\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_gallery_images_parent_id_idx\` ON \`contato_blocks_gallery_images\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_gallery_images_image_idx\` ON \`contato_blocks_gallery_images\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_gallery_order_idx\` ON \`contato_blocks_gallery\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_gallery_parent_id_idx\` ON \`contato_blocks_gallery\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_gallery_path_idx\` ON \`contato_blocks_gallery\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_text_block_order_idx\` ON \`contato_blocks_text_block\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_text_block_parent_id_idx\` ON \`contato_blocks_text_block\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_text_block_path_idx\` ON \`contato_blocks_text_block\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`tag\` text DEFAULT 'h2' NOT NULL,
  	\`alignment\` text DEFAULT 'left' NOT NULL,
  	\`show_icon\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_title_order_idx\` ON \`contato_blocks_title\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_title_parent_id_idx\` ON \`contato_blocks_title\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_title_path_idx\` ON \`contato_blocks_title\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_products_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`buy_link\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato_blocks_products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_products_products_order_idx\` ON \`contato_blocks_products_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_products_products_parent_id_idx\` ON \`contato_blocks_products_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_products_products_image_idx\` ON \`contato_blocks_products_products\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'Compre e ajude!' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_products_order_idx\` ON \`contato_blocks_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_products_parent_id_idx\` ON \`contato_blocks_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_products_path_idx\` ON \`contato_blocks_products\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_faq_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`pergunta\` text NOT NULL,
  	\`resposta\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_faq_faq_order_idx\` ON \`contato_blocks_faq_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_faq_faq_parent_id_idx\` ON \`contato_blocks_faq_faq\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`contato_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_blocks_faq_order_idx\` ON \`contato_blocks_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_faq_parent_id_idx\` ON \`contato_blocks_faq\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`contato_blocks_faq_path_idx\` ON \`contato_blocks_faq\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`contato\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `);
  await db.run(sql`CREATE TABLE \`contato_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`contato\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`contato_meta_meta_image_idx\` ON \`contato_locales\` (\`meta_image_id\`,\`_locale\`);`
  );
  await db.run(
    sql`CREATE UNIQUE INDEX \`contato_locales_locale_parent_id_unique\` ON \`contato_locales\` (\`_locale\`,\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`subtitle\` text,
  	\`background_image_id\` integer NOT NULL,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_hero_order_idx\` ON \`colabore_blocks_hero\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_hero_parent_id_idx\` ON \`colabore_blocks_hero\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_hero_path_idx\` ON \`colabore_blocks_hero\` (\`_path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_hero_background_image_idx\` ON \`colabore_blocks_hero\` (\`background_image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_gallery_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_gallery_images_order_idx\` ON \`colabore_blocks_gallery_images\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_gallery_images_parent_id_idx\` ON \`colabore_blocks_gallery_images\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_gallery_images_image_idx\` ON \`colabore_blocks_gallery_images\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_gallery_order_idx\` ON \`colabore_blocks_gallery\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_gallery_parent_id_idx\` ON \`colabore_blocks_gallery\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_gallery_path_idx\` ON \`colabore_blocks_gallery\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_text_block_order_idx\` ON \`colabore_blocks_text_block\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_text_block_parent_id_idx\` ON \`colabore_blocks_text_block\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_text_block_path_idx\` ON \`colabore_blocks_text_block\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`tag\` text DEFAULT 'h2' NOT NULL,
  	\`alignment\` text DEFAULT 'left' NOT NULL,
  	\`show_icon\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_title_order_idx\` ON \`colabore_blocks_title\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_title_parent_id_idx\` ON \`colabore_blocks_title\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_title_path_idx\` ON \`colabore_blocks_title\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_products_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`buy_link\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore_blocks_products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_products_products_order_idx\` ON \`colabore_blocks_products_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_products_products_parent_id_idx\` ON \`colabore_blocks_products_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_products_products_image_idx\` ON \`colabore_blocks_products_products\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'Compre e ajude!' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_products_order_idx\` ON \`colabore_blocks_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_products_parent_id_idx\` ON \`colabore_blocks_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_products_path_idx\` ON \`colabore_blocks_products\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_faq_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`pergunta\` text NOT NULL,
  	\`resposta\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_faq_faq_order_idx\` ON \`colabore_blocks_faq_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_faq_faq_parent_id_idx\` ON \`colabore_blocks_faq_faq\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_faq_order_idx\` ON \`colabore_blocks_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_faq_parent_id_idx\` ON \`colabore_blocks_faq\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`colabore_blocks_faq_path_idx\` ON \`colabore_blocks_faq\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`colabore\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`logobanco_id\` integer NOT NULL,
  	\`qrcode_id\` integer NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logobanco_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`qrcode_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `);
  await db.run(sql`CREATE INDEX \`colabore_logobanco_idx\` ON \`colabore\` (\`logobanco_id\`);`);
  await db.run(sql`CREATE INDEX \`colabore_qrcode_idx\` ON \`colabore\` (\`qrcode_id\`);`);
  await db.run(sql`CREATE TABLE \`colabore_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`colabore\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`colabore_meta_meta_image_idx\` ON \`colabore_locales\` (\`meta_image_id\`,\`_locale\`);`
  );
  await db.run(
    sql`CREATE UNIQUE INDEX \`colabore_locales_locale_parent_id_unique\` ON \`colabore_locales\` (\`_locale\`,\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`subtitle\` text,
  	\`background_image_id\` integer NOT NULL,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_hero_order_idx\` ON \`apadrinhe_blocks_hero\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_hero_parent_id_idx\` ON \`apadrinhe_blocks_hero\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_hero_path_idx\` ON \`apadrinhe_blocks_hero\` (\`_path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_hero_background_image_idx\` ON \`apadrinhe_blocks_hero\` (\`background_image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_gallery_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_gallery_images_order_idx\` ON \`apadrinhe_blocks_gallery_images\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_gallery_images_parent_id_idx\` ON \`apadrinhe_blocks_gallery_images\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_gallery_images_image_idx\` ON \`apadrinhe_blocks_gallery_images\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_gallery_order_idx\` ON \`apadrinhe_blocks_gallery\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_gallery_parent_id_idx\` ON \`apadrinhe_blocks_gallery\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_gallery_path_idx\` ON \`apadrinhe_blocks_gallery\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_text_block_order_idx\` ON \`apadrinhe_blocks_text_block\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_text_block_parent_id_idx\` ON \`apadrinhe_blocks_text_block\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_text_block_path_idx\` ON \`apadrinhe_blocks_text_block\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`tag\` text DEFAULT 'h2' NOT NULL,
  	\`alignment\` text DEFAULT 'left' NOT NULL,
  	\`show_icon\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_title_order_idx\` ON \`apadrinhe_blocks_title\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_title_parent_id_idx\` ON \`apadrinhe_blocks_title\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_title_path_idx\` ON \`apadrinhe_blocks_title\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_products_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`buy_link\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe_blocks_products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_products_products_order_idx\` ON \`apadrinhe_blocks_products_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_products_products_parent_id_idx\` ON \`apadrinhe_blocks_products_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_products_products_image_idx\` ON \`apadrinhe_blocks_products_products\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'Compre e ajude!' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_products_order_idx\` ON \`apadrinhe_blocks_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_products_parent_id_idx\` ON \`apadrinhe_blocks_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_products_path_idx\` ON \`apadrinhe_blocks_products\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_faq_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`pergunta\` text NOT NULL,
  	\`resposta\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_faq_faq_order_idx\` ON \`apadrinhe_blocks_faq_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_faq_faq_parent_id_idx\` ON \`apadrinhe_blocks_faq_faq\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_faq_order_idx\` ON \`apadrinhe_blocks_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_faq_parent_id_idx\` ON \`apadrinhe_blocks_faq\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`apadrinhe_blocks_faq_path_idx\` ON \`apadrinhe_blocks_faq\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`apadrinhe\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `);
  await db.run(sql`CREATE TABLE \`apadrinhe_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`apadrinhe\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`apadrinhe_meta_meta_image_idx\` ON \`apadrinhe_locales\` (\`meta_image_id\`,\`_locale\`);`
  );
  await db.run(
    sql`CREATE UNIQUE INDEX \`apadrinhe_locales_locale_parent_id_unique\` ON \`apadrinhe_locales\` (\`_locale\`,\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`subtitle\` text,
  	\`background_image_id\` integer NOT NULL,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_hero_order_idx\` ON \`politica_adocao_blocks_hero\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_hero_parent_id_idx\` ON \`politica_adocao_blocks_hero\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_hero_path_idx\` ON \`politica_adocao_blocks_hero\` (\`_path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_hero_background_image_idx\` ON \`politica_adocao_blocks_hero\` (\`background_image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_gallery_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_gallery_images_order_idx\` ON \`politica_adocao_blocks_gallery_images\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_gallery_images_parent_id_idx\` ON \`politica_adocao_blocks_gallery_images\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_gallery_images_image_idx\` ON \`politica_adocao_blocks_gallery_images\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_gallery_order_idx\` ON \`politica_adocao_blocks_gallery\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_gallery_parent_id_idx\` ON \`politica_adocao_blocks_gallery\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_gallery_path_idx\` ON \`politica_adocao_blocks_gallery\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_text_block_order_idx\` ON \`politica_adocao_blocks_text_block\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_text_block_parent_id_idx\` ON \`politica_adocao_blocks_text_block\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_text_block_path_idx\` ON \`politica_adocao_blocks_text_block\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`tag\` text DEFAULT 'h2' NOT NULL,
  	\`alignment\` text DEFAULT 'left' NOT NULL,
  	\`show_icon\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_title_order_idx\` ON \`politica_adocao_blocks_title\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_title_parent_id_idx\` ON \`politica_adocao_blocks_title\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_title_path_idx\` ON \`politica_adocao_blocks_title\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_products_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`buy_link\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao_blocks_products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_products_products_order_idx\` ON \`politica_adocao_blocks_products_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_products_products_parent_id_idx\` ON \`politica_adocao_blocks_products_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_products_products_image_idx\` ON \`politica_adocao_blocks_products_products\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'Compre e ajude!' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_products_order_idx\` ON \`politica_adocao_blocks_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_products_parent_id_idx\` ON \`politica_adocao_blocks_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_products_path_idx\` ON \`politica_adocao_blocks_products\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_faq_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`pergunta\` text NOT NULL,
  	\`resposta\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_faq_faq_order_idx\` ON \`politica_adocao_blocks_faq_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_faq_faq_parent_id_idx\` ON \`politica_adocao_blocks_faq_faq\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_faq_order_idx\` ON \`politica_adocao_blocks_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_faq_parent_id_idx\` ON \`politica_adocao_blocks_faq\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_adocao_blocks_faq_path_idx\` ON \`politica_adocao_blocks_faq\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_adocao\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `);
  await db.run(sql`CREATE TABLE \`politica_adocao_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_adocao\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_adocao_meta_meta_image_idx\` ON \`politica_adocao_locales\` (\`meta_image_id\`,\`_locale\`);`
  );
  await db.run(
    sql`CREATE UNIQUE INDEX \`politica_adocao_locales_locale_parent_id_unique\` ON \`politica_adocao_locales\` (\`_locale\`,\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`subtitle\` text,
  	\`background_image_id\` integer NOT NULL,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_hero_order_idx\` ON \`politica_apadrinhamento_blocks_hero\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_hero_parent_id_idx\` ON \`politica_apadrinhamento_blocks_hero\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_hero_path_idx\` ON \`politica_apadrinhamento_blocks_hero\` (\`_path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_hero_background_image_idx\` ON \`politica_apadrinhamento_blocks_hero\` (\`background_image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_gallery_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_gallery_images_order_idx\` ON \`politica_apadrinhamento_blocks_gallery_images\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_gallery_images_parent_id_idx\` ON \`politica_apadrinhamento_blocks_gallery_images\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_gallery_images_image_idx\` ON \`politica_apadrinhamento_blocks_gallery_images\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_gallery_order_idx\` ON \`politica_apadrinhamento_blocks_gallery\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_gallery_parent_id_idx\` ON \`politica_apadrinhamento_blocks_gallery\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_gallery_path_idx\` ON \`politica_apadrinhamento_blocks_gallery\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_text_block_order_idx\` ON \`politica_apadrinhamento_blocks_text_block\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_text_block_parent_id_idx\` ON \`politica_apadrinhamento_blocks_text_block\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_text_block_path_idx\` ON \`politica_apadrinhamento_blocks_text_block\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`tag\` text DEFAULT 'h2' NOT NULL,
  	\`alignment\` text DEFAULT 'left' NOT NULL,
  	\`show_icon\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_title_order_idx\` ON \`politica_apadrinhamento_blocks_title\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_title_parent_id_idx\` ON \`politica_apadrinhamento_blocks_title\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_title_path_idx\` ON \`politica_apadrinhamento_blocks_title\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_products_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`buy_link\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento_blocks_products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_products_products_order_idx\` ON \`politica_apadrinhamento_blocks_products_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_products_products_parent_id_idx\` ON \`politica_apadrinhamento_blocks_products_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_products_products_image_idx\` ON \`politica_apadrinhamento_blocks_products_products\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'Compre e ajude!' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_products_order_idx\` ON \`politica_apadrinhamento_blocks_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_products_parent_id_idx\` ON \`politica_apadrinhamento_blocks_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_products_path_idx\` ON \`politica_apadrinhamento_blocks_products\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_faq_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`pergunta\` text NOT NULL,
  	\`resposta\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_faq_faq_order_idx\` ON \`politica_apadrinhamento_blocks_faq_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_faq_faq_parent_id_idx\` ON \`politica_apadrinhamento_blocks_faq_faq\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_faq_order_idx\` ON \`politica_apadrinhamento_blocks_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_faq_parent_id_idx\` ON \`politica_apadrinhamento_blocks_faq\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_blocks_faq_path_idx\` ON \`politica_apadrinhamento_blocks_faq\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `);
  await db.run(sql`CREATE TABLE \`politica_apadrinhamento_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`politica_apadrinhamento\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`politica_apadrinhamento_meta_meta_image_idx\` ON \`politica_apadrinhamento_locales\` (\`meta_image_id\`,\`_locale\`);`
  );
  await db.run(
    sql`CREATE UNIQUE INDEX \`politica_apadrinhamento_locales_locale_parent_id_unique\` ON \`politica_apadrinhamento_locales\` (\`_locale\`,\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`subtitle\` text,
  	\`background_image_id\` integer NOT NULL,
  	\`cta_text\` text,
  	\`cta_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_hero_order_idx\` ON \`homepage_blocks_hero\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_hero_parent_id_idx\` ON \`homepage_blocks_hero\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_hero_path_idx\` ON \`homepage_blocks_hero\` (\`_path\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_hero_background_image_idx\` ON \`homepage_blocks_hero\` (\`background_image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_gallery_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`caption\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_gallery_images_order_idx\` ON \`homepage_blocks_gallery_images\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_gallery_images_parent_id_idx\` ON \`homepage_blocks_gallery_images\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_gallery_images_image_idx\` ON \`homepage_blocks_gallery_images\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_gallery_order_idx\` ON \`homepage_blocks_gallery\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_gallery_parent_id_idx\` ON \`homepage_blocks_gallery\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_gallery_path_idx\` ON \`homepage_blocks_gallery\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_text_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content\` text NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_text_block_order_idx\` ON \`homepage_blocks_text_block\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_text_block_parent_id_idx\` ON \`homepage_blocks_text_block\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_text_block_path_idx\` ON \`homepage_blocks_text_block\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text NOT NULL,
  	\`tag\` text DEFAULT 'h2' NOT NULL,
  	\`alignment\` text DEFAULT 'left' NOT NULL,
  	\`show_icon\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_title_order_idx\` ON \`homepage_blocks_title\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_title_parent_id_idx\` ON \`homepage_blocks_title\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_title_path_idx\` ON \`homepage_blocks_title\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_products_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`description\` text,
  	\`price\` numeric NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`buy_link\` text NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage_blocks_products\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_products_products_order_idx\` ON \`homepage_blocks_products_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_products_products_parent_id_idx\` ON \`homepage_blocks_products_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_products_products_image_idx\` ON \`homepage_blocks_products_products\` (\`image_id\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_products\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'Compre e ajude!' NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_products_order_idx\` ON \`homepage_blocks_products\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_products_parent_id_idx\` ON \`homepage_blocks_products\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_products_path_idx\` ON \`homepage_blocks_products\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_faq_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`pergunta\` text NOT NULL,
  	\`resposta\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_faq_faq_order_idx\` ON \`homepage_blocks_faq_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_faq_faq_parent_id_idx\` ON \`homepage_blocks_faq_faq\` (\`_parent_id\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_faq_order_idx\` ON \`homepage_blocks_faq\` (\`_order\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_faq_parent_id_idx\` ON \`homepage_blocks_faq\` (\`_parent_id\`);`
  );
  await db.run(
    sql`CREATE INDEX \`homepage_blocks_faq_path_idx\` ON \`homepage_blocks_faq\` (\`_path\`);`
  );
  await db.run(sql`CREATE TABLE \`homepage\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `);
  await db.run(sql`CREATE TABLE \`homepage_locales\` (
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`homepage\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `);
  await db.run(
    sql`CREATE INDEX \`homepage_meta_meta_image_idx\` ON \`homepage_locales\` (\`meta_image_id\`,\`_locale\`);`
  );
  await db.run(
    sql`CREATE UNIQUE INDEX \`homepage_locales_locale_parent_id_unique\` ON \`homepage_locales\` (\`_locale\`,\`_parent_id\`);`
  );
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`cats_galeria\`;`);
  await db.run(sql`DROP TABLE \`cats_vacinas\`;`);
  await db.run(sql`DROP TABLE \`cats_vermifugacoes\`;`);
  await db.run(sql`DROP TABLE \`cats\`;`);
  await db.run(sql`DROP TABLE \`adoptions\`;`);
  await db.run(sql`DROP TABLE \`users\`;`);
  await db.run(sql`DROP TABLE \`guardians\`;`);
  await db.run(sql`DROP TABLE \`media\`;`);
  await db.run(sql`DROP TABLE \`sponsorships\`;`);
  await db.run(sql`DROP TABLE \`sponsorships_rels\`;`);
  await db.run(sql`DROP TABLE \`cron_logs\`;`);
  await db.run(sql`DROP TABLE \`exports\`;`);
  await db.run(sql`DROP TABLE \`exports_texts\`;`);
  await db.run(sql`DROP TABLE \`payload_jobs_log\`;`);
  await db.run(sql`DROP TABLE \`payload_jobs\`;`);
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`);
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`);
  await db.run(sql`DROP TABLE \`payload_preferences\`;`);
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`);
  await db.run(sql`DROP TABLE \`payload_migrations\`;`);
  await db.run(sql`DROP TABLE \`site_config_links\`;`);
  await db.run(sql`DROP TABLE \`site_config\`;`);
  await db.run(sql`DROP TABLE \`sobre\`;`);
  await db.run(sql`DROP TABLE \`sobre_locales\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_hero\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_gallery_images\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_gallery\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_text_block\`;`);
  await db.run(sql`DROP TABLE \`img_pos\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_title\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_products_products\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_products\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_faq_faq\`;`);
  await db.run(sql`DROP TABLE \`adote_blocks_faq\`;`);
  await db.run(sql`DROP TABLE \`adote\`;`);
  await db.run(sql`DROP TABLE \`adote_locales\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_hero\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_gallery_images\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_gallery\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_text_block\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_title\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_products_products\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_products\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_faq_faq\`;`);
  await db.run(sql`DROP TABLE \`contato_blocks_faq\`;`);
  await db.run(sql`DROP TABLE \`contato\`;`);
  await db.run(sql`DROP TABLE \`contato_locales\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_hero\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_gallery_images\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_gallery\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_text_block\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_title\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_products_products\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_products\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_faq_faq\`;`);
  await db.run(sql`DROP TABLE \`colabore_blocks_faq\`;`);
  await db.run(sql`DROP TABLE \`colabore\`;`);
  await db.run(sql`DROP TABLE \`colabore_locales\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_hero\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_gallery_images\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_gallery\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_text_block\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_title\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_products_products\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_products\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_faq_faq\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_blocks_faq\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe\`;`);
  await db.run(sql`DROP TABLE \`apadrinhe_locales\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_hero\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_gallery_images\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_gallery\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_text_block\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_title\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_products_products\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_products\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_faq_faq\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_blocks_faq\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao\`;`);
  await db.run(sql`DROP TABLE \`politica_adocao_locales\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_hero\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_gallery_images\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_gallery\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_text_block\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_title\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_products_products\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_products\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_faq_faq\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_blocks_faq\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento\`;`);
  await db.run(sql`DROP TABLE \`politica_apadrinhamento_locales\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_hero\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_gallery_images\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_gallery\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_text_block\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_title\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_products_products\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_products\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_faq_faq\`;`);
  await db.run(sql`DROP TABLE \`homepage_blocks_faq\`;`);
  await db.run(sql`DROP TABLE \`homepage\`;`);
  await db.run(sql`DROP TABLE \`homepage_locales\`;`);
}

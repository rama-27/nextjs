CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"decentro_id" text,
	"name" text NOT NULL,
	"user_id" text NOT NULL
);

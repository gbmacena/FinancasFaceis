-- Adicionar a coluna `name` como opcional (sem NOT NULL inicialmente)
ALTER TABLE "User" ADD COLUMN "name" TEXT;

-- Preencher os registros existentes com um valor padrão
UPDATE "User" SET "name" = 'Usuário Padrão' WHERE "name" IS NULL;

-- Alterar a coluna para ser obrigatória (NOT NULL)
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
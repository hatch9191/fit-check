-- CreateEnum
CREATE TYPE "request_state" AS ENUM ('PENDING', 'SUBMITTED', 'RESPONDED');

-- CreateTable
CREATE TABLE "request" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "creator_id" UUID NOT NULL,
    "subtotal" INTEGER,
    "quantity" INTEGER,
    "description" TEXT,
    "creatorMessage" TEXT,
    "state" "request_state" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "request_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

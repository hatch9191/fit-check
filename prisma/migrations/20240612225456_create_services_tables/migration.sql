-- CreateEnum
CREATE TYPE "service_state" AS ENUM ('INCOMPLETE', 'COMPLETE', 'LIVE');

-- CreateTable
CREATE TABLE "service" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "service_type_id" UUID NOT NULL,
    "subtotal" INTEGER,
    "quantity" INTEGER,
    "description" TEXT,
    "state" "service_state" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_type" (
    "id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_service_type_id_fkey" FOREIGN KEY ("service_type_id") REFERENCES "service_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

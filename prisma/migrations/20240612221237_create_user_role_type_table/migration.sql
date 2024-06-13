/*
  Warnings:

  - You are about to drop the `RoleType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "RoleType";

-- CreateTable
CREATE TABLE "user_role_type" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role_type_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_role_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role_type" (
    "id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "role_type_pkey" PRIMARY KEY ("id")
);

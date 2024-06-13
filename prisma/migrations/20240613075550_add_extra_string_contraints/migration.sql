/*
  Warnings:

  - You are about to alter the column `url` on the `image` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `key` on the `image` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `bucket` on the `image` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `type` on the `role_type` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `type` on the `service_type` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `first_name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `last_name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `profile_name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "image" ALTER COLUMN "url" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "key" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "bucket" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "role_type" ALTER COLUMN "type" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "service_type" ALTER COLUMN "type" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "first_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "last_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "profile_name" SET DATA TYPE VARCHAR(255);

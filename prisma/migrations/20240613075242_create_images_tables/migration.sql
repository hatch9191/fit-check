/*
  Warnings:

  - You are about to drop the `review` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[profile_image_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_request_id_fkey";

-- DropTable
DROP TABLE "review";

-- CreateTable
CREATE TABLE "request_item_image" (
    "id" UUID NOT NULL,
    "request_item_id" UUID NOT NULL,
    "image_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "request_item_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request_review" (
    "id" UUID NOT NULL,
    "request_id" UUID NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "feedback" TEXT,
    "show_review_name" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "request_review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "bucket" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "request_review_request_id_key" ON "request_review"("request_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_image_id_key" ON "user"("profile_image_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_profile_image_id_fkey" FOREIGN KEY ("profile_image_id") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_item_image" ADD CONSTRAINT "request_item_image_request_item_id_fkey" FOREIGN KEY ("request_item_id") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_item_image" ADD CONSTRAINT "request_item_image_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_review" ADD CONSTRAINT "request_review_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

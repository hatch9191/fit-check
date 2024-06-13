/*
  Warnings:

  - You are about to drop the column `show_review_name` on the `request_review` table. All the data in the column will be lost.
  - Added the required column `show_reviewer_name` to the `request_review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "request_review" DROP COLUMN "show_review_name",
ADD COLUMN     "show_reviewer_name" BOOLEAN NOT NULL;

/*
  Warnings:

  - A unique constraint covering the columns `[user_id,role_type_id]` on the table `user_role_type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_role_type_unique_key" ON "user_role_type"("user_id", "role_type_id");

-- AddForeignKey
ALTER TABLE "user_role_type" ADD CONSTRAINT "user_role_type_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role_type" ADD CONSTRAINT "user_role_type_role_type_id_fkey" FOREIGN KEY ("role_type_id") REFERENCES "role_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

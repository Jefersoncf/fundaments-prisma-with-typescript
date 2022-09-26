/*
  Warnings:

  - Added the required column `fk_id_teacher` to the `modules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teachersId` to the `modules` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "courses_fk_id_teacher_key";

-- AlterTable
ALTER TABLE "modules" ADD COLUMN     "fk_id_teacher" TEXT NOT NULL,
ADD COLUMN     "teachersId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teachers" ADD COLUMN     "coursesId" TEXT;

-- AddForeignKey
ALTER TABLE "modules" ADD CONSTRAINT "modules_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

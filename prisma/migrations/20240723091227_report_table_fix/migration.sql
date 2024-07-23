/*
  Warnings:

  - You are about to drop the column `opis` on the `Report` table. All the data in the column will be lost.
  - Added the required column `description` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "opis",
ADD COLUMN     "description" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `data` on the `Text` table. All the data in the column will be lost.
  - Added the required column `text` to the `Text` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Text" DROP COLUMN "data",
ADD COLUMN     "text" TEXT NOT NULL;

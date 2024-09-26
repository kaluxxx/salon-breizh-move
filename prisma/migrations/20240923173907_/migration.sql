/*
  Warnings:

  - You are about to drop the column `size` on the `stand_variants` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `stands` table. All the data in the column will be lost.
  - Added the required column `description` to the `stand_variants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `stand_variants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stand_variants" DROP COLUMN "size",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "stands" DROP COLUMN "description";

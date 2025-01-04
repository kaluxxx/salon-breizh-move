/*
  Warnings:

  - You are about to drop the column `name` on the `breizhmove_contacts` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `breizhmove_contacts` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `breizhmove_contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `breizhmove_contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "breizhmove_contacts" DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

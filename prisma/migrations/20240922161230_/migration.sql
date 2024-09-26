/*
  Warnings:

  - You are about to drop the column `companyEmail` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `companyPhone` on the `addresses` table. All the data in the column will be lost.
  - Added the required column `email` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "companyEmail",
DROP COLUMN "companyPhone",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

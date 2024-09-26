/*
  Warnings:

  - You are about to drop the column `metadata` on the `stands` table. All the data in the column will be lost.
  - You are about to drop the column `servicesIncluded` on the `stands` table. All the data in the column will be lost.
  - Added the required column `description` to the `stands` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stands" DROP COLUMN "metadata",
DROP COLUMN "servicesIncluded",
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "stand_variants" (
    "id" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "standId" TEXT NOT NULL,

    CONSTRAINT "stand_variants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stand_variants" ADD CONSTRAINT "stand_variants_standId_fkey" FOREIGN KEY ("standId") REFERENCES "stands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

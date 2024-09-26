/*
  Warnings:

  - You are about to drop the column `coExhibitors` on the `exhibitors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "exhibitors" DROP COLUMN "coExhibitors";

-- AlterTable
ALTER TABLE "stand_variants" ADD COLUMN     "maxSize" DOUBLE PRECISION,
ADD COLUMN     "minSize" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "coexhibitors" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "exhibitorId" TEXT NOT NULL,

    CONSTRAINT "coexhibitors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "coexhibitors" ADD CONSTRAINT "coexhibitors_exhibitorId_fkey" FOREIGN KEY ("exhibitorId") REFERENCES "exhibitors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

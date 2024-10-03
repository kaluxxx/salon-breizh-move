/*
  Warnings:

  - You are about to drop the column `registrationFees` on the `exhibitors` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[exhibitorId]` on the table `carts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exhibitorId` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carts" ADD COLUMN     "exhibitorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "exhibitors" DROP COLUMN "registrationFees";

-- CreateIndex
CREATE UNIQUE INDEX "carts_exhibitorId_key" ON "carts"("exhibitorId");

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_exhibitorId_fkey" FOREIGN KEY ("exhibitorId") REFERENCES "exhibitors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

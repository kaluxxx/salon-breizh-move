/*
  Warnings:

  - You are about to drop the column `type` on the `stands` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `stands` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stands" DROP COLUMN "type",
ADD COLUMN     "typeId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "StandType";

-- CreateTable
CREATE TABLE "standtypes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "standtypes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "stands" ADD CONSTRAINT "stands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "standtypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

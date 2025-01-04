/*
  Warnings:

  - You are about to drop the `standsmetadata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `standtypes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `metadata` to the `stands` table without a default value. This is not possible if the table is not empty.
  - Added the required column `types` to the `stands` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "stands" DROP CONSTRAINT "stands_typeId_fkey";

-- DropForeignKey
ALTER TABLE "standsmetadata" DROP CONSTRAINT "standsmetadata_standId_fkey";

-- AlterTable
ALTER TABLE "stands" ADD COLUMN     "metadata" JSONB NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "standsmetadata";

-- DropTable
DROP TABLE "standtypes";

/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exhibitor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShowGuide` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StandMetadata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Thematic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Exhibitor" DROP CONSTRAINT "Exhibitor_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Exhibitor" DROP CONSTRAINT "Exhibitor_billingAddressId_fkey";

-- DropForeignKey
ALTER TABLE "Exhibitor" DROP CONSTRAINT "Exhibitor_companyManagerId_fkey";

-- DropForeignKey
ALTER TABLE "Exhibitor" DROP CONSTRAINT "Exhibitor_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Exhibitor" DROP CONSTRAINT "Exhibitor_onSiteContactId_fkey";

-- DropForeignKey
ALTER TABLE "Exhibitor" DROP CONSTRAINT "Exhibitor_showGuideId_fkey";

-- DropForeignKey
ALTER TABLE "Exhibitor" DROP CONSTRAINT "Exhibitor_standManagerId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "ShowGuide" DROP CONSTRAINT "ShowGuide_addressId_fkey";

-- DropForeignKey
ALTER TABLE "StandMetadata" DROP CONSTRAINT "StandMetadata_standId_fkey";

-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ShowGuideThematics" DROP CONSTRAINT "_ShowGuideThematics_A_fkey";

-- DropForeignKey
ALTER TABLE "_ShowGuideThematics" DROP CONSTRAINT "_ShowGuideThematics_B_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "EventType";

-- DropTable
DROP TABLE "Exhibitor";

-- DropTable
DROP TABLE "Person";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "ShowGuide";

-- DropTable
DROP TABLE "Stand";

-- DropTable
DROP TABLE "StandMetadata";

-- DropTable
DROP TABLE "Thematic";

-- DropTable
DROP TABLE "Token";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "emailVerified" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "persons" (
    "id" TEXT NOT NULL,
    "civility" "Civility" NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "additionalAddress" TEXT,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "companyPhone" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exhibitors" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "billingAddressId" TEXT,
    "siret" TEXT NOT NULL,
    "apeCode" TEXT NOT NULL,
    "tvaNumber" TEXT NOT NULL,
    "companyManagerId" TEXT NOT NULL,
    "standManagerId" TEXT NOT NULL,
    "onSiteContactId" TEXT NOT NULL,
    "showGuideId" TEXT NOT NULL,
    "closeTo" TEXT,
    "awayFrom" TEXT,
    "comments" TEXT,
    "nbCoExhibitors" INTEGER,
    "coExhibitors" TEXT[],
    "registrationFees" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "eventId" TEXT,

    CONSTRAINT "exhibitors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "showguides" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "businessDescription" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "showguides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thematics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "thematics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stands" (
    "id" TEXT NOT NULL,
    "type" "StandType" NOT NULL,
    "servicesIncluded" TEXT[],

    CONSTRAINT "stands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "standsmetadata" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "standId" TEXT NOT NULL,

    CONSTRAINT "standsmetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startHour" TEXT NOT NULL,
    "endHour" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventtypes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "eventtypes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_identifier_token_key" ON "verificationtokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exhibitors" ADD CONSTRAINT "exhibitors_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exhibitors" ADD CONSTRAINT "exhibitors_billingAddressId_fkey" FOREIGN KEY ("billingAddressId") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exhibitors" ADD CONSTRAINT "exhibitors_companyManagerId_fkey" FOREIGN KEY ("companyManagerId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exhibitors" ADD CONSTRAINT "exhibitors_standManagerId_fkey" FOREIGN KEY ("standManagerId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exhibitors" ADD CONSTRAINT "exhibitors_onSiteContactId_fkey" FOREIGN KEY ("onSiteContactId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exhibitors" ADD CONSTRAINT "exhibitors_showGuideId_fkey" FOREIGN KEY ("showGuideId") REFERENCES "showguides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exhibitors" ADD CONSTRAINT "exhibitors_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "showguides" ADD CONSTRAINT "showguides_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "standsmetadata" ADD CONSTRAINT "standsmetadata_standId_fkey" FOREIGN KEY ("standId") REFERENCES "stands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "eventtypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowGuideThematics" ADD CONSTRAINT "_ShowGuideThematics_A_fkey" FOREIGN KEY ("A") REFERENCES "showguides"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShowGuideThematics" ADD CONSTRAINT "_ShowGuideThematics_B_fkey" FOREIGN KEY ("B") REFERENCES "thematics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "breizhmove_contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "breizhmove_contacts_pkey" PRIMARY KEY ("id")
);

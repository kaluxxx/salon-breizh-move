-- AlterTable
ALTER TABLE "breizhmove_accounts" RENAME CONSTRAINT "accounts_pkey" TO "breizhmove_accounts_pkey";

-- AlterTable
ALTER TABLE "breizhmove_addresses" RENAME CONSTRAINT "addresses_pkey" TO "breizhmove_addresses_pkey";

-- AlterTable
ALTER TABLE "breizhmove_cart_items" RENAME CONSTRAINT "cart_items_pkey" TO "breizhmove_cart_items_pkey";

-- AlterTable
ALTER TABLE "breizhmove_carts" RENAME CONSTRAINT "carts_pkey" TO "breizhmove_carts_pkey";

-- AlterTable
ALTER TABLE "breizhmove_coexhibitors" RENAME CONSTRAINT "coexhibitors_pkey" TO "breizhmove_coexhibitors_pkey";

-- AlterTable
ALTER TABLE "breizhmove_events" RENAME CONSTRAINT "events_pkey" TO "breizhmove_events_pkey";

-- AlterTable
ALTER TABLE "breizhmove_eventtypes" RENAME CONSTRAINT "eventtypes_pkey" TO "breizhmove_eventtypes_pkey";

-- AlterTable
ALTER TABLE "breizhmove_exhibitors" RENAME CONSTRAINT "exhibitors_pkey" TO "breizhmove_exhibitors_pkey";

-- AlterTable
ALTER TABLE "breizhmove_persons" RENAME CONSTRAINT "persons_pkey" TO "breizhmove_persons_pkey";

-- AlterTable
ALTER TABLE "breizhmove_sessions" RENAME CONSTRAINT "sessions_pkey" TO "breizhmove_sessions_pkey";

-- AlterTable
ALTER TABLE "breizhmove_showguides" RENAME CONSTRAINT "showguides_pkey" TO "breizhmove_showguides_pkey";

-- AlterTable
ALTER TABLE "breizhmove_stand_variants" RENAME CONSTRAINT "stand_variants_pkey" TO "breizhmove_stand_variants_pkey";

-- AlterTable
ALTER TABLE "breizhmove_stands" RENAME CONSTRAINT "stands_pkey" TO "breizhmove_stands_pkey";

-- AlterTable
ALTER TABLE "breizhmove_thematics" RENAME CONSTRAINT "thematics_pkey" TO "breizhmove_thematics_pkey";

-- AlterTable
ALTER TABLE "breizhmove_users" RENAME CONSTRAINT "users_pkey" TO "breizhmove_users_pkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_accounts" RENAME CONSTRAINT "accounts_user_id_fkey" TO "breizhmove_accounts_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_cart_items" RENAME CONSTRAINT "cart_items_cartId_fkey" TO "breizhmove_cart_items_cartId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_cart_items" RENAME CONSTRAINT "cart_items_standVariantId_fkey" TO "breizhmove_cart_items_standVariantId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_carts" RENAME CONSTRAINT "carts_exhibitorId_fkey" TO "breizhmove_carts_exhibitorId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_coexhibitors" RENAME CONSTRAINT "coexhibitors_exhibitorId_fkey" TO "breizhmove_coexhibitors_exhibitorId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_events" RENAME CONSTRAINT "events_typeId_fkey" TO "breizhmove_events_typeId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_exhibitors" RENAME CONSTRAINT "exhibitors_addressId_fkey" TO "breizhmove_exhibitors_addressId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_exhibitors" RENAME CONSTRAINT "exhibitors_billingAddressId_fkey" TO "breizhmove_exhibitors_billingAddressId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_exhibitors" RENAME CONSTRAINT "exhibitors_companyManagerId_fkey" TO "breizhmove_exhibitors_companyManagerId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_exhibitors" RENAME CONSTRAINT "exhibitors_eventId_fkey" TO "breizhmove_exhibitors_eventId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_exhibitors" RENAME CONSTRAINT "exhibitors_onSiteContactId_fkey" TO "breizhmove_exhibitors_onSiteContactId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_exhibitors" RENAME CONSTRAINT "exhibitors_showGuideId_fkey" TO "breizhmove_exhibitors_showGuideId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_exhibitors" RENAME CONSTRAINT "exhibitors_standManagerId_fkey" TO "breizhmove_exhibitors_standManagerId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_sessions" RENAME CONSTRAINT "sessions_user_id_fkey" TO "breizhmove_sessions_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_showguides" RENAME CONSTRAINT "showguides_addressId_fkey" TO "breizhmove_showguides_addressId_fkey";

-- RenameForeignKey
ALTER TABLE "breizhmove_stand_variants" RENAME CONSTRAINT "stand_variants_standId_fkey" TO "breizhmove_stand_variants_standId_fkey";

-- RenameIndex
ALTER INDEX "accounts_provider_provider_account_id_key" RENAME TO "breizhmove_accounts_provider_provider_account_id_key";

-- RenameIndex
ALTER INDEX "carts_exhibitorId_key" RENAME TO "breizhmove_carts_exhibitorId_key";

-- RenameIndex
ALTER INDEX "sessions_session_token_key" RENAME TO "breizhmove_sessions_session_token_key";

-- RenameIndex
ALTER INDEX "users_email_key" RENAME TO "breizhmove_users_email_key";

-- RenameIndex
ALTER INDEX "verificationtokens_identifier_token_key" RENAME TO "breizhmove_verificationtokens_identifier_token_key";

-- prisma/migrations/20241004113653_add_prefix_to_tables/migration.sql

-- Renommer les tables existantes en ajoutant le préfixe 'breizhmove_'
ALTER TABLE users RENAME TO breizhmove_users;
ALTER TABLE accounts RENAME TO breizhmove_accounts;
ALTER TABLE sessions RENAME TO breizhmove_sessions;
ALTER TABLE verificationtokens RENAME TO breizhmove_verificationtokens;
ALTER TABLE addresses RENAME TO breizhmove_addresses;
ALTER TABLE exhibitors RENAME TO breizhmove_exhibitors;
ALTER TABLE carts RENAME TO breizhmove_carts;
ALTER TABLE cart_items RENAME TO breizhmove_cart_items;
ALTER TABLE showguides RENAME TO breizhmove_showguides;
ALTER TABLE coexhibitors RENAME TO breizhmove_coexhibitors;
ALTER TABLE thematics RENAME TO breizhmove_thematics;
ALTER TABLE stands RENAME TO breizhmove_stands;
ALTER TABLE stand_variants RENAME TO breizhmove_stand_variants;
ALTER TABLE events RENAME TO breizhmove_events;
ALTER TABLE eventtypes RENAME TO breizhmove_eventtypes;
ALTER TABLE persons RENAME TO breizhmove_persons;

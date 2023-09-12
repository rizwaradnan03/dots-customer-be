-- CreateTable
CREATE TABLE "reservations" (
    "id" TEXT NOT NULL,
    "branch_id" TEXT,
    "destination_service" INTEGER,
    "reason" TEXT,
    "attend_at_start" TIMESTAMP(3),
    "attend_at_end" TIMESTAMP(3),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "delete_at" TIMESTAMP,
    "is_active" BOOLEAN DEFAULT false,
    "created_by_id" TEXT,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "savings" (
    "id" TEXT NOT NULL,
    "externalId" TEXT,
    "currentBalance" INTEGER,
    "availableBalance" INTEGER,
    "status" INTEGER,
    "productType" TEXT,
    "last_synced_at" TIMESTAMP,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP,
    "created_by_id" TEXT,
    "updated_by_id" TEXT,
    "deleted_by_id" TEXT,
    "customer_id" TEXT,

    CONSTRAINT "savings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenants" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT,
    "name" TEXT,
    "database_schema_name" TEXT,
    "core_type" TEXT,
    "core_database_type" TEXT,
    "core_database_dsn" TEXT,
    "logo_url_base64" TEXT,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "is_active" BOOLEAN,
    "email" TEXT,
    "email_confirmed_at" TIMESTAMP,
    "username" TEXT,
    "password" TEXT,
    "last_name" TEXT,
    "first_name" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "delete_at" TIMESTAMP(3),
    "account_officer_id" TEXT DEFAULT 'CORPORATE',
    "client_type" TEXT,
    "tenant_id" INTEGER,
    "branch_id" TEXT,
    "customer_id" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "external_id" TEXT,
    "full_name" TEXT,
    "identity_number" TEXT,
    "identity_type" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "mobile_number" TEXT,
    "gender" TEXT,
    "address" TEXT,
    "subdistrict" TEXT,
    "district" TEXT,
    "mother_maiden_name" TEXT,
    "referral_code" TEXT,
    "dati2_code" TEXT,
    "identity_photo_url" TEXT,
    "selfie_photo_url" TEXT,
    "birth_place" TEXT,
    "birth_date" DATE,
    "status" INTEGER,
    "last_synced_at" TIMESTAMP,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP,
    "created_by_id" TEXT,
    "updated_by_id" TEXT,
    "deleted_by_id" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "file_name" TEXT,
    "is_on_carousel" BOOLEAN,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_updated_by_id_fkey" FOREIGN KEY ("updated_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_deleted_by_id_fkey" FOREIGN KEY ("deleted_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_updated_by_id_fkey" FOREIGN KEY ("updated_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_deleted_by_id_fkey" FOREIGN KEY ("deleted_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

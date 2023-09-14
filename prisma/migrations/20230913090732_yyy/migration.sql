-- CreateTable
CREATE TABLE "deposits" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "transactionId" TEXT,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "deposits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loans" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "saving" INTEGER NOT NULL,
    "norek" TEXT NOT NULL,
    "loan" INTEGER NOT NULL,

    CONSTRAINT "loans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loan_transactions" (
    "id" TEXT NOT NULL,
    "transactionsId" TEXT NOT NULL,
    "principalPaid" INTEGER NOT NULL,
    "interestPaid" INTEGER NOT NULL,
    "penaltyPaid" INTEGER NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "loan_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoleType" (
    "id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RoleType_pkey" PRIMARY KEY ("id")
);

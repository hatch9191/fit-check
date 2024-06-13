-- CreateTable
CREATE TABLE "request_item" (
    "id" UUID NOT NULL,
    "request_id" UUID NOT NULL,
    "service_type_id" UUID NOT NULL,
    "feedback" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "request_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" UUID NOT NULL,
    "request_id" UUID NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "feedback" TEXT,
    "show_review_name" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "review_request_id_key" ON "review"("request_id");

-- AddForeignKey
ALTER TABLE "request_item" ADD CONSTRAINT "request_item_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_item" ADD CONSTRAINT "request_item_service_type_id_fkey" FOREIGN KEY ("service_type_id") REFERENCES "service_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE;

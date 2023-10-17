-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "pet_gallery" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "pets_id" TEXT NOT NULL,

    CONSTRAINT "pet_gallery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pet_gallery" ADD CONSTRAINT "pet_gallery_pets_id_fkey" FOREIGN KEY ("pets_id") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

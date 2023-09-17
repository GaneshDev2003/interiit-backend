-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('PARTICIPANT', 'ADMIN');

-- AlterTable
ALTER TABLE "IIT" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'PARTICIPANT';

-- CreateTable
CREATE TABLE "PS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "psType" "PSType" NOT NULL,

    CONSTRAINT "PS_pkey" PRIMARY KEY ("id")
);

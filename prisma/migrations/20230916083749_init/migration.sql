/*
  Warnings:

  - Added the required column `phone` to the `TeamMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TeamMember" ADD COLUMN     "phone" TEXT NOT NULL;

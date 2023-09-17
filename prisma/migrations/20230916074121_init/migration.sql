/*
  Warnings:

  - You are about to drop the column `name` on the `PSTeam` table. All the data in the column will be lost.
  - Added the required column `ps_id` to the `PSTeam` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PSTeam_name_key";

-- AlterTable
ALTER TABLE "PSTeam" DROP COLUMN "name",
ADD COLUMN     "ps_id" TEXT NOT NULL;

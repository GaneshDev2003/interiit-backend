/*
  Warnings:

  - You are about to drop the column `ps_type` on the `PSTeam` table. All the data in the column will be lost.
  - Added the required column `discordId` to the `TeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodPref` to the `TeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCardUrl` to the `TeamMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tshirt` to the `TeamMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PSTeam" DROP COLUMN "ps_type";

-- AlterTable
ALTER TABLE "TeamMember" ADD COLUMN     "discordId" TEXT NOT NULL,
ADD COLUMN     "foodPref" TEXT NOT NULL,
ADD COLUMN     "idCardUrl" TEXT NOT NULL,
ADD COLUMN     "tshirt" TEXT NOT NULL;

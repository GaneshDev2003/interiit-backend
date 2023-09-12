-- CreateEnum
CREATE TYPE "PSType" AS ENUM ('HIGH', 'MID', 'LOW', 'NO');

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "team_id" INTEGER NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PSTeam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ps_type" "PSType" NOT NULL,
    "iit_id" INTEGER NOT NULL,

    CONSTRAINT "PSTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IIT" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "IIT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamMember_name_key" ON "TeamMember"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TeamMember_team_id_key" ON "TeamMember"("team_id");

-- CreateIndex
CREATE UNIQUE INDEX "PSTeam_name_key" ON "PSTeam"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PSTeam_iit_id_key" ON "PSTeam"("iit_id");

-- CreateIndex
CREATE UNIQUE INDEX "IIT_name_key" ON "IIT"("name");

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "PSTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PSTeam" ADD CONSTRAINT "PSTeam_iit_id_fkey" FOREIGN KEY ("iit_id") REFERENCES "IIT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `cityName` on the `Player` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "cityName";

-- CreateTable
CREATE TABLE "Battle" (
    "id" TEXT NOT NULL,
    "strength" INTEGER NOT NULL DEFAULT 10,
    "defense" INTEGER NOT NULL DEFAULT 10,
    "health" INTEGER NOT NULL DEFAULT 100,
    "speed" INTEGER NOT NULL DEFAULT 10,
    "accuracy" INTEGER NOT NULL DEFAULT 10,
    "playerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Battle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Battle_playerId_key" ON "Battle"("playerId");

-- AddForeignKey
ALTER TABLE "Battle" ADD CONSTRAINT "Battle_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

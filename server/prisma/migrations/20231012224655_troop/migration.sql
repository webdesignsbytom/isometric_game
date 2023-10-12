-- CreateTable
CREATE TABLE "Troop" (
    "id" TEXT NOT NULL,
    "troopTypeId" INTEGER NOT NULL,
    "playerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Troop_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Troop" ADD CONSTRAINT "Troop_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

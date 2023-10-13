-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "cityHealth" INTEGER NOT NULL DEFAULT 1000,
    "cityDefense" INTEGER NOT NULL DEFAULT 100,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "City_playerId_key" ON "City"("playerId");

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

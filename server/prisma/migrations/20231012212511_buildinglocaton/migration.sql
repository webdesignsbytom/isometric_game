/*
  Warnings:

  - Added the required column `locationTileId` to the `Building` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Building" ADD COLUMN     "locationTileId" INTEGER NOT NULL;

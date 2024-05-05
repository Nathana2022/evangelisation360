/*
  Warnings:

  - You are about to drop the column `adresseId` on the `Utilisateurs` table. All the data in the column will be lost.
  - Added the required column `adresse` to the `Utilisateurs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Utilisateurs" DROP COLUMN "adresseId",
ADD COLUMN     "adresse" TEXT NOT NULL;

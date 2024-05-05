/*
  Warnings:

  - You are about to drop the column `motDePasse` on the `Utilisateurs` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `Utilisateurs` table. All the data in the column will be lost.
  - Added the required column `password` to the `Utilisateurs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Utilisateurs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Public', 'Membre', 'Nouveau_Venu', 'Ame');

-- AlterTable
ALTER TABLE "Utilisateurs" DROP COLUMN "motDePasse",
DROP COLUMN "roleId",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL;

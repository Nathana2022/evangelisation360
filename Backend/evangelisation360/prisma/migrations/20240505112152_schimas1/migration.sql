

-- CreateTable
CREATE TABLE "Quartier" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "Quartier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adresse" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "avenue" TEXT NOT NULL,
    "quartierId" INTEGER NOT NULL,
    "communeId" INTEGER NOT NULL,

    CONSTRAINT "Adresse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateurs" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "trancheAge" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "adresseId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Utilisateurs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipationActivite" (
    "id" SERIAL NOT NULL,
    "utilisateursId" INTEGER NOT NULL,
    "activiteId" INTEGER NOT NULL,

    CONSTRAINT "ParticipationActivite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activite" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,
    "secteurDesc" TEXT NOT NULL,
    "typeActiviteId" INTEGER NOT NULL,

    CONSTRAINT "Activite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeActivite" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeActivite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commune" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "quartierId" INTEGER NOT NULL,

    CONSTRAINT "Commune_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "utilisateurEnvoi" INTEGER NOT NULL,
    "utilisateurRecept" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "heureMessage" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discussion" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateDiscussion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Discussion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EtablissementRapport" (
    "id" SERIAL NOT NULL,
    "activiteId" INTEGER NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "contenu" TEXT NOT NULL,

    CONSTRAINT "EtablissementRapport_pkey" PRIMARY KEY ("id")
);

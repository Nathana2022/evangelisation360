const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const findUserByTelephone = async (telephone) => {
  try {
    const utilisateur = await prisma.utilisateurs.findFirst({
      where: {
        telephone,
      },
    });
    return utilisateur;
  } catch (error) {
    return null;
  }
};

const findUserById = async (id) => {
  try {
    const utilisateur = await prisma.utilisateur.findFirst({
      where: {
        id,
      },
    });
    return utilisateur;
  } catch (error) {
    return null;
  }
};

module.exports = {
  prisma,
  findUserByTelephone,
  findUserById,
};

const { prisma } = require("../database/prisma");

const getUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await prisma.utilisateurs.findMany();
    res.status(200).json({ utilisateurs });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getUtilisateurs,
};

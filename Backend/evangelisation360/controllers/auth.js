const passport = require("passport");
const { prisma } = require("../database/prisma");

const register = async (req, res) => {
  try {
    const { nom, postnom, prénom, telephone } = req.body;
    let { password } = req.body;
    password = bcrypt.hashSync(password, 10);
    const role = "Public";
    const utilisateurs = await prisma.utilisateurs.create({
      data: { nom, postnom, prénom, password, telephone, role },
    });
    res.status(201).json({ utilisateurs });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { register };

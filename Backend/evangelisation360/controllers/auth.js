const passport = require("passport");
const bcrypt = require("bcrypt");
const { prisma } = require("../database/prisma");

const register = async (req, res) => {
  console.log("data",req.body)
  try {
    const { nom, prenom, genre, trancheAge, telephone, adresse, password } = req.body;
    // Correction: Accéder à req.body.data pour obtenir les données
    const hashedPassword = await bcrypt.hash(password, 10); // Correction: Utiliser bcrypt.hash de manière asynchrone
    const role = "Public";
    console.log();
    const utilisateur = await prisma.utilisateurs.create({
      data: { nom, prenom, genre, trancheAge, telephone, adresse, role, password: hashedPassword }, // Correction: Utiliser hashedPassword au lieu de password
    });
    res.status(201).json({ utilisateur }); // Correction: Renvoyer utilisateur au lieu de utilisateurs
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { register };


// const passport = require("passport");
// const { prisma } = require("../database/prisma");

// const register = async (req, res) => {
//   const data = req.body.data
//   console.log(data);
//   return
//   try {
//     const { nom, prénom, genre, trancheAge, telephone, adresse} = req.body;
//     let { password } = req.body;
//     password = bcrypt.hashSync(password, 10);
//     const role = "Public";
//     const utilisateurs = await prisma.utilisateurs.create({
//       data: { nom,prénom, genre, trancheAge, telephone, adresse, role, password},
//     });
//     res.status(201).json({ utilisateurs });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

// module.exports = { register };

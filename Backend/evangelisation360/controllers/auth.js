const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { prisma } = require("../database/prisma");

const register = async (req, res) => {
  try {
    const { nom, prenom, genre, trancheAge, telephone, adresse, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hacher le mot de passe
    const role = "Public";

    // Vérifier si l'utilisateur existe déjà dans la base de données
    const existingUser = await prisma.utilisateurs.findFirst({
      where: {
        telephone,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Utilisateur déjà enregistré avec ce numéro de téléphone" });
    }

    const utilisateur = await prisma.utilisateurs.create({
      data: { nom, prenom, genre, trancheAge, telephone, adresse, role, password: hashedPassword },
    });

    res.status(201).json({ utilisateur });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'enregistrement de l'utilisateur" });
  }
};

const login = async (req, res) => {
  try {
    const { telephone, password } = req.body;

    // Rechercher l'utilisateur dans la base de données
    const utilisateur = await prisma.utilisateurs.findFirst({
      where: {
        telephone,
      },
    });

    // Vérifier si l'utilisateur existe
    if (!utilisateur) {
      return res.status(401).json({ message: "Téléphone ou mot de passe incorrect" });
    }

    // Comparer les mots de passe
    const passwordMatch = await bcrypt.compare(password, utilisateur.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Téléphone ou mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = jwt.sign({ userId: utilisateur.id }, "your_secret_key", { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la connexion" });
  }
};

module.exports = { register, login };


// const passport = require("passport");
// const bcrypt = require("bcrypt");
// const { prisma } = require("../database/prisma");

// const register = async (req, res) => {
//   console.log("data",req.body)
//   try {
//     const { nom, prenom, genre, trancheAge, telephone, adresse, password } = req.body;
//     // Correction: Accéder à req.body.data pour obtenir les données
//     const hashedPassword = await bcrypt.hash(password, 10); // Correction: Utiliser bcrypt.hash de manière asynchrone
//     const role = "Public";
//     console.log();
//     const utilisateur = await prisma.utilisateurs.create({
//       data: { nom, prenom, genre, trancheAge, telephone, adresse, role, password: hashedPassword }, // Correction: Utiliser hashedPassword au lieu de password
//     });
//     res.status(201).json({ utilisateur }); // Correction: Renvoyer utilisateur au lieu de utilisateurs
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error });
//   }
// };

// module.exports = { register };


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

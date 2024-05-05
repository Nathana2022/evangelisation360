// const passport = require("passport");
const express = require("express");
const { register, login } = require("../controllers/auth");
// const authMiddleware = require("../middlewares/authMiddleware");
const {findUserByTelephone} = require("../database/prisma")

const router = express.Router();


router.get("/", (req, res) => {
  res.send("<h1>Bienvenue a la page auth");
});
// Avant de log in on utilise le middleware auth qui permet d'authentifier ou pas l'utilisateur
router.post("/register", register)
router.post("/login", async(req, res) => {
  const { telephone, password } = req.body;

  try {
    const user = await findUserByTelephone(telephone);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Téléphone ou mot de passe incorrect' });
    }

    // Si les informations d'identification sont correctes, générer un token d'authentification
    // const token = generateAuthToken(user); // Appeler la fonction pour générer un token d'authentification avec les informations de l'utilisateur

    // Répondre avec le token d'authentification
    res.json({message : 'Connexion réussie', user});
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
});

router.post('/signUpForm', async (req, res) => {
    const { nom, prenom, telephone, password } = req.body;
  
    try {
      // Enregistrer l'utilisateur dans la base de données avec Prisma
      const user = await prisma.users.create({
        data: {
          nom,
          prenom,
          telephone,
          password: password, // Assurez-vous de stocker le mot de passe de manière sécurisée (haché)
          // Vous pouvez également enregistrer d'autres données de l'utilisateur ici
        }
      });
  
      res.status(201).json({ message: 'Utilisateur inscrit avec succès', user });
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'inscription' });
    }
  });

module.exports = router;

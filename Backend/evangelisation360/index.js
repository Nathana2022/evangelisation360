const express = require("express");
const passport = require("passport");
const cors = require('cors');
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const localStrategy = require("./utils/passportConfig");
const { findUtilisateurById } = require("./database/prisma");
const checkUserAuthenticated = require("./middlewares/checkUserAuthenticated");
const authMiddleware = require("./middlewares/authMiddleware");

dotenv.config();
const PORT = process.env.PORT || 3000;
const server = express();

passport.use(localStrategy);
passport.serializeUser((utilisateur, done) => {
    done(null, utilisateur.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    const utilisateur = await findUtilisateurById(id);
    if (utilisateur) {
      done(null, utilisateur);
    }
    done({ message: "L'utilisateur n'existe pas" }, utilisateur);
  });
  
  server.use(cors({
    origin: 'http://localhost:5173'
  }));
  
  // Vos autres routes et middleware
  // ...
  
  // Démarrer le serveur
  server.listen(3001, () => {
    console.log('Serveur démarré sur le port 3001');
  });
  server.use(express.json());
  
  server.use(passport.initialize());
  // server.use(checkUserAuthenticated);
  
  server.get("/", (req, res) => {
    res.send("<h1>Bienvenue au serveur de E360°</h1>");
  });
  
  server.use("/utilisateur", userRouter);
  server.use("/auth", authRouter);



server.listen(PORT, () => console.log(`Server started on ${PORT}`))


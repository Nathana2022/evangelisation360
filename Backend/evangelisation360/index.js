const express = require("express");
const passport = require("passport");
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const localStrategy = require("./utils/passportConfig");
const { findUtilisateurById } = require("./database/prisma");
const checkUserAuthenticated = require("./middlewares/checkUserAuthenticated")

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
  
  server.use(express.json());
  
  server.use(passport.initialize());
  server.use(checkUserAuthenticated);
  
  server.get("/", (req, res) => {
    res.send("<h1>Bienvenue au serveur de E360°</h1>");
  });
  
  // server.use("/utilisateur", userRouter);
  server.use("/auth", authRouter);



server.listen(PORT, () => console.log(`Server started on ${PORT}`))


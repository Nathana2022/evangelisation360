const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const { findUserByTelephone } = require("../database/prisma");

const localStrategy = new LocalStrategy(
  { usernameField: "telephone", passwordField: "password" },
  async (telephone, password, done) => {
    // Rechercher l'utilisateur dans la base de données

    const user = await findUserByTelephone(telephone);

    if (!user) {
      return done(null, false, { message: "Utilisateur introuvable." });
    }

    // Comparer le mot de passe haché
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false, { message: "Mot de passe incorrect." });
      }

      // Authentification réussie
      return done(null, user);
    });
  }
);

module.exports = localStrategy;

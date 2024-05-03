const verifyToken = require("../utils/verifyToken");

const checkUserAuthenticated = (req, res, next) => {
  const headerAuthorization = req.headers["authorization"];
  if (headerAuthorization) {
    const token = headerAuthorization.replace("Bearer ", "");
    const utilisateur = verifyToken(token);
    if (utilisateur) {
      req.utilisateur = utilisateur;
      return next();
    }
  }
  res.status(403).json({ err: "Connectez-vous" });
};

module.exports = checkUserAuthenticated;


// const verifyToken = require("../utils/verifyToken");

// const checkUserAuthentificated = (req, res, next) => {
//   const headerAuthorization = req.headers["authorization"];
//   const token = headerAuthorization?.replace("Bearer ", "");
//   const utilisateur = verifyToken(token);
//   if (utilisateur) {
//     req.utilisateur = utilisateur;
//     return next();
//   } else {
//     res.status(403).json({ err: "Connectez-vous" });
//   }
// };

// module.exports = checkUserAuthentificated;

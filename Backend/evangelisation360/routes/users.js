const express = require("express");
const { getUtilisateurs } = require("../controllers/users");
const { checkUserRoleMembre } = require("../middlewares/checkUserRole");
const checkUserAuthenticated = require("../middlewares/checkUserAuthenticated");
const router = express.Router();

// Pour accéder à la liste des membres on vérifie si l'user est authentifié et si il a le rôle de membre
router.get("/", getUtilisateurs, checkUserRoleMembre, checkUserAuthenticated );

module.exports = router;

checkUserRoleMembre = (req, res, next) => {
    if (req?.utilisateur?.role !== "Public") {
      res.status(403).json({
        message: "Accès refusé",
      });
      return;
    }
    next();
  };    
  
  checkUserRoleAmes = (req, res, next) => {
    if (req?.user?.role !== "Ames") {
      res.status(403).json({
        message: "Accès refusé",
      });
      return;
    }
    next();
  };
  
  module.exports = {
    checkUserRoleMembre,
    checkUserRoleAmes,
  };
  
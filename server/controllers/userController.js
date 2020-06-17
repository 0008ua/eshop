const config = require('../config/');

/**
   * Used for frontend router guard (canActivate)
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   * @return {Boolean}
   */
checkAuthorization = (req, res, next) => {
  let roleFromSession;
  if (req.isAuthenticated()) {
    roleFromSession = req.user._doc.role || 'casual';
  } else {
    roleFromSession = 'casual';
  }
  const requiredRoleForAuthorization = req.query.role;

  const permissions = config.get('permissions');
  if (permissions[roleFromSession].indexOf(requiredRoleForAuthorization) >= 0) {
    return res.status(200).json(true);
  } else {
    return res.status(200).json(false);
  }
};

module.exports = {
  checkAuthorization,
};

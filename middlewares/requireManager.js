module.exports = function(req, res, next) {
  if (req.user.type === "Manager")
    next();
}

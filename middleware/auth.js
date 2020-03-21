const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "no token, access denied" });
  } else {
    try {
      const decoded = jwt.verify(token, config.get("secret"));
      if (!decoded) {
        return res.status(401).json({ msg: "Invalid token, access denied" });
      } else {
        req.user = decoded.user;
        return next();
      }
    } catch (error) {
      console.log(error.message);
      return res.status(401).json({ msg: "Invalid token, access denied" });
    }
  }
};

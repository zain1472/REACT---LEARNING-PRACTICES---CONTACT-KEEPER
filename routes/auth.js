const router = require("express").Router();

// @route /api/auth/
// @desc get a logged in user
// @access private
router.get("/", (req, res) => {
  return res.send("get a logged in user");
});

// @route /api/auth/
// @desc log in a user
// @access public
router.post("/", (req, res) => {
  return res.send("Log in a  user");
});

// @route /api/auth/
// @desc get a logged in user
// @access public
// router.get("/", (req, res) => {
//   return res.send("get a logged in user");
// });

module.exports = router;

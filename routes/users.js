const router = require("express").Router();

// @route POST /api/users/
// @desc register a new usr
// @access public
router.post("/", (req, res) => {
  return res.send("register a new user");
});

module.exports = router;

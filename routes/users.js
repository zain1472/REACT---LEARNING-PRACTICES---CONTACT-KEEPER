const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
// @route POST /api/users/
// @desc register a new usr
// @access public
router.post(
  "/",
  [
    check("username", "Please enter a name")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email address").isEmail(),
    check("password", "Please choose a password of atleast 6 length").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      const { username, email, password } = req.body;
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ msg: "The email address has already been registered" });
      } else {
        try {
          user = await new User({ username, email, password });
          let salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
          await user.save();
          const payload = {
            user: {
              id: user._id
            }
          };
          jwt.sign(
            payload,
            config.get("secret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) {
                console.log("object");
                console.log(err);
                res.send("server error");
              } else {
                return res.json({ token });
              }
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
);

module.exports = router;

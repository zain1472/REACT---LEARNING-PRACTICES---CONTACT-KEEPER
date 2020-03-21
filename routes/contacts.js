const router = require("express").Router();

// @route Get /api/contacts/
// @desc get a logged in user
// @access private
router.get("/", (req, res) => {
  return res.send("send all contacts of a user");
});

// @route POST /api/contacts/
// @desc add a new contact
// @access private
router.post("/", (req, res) => {
  return res.send("add a new contact");
});

// @route PUT /api/contacts/:id
// @desc edit a contact
// @access private
router.put("/:id", (req, res) => {
  return res.send("edit a contact");
});

// @route DELETE /api/contacts/:id
// @desc delete a contact
// @access private
router.delete("/:id", (req, res) => {
  return res.send("delete a contact");
});

module.exports = router;

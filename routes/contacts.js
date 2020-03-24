const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const auth = require("../middleware/auth");

// @route Get /api/contacts/
// @desc get all contacts
// @access private
router.get("/", auth, async (req, res) => {
  try {
    let contacts = await Contact.find({ user: req.user.id });
    res.json({ contacts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// @route POST /api/contacts/
// @desc add a new contact
// @access private
router.post(
  "/",
  [
    auth,
    check("name", "Please provide a name for the contact")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const { name, email, phone, type } = req.body;
    let contact = new Contact({ name, email, phone, user: req.user.id });
    if (type) {
      contact.type = type;
    }
    await contact.save();
    res.json({ msg: "Contact created successfully", contact });
  }
);

// @route PUT /api/contacts/:id
// @desc edit a contact
// @access private
router.put("/:id", (req, res) => {
  console.log("object");
  const contact = req.body;
  Contact.findByIdAndUpdate(req.params.id, contact, function(err, con) {
    if (err) {
      console.log(err);
      res.status(400).json({ msg: "Cannot Update the contact" });
    } else {
      res.json({ msg: "The contact has been updated successfully" });
    }
  });
});

// @route DELETE /api/contacts/:id
// @desc delete a contact
// @access private
router.delete("/:id", (req, res) => {
  Contact.findByIdAndDelete(req.params.id, function(err, con) {
    if (err) {
      console.log(err);
      res.status(400).json({ msg: "Cannot delete the contact" });
    } else {
      res.json({ msg: "The contact has been deleted successfully" });
    }
  });
});

module.exports = router;

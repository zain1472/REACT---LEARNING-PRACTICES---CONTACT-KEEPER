const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Connect Mongo DB
require("./config/db")();

// Parse form body
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  return res.send("welcome to my api");
});

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.listen(PORT, () => {
  console.log(`Server started on 5000`);
});

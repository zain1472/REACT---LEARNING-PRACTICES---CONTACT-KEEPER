const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const path = require("path");

// Connect Mongo DB
require("./config/db")();

// Parse form body

app.use(express.static("client/build"));
app.use(express.json({ extended: false }));

// ROUTES
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// render react app page
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

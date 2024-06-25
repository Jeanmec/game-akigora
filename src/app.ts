require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

const port = process.env.PORT || 3003;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

app.post("/auth", (req, res) => {
  const { login, password } = req.body;

  console.log(req.body);

  if (login == "admin" && password == "toto123") {
    res.status(200).json({ message: "Authentification réussie" });
  } else {
    res.status(401).json({ message: "Login ou mot de passe incorrect" });
  }
});

server.listen(port, () => {
  console.log(`Server listening on localhost:${port}.`);
});

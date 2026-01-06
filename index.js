const express = require("express");
const app = express();
const PORT = 3000;

// Apna khud ka strong key (hard to guess)
const MY_SECRET_KEY = "Ak@sh!2026_X9z#LqT7vB$gW*PqR";

// Public route (sabko access)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Namaste Akash! Ye tera API hai 🚀" });
});

// Secure route (sirf valid key wale ko access)
app.get("/api/secure", (req, res) => {
  const key = req.query.key;
  if (key === MY_SECRET_KEY) {
    res.json({ data: "Secure data only for Akash 🔐" });
  } else {
    res.status(403).json({ error: "Galat key bhai!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server chal raha hai http://localhost:${PORT}`);
});
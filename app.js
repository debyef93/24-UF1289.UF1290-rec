// app.js
const express = require('express');
const path = require("path");
const connection = require("./config");
const app = express();
const PORT = process.env.APP_PORT;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint para buscar estudiantes
app.get('/person/:id', (req, res) => {
  const personId = req.params.id;
  const query = "SELECT * FROM persons WHERE id = ?";

  connection.query(query, [personId], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error fetching person data" });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "Person not found" });
      return;
    }
    const person = results[0];
    res.json({ name: person.name, score: person.score });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

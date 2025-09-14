const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/rooms", (req, res) => {
  res.json([
    { id: 1, name: "Deluxe Room", price: 120 },
    { id: 2, name: "Suite", price: 200 },
    { id: 2, name: "Suite 3", price: 300 },
  ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// REST API for Playing Card Collection using Express.js

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory playing card collection (array of objects)
let cards = [
  { id: 1, suit: "Hearts", rank: "Ace" },
  { id: 2, suit: "Spades", rank: "King" },
  { id: 3, suit: "Diamonds", rank: "Queen" }
];

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Playing Card Collection API 🎴");
});

// GET: Retrieve all cards
app.get("/cards", (req, res) => {
  res.json(cards);
});

// GET: Retrieve a single card by ID
app.get("/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find((c) => c.id === id);
  if (!card) return res.status(404).json({ message: "Card not found" });
  res.json(card);
});

// POST: Add a new card
app.post("/cards", (req, res) => {
  const { suit, rank } = req.body;
  if (!suit || !rank) {
    return res.status(400).json({ message: "Suit and rank are required" });
  }

  const newCard = {
    id: cards.length + 1,
    suit,
    rank
  };
  cards.push(newCard);
  res.status(201).json(newCard);
});

// PUT: Update an existing card by ID
app.put("/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find((c) => c.id === id);

  if (!card) return res.status(404).json({ message: "Card not found" });

  const { suit, rank } = req.body;
  if (suit) card.suit = suit;
  if (rank) card.rank = rank;

  res.json({ message: "Card updated successfully", card });
});

// DELETE: Remove a card by ID
app.delete("/cards/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = cards.findIndex((c) => c.id === id);
  if (index === -1) return res.status(404).json({ message: "Card not found" });

  cards.splice(index, 1);
  res.json({ message: "Card deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

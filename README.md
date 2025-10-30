# 🎴 Playing Card Collection REST API

## 📘 Description
A simple RESTful API built with **Express.js** to manage a collection of playing cards.

---

## 🧰 Features
- **GET /cards** → Retrieve all cards  
- **GET /cards/:id** → Retrieve a specific card by ID  
- **POST /cards** → Add a new card  
- **PUT /cards/:id** → Update a card  
- **DELETE /cards/:id** → Delete a card  

---

## 🧠 Example Card Object
```json
{
  "id": 1,
  "suit": "Hearts",
  "rank": "Ace"
}

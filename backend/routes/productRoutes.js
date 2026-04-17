import express from "express";

const router = express.Router();
//
// Get all products
router.get("/", (req, res) => {
  res.json({ message: "Get all products" });
});

// Get product by ID
router.get("/:id", (req, res) => {
  res.json({ message: `Get product ${req.params.id}` });
});

// Create new product
router.post("/", (req, res) => {
  res.json({ message: "Create new product" });
});

// Update product
router.put("/:id", (req, res) => {
  res.json({ message: `Update product ${req.params.id}` });
});

// Delete product
router.delete("/:id", (req, res) => {
  res.json({ message: `Delete product ${req.params.id}` });
});

export default router;

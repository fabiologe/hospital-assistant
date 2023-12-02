import express from "express";
import { Template } from "../models/index.js";
import { setInfoPoints } from "../lib/index.js";

const router = express.Router();

router.get("/category/:category/:language", async (req, res) => {
  try {
    const templates = await Template.find({
      category: req.params.category,
      language: req.params.language,
    });
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newTemplate = new Template(req.body);
    const savedTemplate = await newTemplate.save();
    res.status(201).json(savedTemplate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read All
router.get("/", async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read One
router.get("/:id", getTemplate, (req, res) => {
  res.json(res.template);
});

// Update
router.patch("/:id", getTemplate, async (req, res) => {
  try {
    console.log(req.body);
    const infoPoints = await setInfoPoints(req.body);

    await Template.findByIdAndUpdate(req.params.id, req.body).exec();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", getTemplate, async (req, res) => {
  try {
    await Template.findByIdAndDelete(req.params.id).exec();
    res.json({ message: "Deleted Template" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get template by ID
async function getTemplate(req, res, next) {
  let template;
  try {
    template = await Template.findById(req.params.id);
    if (template == null) {
      return res.status(404).json({ message: "Cannot find template" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.template = template;
  next();
}

export default router;

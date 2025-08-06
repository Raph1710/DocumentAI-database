const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// GET all documents
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find().sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single document by execution ID
router.get('/:executionId', async (req, res) => {
  try {
    const document = await Document.findOne({ executionId: req.params.executionId });
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new document
router.post('/', async (req, res) => {
  try {
    const document = new Document(req.body);
    const newDocument = await document.save();
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update document
router.put('/:executionId', async (req, res) => {
  try {
    const document = await Document.findOneAndUpdate(
      { executionId: req.params.executionId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json(document);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE document
router.delete('/:executionId', async (req, res) => {
  try {
    const document = await Document.findOneAndDelete({ executionId: req.params.executionId });
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET documents by status
router.get('/status/:status', async (req, res) => {
  try {
    const documents = await Document.find({ reviewStatus: req.params.status }).sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET documents by environment
router.get('/environment/:environment', async (req, res) => {
  try {
    const documents = await Document.find({ environment: req.params.environment }).sort({ createdAt: -1 });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 
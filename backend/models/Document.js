const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  executionId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  fileName: {
    type: String,
    required: true,
    trim: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  reviewStatus: {
    type: String,
    enum: ['Pending', 'In Review', 'Completed'],
    default: 'Pending'
  },
  environment: {
    type: String,
    enum: ['Production', 'Development', 'Testing'],
    default: 'Production'
  },
  filePath: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  processingTime: {
    type: Number, // in seconds
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Document', documentSchema); 
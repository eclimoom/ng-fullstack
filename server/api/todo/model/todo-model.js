"use strict";

const mongoose = require('mongoose');

const _todoSchema = {
  todoMessage: {type: String, required: true, trim: true},
  desc: {type: String, trim: true},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_todoSchema);

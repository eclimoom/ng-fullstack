"use strict";

const mongoose = require('mongoose');

const _jiongSchema = {
  uid:{type: String, required: true, trim: true},
  title: {type: String, required: true, trim: true},
  content: {type: String, required: true, trim: true},
  pv: {type: Number, default:0},
  fav: {type: Number, default:0},
  like: {type: Number, default:0},
  unlike: {type: Number, default:0},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_jiongSchema);

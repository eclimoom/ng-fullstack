"use strict";

const mongoose = require('mongoose');

const _userSchema = {
  username: {type: Number, default:0},
  password: {type: Number, default:0},
  nick: {type: String, required: true, trim: true},
  avatar: {type: String, default:'url', trim: true},
  sex: {type: Number, required: true},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_userSchema);

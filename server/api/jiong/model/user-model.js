"use strict";

const mongoose = require('mongoose');

const _userSchema = {
  name: { type: 'string'},
  password: {type: Number},
  nick: {type: String, required: true, trim: true},
  avatar: {type: String, default:'url', trim: true},
  gender: { type: 'string', enum: ['m', 'f', 'x'] },
  createdAt: {type: Date, default: Date.now}
}



module.exports = mongoose.Schema(_userSchema);

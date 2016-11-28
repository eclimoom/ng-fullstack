"use strict";

const mongoose = require('mongoose');

const _commentSchema = {
  _jiong: {type:Number,ref: 'Jiong'},
  password: {type: Number, default:0},
  nick: {type: String, required: true, trim: true},
  avatar: {type: String, default:'url', trim: true},
  _user: {type: Number, ref:'User'},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_commentSchema);

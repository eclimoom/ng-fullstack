"use strict";

const mongoose = require('mongoose');

const _commentSchema = {
  _jiong: {type:Number,ref: 'Jiong'},
  _user: {type: Number, ref:'User'},
  content:{type:String,required:true},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_commentSchema);

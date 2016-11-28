"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const jiongSchema = require('../model/jiong-model');
const _ = require('lodash');

jiongSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};
    Jiong
      .find(_query)
      .exec((err, jiongs) => {
        err ? reject(err)
          : resolve(jiongs);
      });
  });
}

jiongSchema.statics.create = (jiong) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(jiong))
      return reject(new TypeError('Jiong is not a valid object.'));

    let _jiong = new Jiong(jiong);

    _jiong.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

jiongSchema.statics.delete = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id))
      return reject(new TypeError('Id is not a valid string.'));

    Jiong
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const Jiong  = mongoose.model('Jiong', jiongSchema);

module.exports = Jiong;

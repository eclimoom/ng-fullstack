"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const jiongSchema = require('../model/jiong-model');
const _ = require('lodash');

jiongSchema.statics.getAll = (params) => {
  return new Promise((resolve, reject) => {

    //TODO:remove this section to controller
    let _page = {pageIndex:1,pageSize:20};
    let _query = {};
    let _skip = 0;
    if (_.isObject(params)){
      _page.pageIndex = parseInt(params.pageIndex,10) || _page.pageIndex;
      _page.pageSize = parseInt(params.pageSize,10) || _page.pageSize;
      _skip = _page.pageIndex < 2 ? 0 : (_page.pageIndex-1) * _page.pageSize
    }
    Jiong
      .find(_query)
      .skip(_skip)
      .limit(_page.pageSize)
      .sort({ createdAt: -1 })
      .exec((err, data) => {
        if (err) {
          reject(err);
        } else {
          Jiong.count(_query, function(error, count) {
            err ? reject(err)
              : resolve({itemsTotal:count,pageNum:(_page.pageIndex),list:data});
          });
        }
      });
  });
}

jiongSchema.statics.findById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id))
      return reject(new TypeError('Id is not a valid string.'));

    Jiong
      .findOne({_id:id})
      .exec((err, jiong) => {
        err ? reject(err)
          : resolve(jiong);
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

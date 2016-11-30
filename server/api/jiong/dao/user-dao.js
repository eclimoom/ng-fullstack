"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const userSchema = require('../model/user-model');
const _ = require('lodash');

userSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};
    User
      .find(_query)
      .exec((err, users) => {
        err ? reject(err)
          : resolve(users);
      });
  });
}

userSchema.statics.findById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id))
      return reject(new TypeError('Id is not a valid string.'));

    User
      .findById(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}




userSchema.statics.create = (user) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(user))
      return reject(new TypeError('User is not a valid object.'));

    let _user = new User(user);

    _user.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

userSchema.statics.delete = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id))
      return reject(new TypeError('Id is not a valid string.'));

    User
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const User  = mongoose.model('User', userSchema);

module.exports = Jiong;

"use strict";

const JiongDAO = require('../dao/jiong-dao');

module.exports = class JiongController {
  static getAll(req, res) {
    JiongDAO
        .getAll()
        .then(jiongs => res.status(200).json(jiongs))
        .catch(error => res.status(400).json(error));
  }

  static createTodo(req, res) {
      let _jiong = req.body;

    JiongDAO
        .create(_jiong)
        .then(jiong => res.status(201).json(jiong))
        .catch(error => res.status(400).json(error));
  }

  static deleteTodo(req, res) {
    let _id = req.params.id;

    JiongDAO
      .delete(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}

"use strict";

const TodoController = require('../controller/jiong-controller');

module.exports = class TodoRoutes {
    static init(router) {
      router
        .route('/api/jiongs')
        .get(TodoController.getAll)
        .post(TodoController.create);
      router
        .route('/api/jiongs/:id')
        .delete(TodoController.delete);

    }
}



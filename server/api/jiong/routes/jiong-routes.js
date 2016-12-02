"use strict";

const JiongController = require('../controller/jiong-controller');

module.exports = class JiongRoutes {
    static init(router) {
      router
        .route('/api/jiongs')
        .get(JiongController.getAll)
        .post(JiongController.create);
      router
        .route('/api/jiongs/:id')
        .get(JiongController.findById)
        .post(JiongController.findContentById)
        .delete(JiongController.delete);
      router
        .route('/api/detail/:id')
        .get(JiongController.findContentById)

    }
}



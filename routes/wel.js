'use strict';
var router = require('express').Router();
// var AV = require('leanengine');

// var Todo = AV.Object.extend('Todo');

// 查询 Todo 列表
router.get('/', function(req, res, next) {
  res.render('wel.html');
});


module.exports = router;

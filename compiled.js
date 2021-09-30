"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es6.function.name.js");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _context;

var fn = function fn() {
  console.log("D:\workspace\DBAA\webpack\babel-target\index.js :(3, 4)")
  console.log('wens');
};

var p = new _promise["default"](function (resolve, reject) {
  resolve('wens');
});

var Person = function Person(name) {
  (0, _classCallCheck2["default"])(this, Person);
  this.name = name;
};

var xiaoming = new Person('小明');
var list = (0, _map["default"])(_context = [1, 2, 3, 4]).call(_context, function (item) {
  return item * 2;
});

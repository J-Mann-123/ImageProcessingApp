"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes = express_1["default"].Router();
routes.get('/', function (req, res) {
    res.send('main api route');
});
exports["default"] = routes;

"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("dotenv/config");

var _app = _interopRequireDefault(require("./config/app"));

var APP_PORT = process.env.APP_PORT;

_app["default"].listen(APP_PORT);
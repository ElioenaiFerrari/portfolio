"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("dotenv/config");

var _app = _interopRequireDefault(require("./config/app"));

var PORT = process.env.PORT;

_app["default"].listen(PORT || 3000);
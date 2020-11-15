"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _process$env = process.env,
    SMTP_HOST = _process$env.SMTP_HOST,
    SMTP_PORT = _process$env.SMTP_PORT,
    SMTP_USER = _process$env.SMTP_USER,
    SMTP_PASS = _process$env.SMTP_PASS;

var Mail = _nodemailer["default"].createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
});

var _default = Mail;
exports["default"] = _default;
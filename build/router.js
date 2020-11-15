"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _mail = _interopRequireDefault(require("./providers/mail"));

var Router = _express["default"].Router();

Router.get('/', function (req, res) {
  return res.render('index.html');
});
Router.post('/services/send-message', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, email, subject, message, params, response;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, email = _req$body.email, subject = _req$body.subject, message = _req$body.message;
            console.log(req.body);
            params = {
              from: email,
              to: process.env.OWNER_EMAIL,
              subject: subject,
              text: message
            };
            _context.next = 6;
            return _mail["default"].sendMail(params);

          case 6:
            response = _context.sent;
            return _context.abrupt("return", res.status(200).json(response));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(400).json(_context.t0));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = Router;
exports["default"] = _default;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCon_1 = require("./userCon");
const loginCon_1 = require("./loginCon");
const indexCon_1 = require("./indexCon");
// All backend routes listed below
exports.default = [
    new userCon_1.UserController(),
    new loginCon_1.LoginController(),
    new indexCon_1.IndexController()
];
//# sourceMappingURL=index.js.map
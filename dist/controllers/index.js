"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCon_1 = require("./userCon");
const loginCon_1 = require("./loginCon");
// All backend routes listed below
exports.default = [
    new userCon_1.UserController(),
    new loginCon_1.LoginController()
];
//# sourceMappingURL=index.js.map
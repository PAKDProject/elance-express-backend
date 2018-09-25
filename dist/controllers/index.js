"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testCon_1 = require("./testCon");
const userCon_1 = require("./userCon");
const loginCon_1 = require("./loginCon");
// All backend routes listed below
exports.default = [
    new testCon_1.TestController(),
    new userCon_1.UserController(),
    new loginCon_1.LoginController()
];
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
var app = new server_1.Server(3001);
try {
    app.start();
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=start.js.map
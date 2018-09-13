"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var HelloController = /** @class */ (function () {
    function HelloController() {
        this.router = express_1.Router();
        this.basePath = '/hello';
    }
    HelloController.prototype.returnRouter = function () {
        return express_1.Router().get('/', function (req, res) {
            res.send('Hello');
        })
            .get('/:name', function (req, res) {
            var name = req.params.name;
            res.send("Hello " + name);
        });
    };
    return HelloController;
}());
exports.HelloController = HelloController;
//# sourceMappingURL=hello.js.map
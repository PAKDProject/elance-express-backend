"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ByeController = /** @class */ (function () {
    function ByeController() {
        this.router = express_1.Router();
        this.basePath = '/bye';
    }
    ByeController.prototype.returnRouter = function () {
        return express_1.Router().get('/', function (req, res) {
            res.send('Bye');
        })
            .get('/:name', function (req, res) {
            var name = req.params.name;
            res.send("Bye " + name);
        });
    };
    return ByeController;
}());
exports.ByeController = ByeController;
//# sourceMappingURL=bye.js.map
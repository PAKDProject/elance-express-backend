"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var body_parser_1 = require("body-parser");
var controllers_1 = require("./controllers/");
var environment = process.env.NODE_ENV;
/**
 * @class Server class which bootstraps the server
 */
var Server = /** @class */ (function () {
    /**
     * Create new Express Server
     * @param port - port number, optional (default = 3000)
     */
    function Server(port) {
        this.app = express();
        (port) ? this.port = port : this.port = 3000;
        this.config();
    }
    /**
     * @private Configure the server
     */
    Server.prototype.config = function () {
        this.app.use(cors());
        this.app.use(body_parser_1.json());
        var routes = this.routes();
        this.app.use('/', routes);
    };
    /**
     * routes() - sets up routes for the server
     * @returns Express Router filled with all routes
     */
    Server.prototype.routes = function () {
        var router = express.Router();
        controllers_1.default.forEach(function (route) {
            router.use(route.basePath, route.returnRouter());
        });
        return router;
    };
    /**
     * Start the server.
     * @throws Error if app doesn't start and NODE_ENV != production
     */
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function (err) {
            if (err && environment != "production")
                throw Error(err.message);
            else
                console.log("Server running on port " + _this.port + ". Current Environment: " + environment);
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map
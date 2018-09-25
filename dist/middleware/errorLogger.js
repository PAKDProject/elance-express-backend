"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../helpers/logger");
/**
 * Error logger which logs errors into the console and passes it to another error handler
 * @param err
 * @param req
 * @param res
 * @param next
 */
exports.errorLogger = (err, req, res, next) => {
    logger_1.error(`initiated at: ${req.url}\n${err.message} : ${err.stack}`);
    next(err);
};
//# sourceMappingURL=errorLogger.js.map
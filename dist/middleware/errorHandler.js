"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment = process.env.NODE_ENV;
/**
 * Error handler which spits out error to the console. If environment is in development, the whole stack trace is shown.
 * @param err
 * @param req
 * @param res
 * @param next
 */
exports.errorHandler = (err, req, res, next) => {
    if (environment == 'production') {
        res.send(err.name).status(500);
    }
    else {
        res.send(`${err.name} : ${err.stack}`).status(500);
    }
};
//# sourceMappingURL=errorHandler.js.map
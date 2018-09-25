"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Async wrapper to be used with routes which need async
 * @param fn - function that is async
 */
exports.asyncRoutes = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
//# sourceMappingURL=asyncRoutes.js.map
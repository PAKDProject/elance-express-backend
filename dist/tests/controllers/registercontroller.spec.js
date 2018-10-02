"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai = require("chai");
const createServer_1 = require("../../lib/createServer");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
mocha_1.describe('Testing the Registration Controller', () => {
    mocha_1.before((done) => __awaiter(this, void 0, void 0, function* () {
        let server = yield new createServer_1.Server(undefined, 'development');
        yield server.config();
        yield server.start();
        done();
    }));
    mocha_1.it('Should return a JWT when correct params are sent to POST /register');
    mocha_1.it('Should return 400 if wrong params are passed to POST /login');
});
//# sourceMappingURL=registercontroller.spec.js.map
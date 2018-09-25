"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const createServer_1 = require("../../lib/createServer");
const node_fetch_1 = require("node-fetch");
mocha_1.describe('Testing the User Controller', () => {
    const apiUrl = 'http://localhost:3000/user';
    mocha_1.before(done => {
        let app = new createServer_1.Server(undefined, 'development');
        app.config().then(() => {
            app.start();
            done();
        });
    });
    mocha_1.it('Should return user at /:id when id is passed', done => {
        node_fetch_1.default(apiUrl + '')
            .then(users => {
            chai_1.expect(users).to.not.be.null;
            chai_1.expect(users.status).to.equal(200);
            chai_1.expect(users).to.not.be.undefined;
            done();
        });
    });
    mocha_1.it('Should insert a new user at /');
    mocha_1.it('Should update user at /:id when ID is passed');
    mocha_1.it('Should return all relevant users at /search/:query is used');
    after(() => {
        process.exit(0);
    });
});
//# sourceMappingURL=usercontroller.spec.js.map
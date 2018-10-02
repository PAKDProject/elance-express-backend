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
const config_1 = require("config");
const login_1 = require("../../models/login");
const user_1 = require("../../models/user");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
chai.use(chaiHttp);
mocha_1.describe('Testing the Login Controller', () => {
    let user = new user_1.User("test@test.com", "John", "Test");
    let userLogin = new login_1.Login("test@test.com", undefined, undefined);
    let userId;
    mocha_1.before((done) => __awaiter(this, void 0, void 0, function* () {
        //Starting dev server for testing
        let server = yield new createServer_1.Server(undefined, 'development');
        yield server.config();
        yield server.start();
        //Save a test user
        yield new user_1.UserModel(user).save((err, addedUser) => {
            if (err)
                throw err;
            userLogin.userId = addedUser._id;
            userId = addedUser._id;
        });
        //Hash a password for the user, save their login details
        let hashedPass = yield bcrypt_1.hash('hashmeplz', 10);
        userLogin.password = hashedPass;
        yield new login_1.LoginModel(userLogin).save();
        done();
    }));
    mocha_1.it('Should return a JWT and redirect to app when correct params are sent to POST /login', done => {
        let { email } = userLogin;
        chai
            .request(config_1.get('backendUrl'))
            .post('/login')
            .send({
            email,
            password: 'hashmeplz'
        })
            .then(res => {
            chai.expect(res.status).to.equal(301);
            chai.expect(res.body.jwt).to.not.be.undefined;
            chai.expect(res.body.err).to.be.undefined;
            let jwt = jsonwebtoken_1.verify(res.body.jwt, config_1.get('tokenpass'));
            let decodedJWT = jwt;
            chai.expect(decodedJWT).to.equal(userId);
            done();
        });
    });
    mocha_1.it('Should return 403 if wrong email is passed to POST /login', done => {
        chai.request(config_1.get('backendUrl'))
            .post('/login')
            .send({
            email: 'whatMan@what.slt',
            password: 'hashmeplz'
        })
            .then(res => {
            chai.expect(res.status).to.equal(403);
            chai.expect(res.body.err).to.equal('Wrong email or password entered!');
            done();
        });
    });
    mocha_1.it('Should return 403 if wrong password is passed to POST /login', done => {
        let { email } = userLogin;
        chai.request(config_1.get('backendUrl'))
            .post('/login')
            .send({
            email,
            password: 'donthashmepls'
        })
            .then(res => {
            chai.expect(res.status).to.equal(403);
            chai.expect(res.body.err).to.equal('Wrong email or password entered!');
            done();
        });
    });
    mocha_1.it('Should return 400 if no password is passed to POST /login', done => {
        let { email } = userLogin;
        chai.request(config_1.get('backendUrl'))
            .post('/login')
            .send({
            email
        })
            .then(res => {
            chai.expect(res.status).to.equal(400);
            chai.expect(res.body.err).to.equal('No email or password entered!');
            done();
        });
    });
    mocha_1.it('Should return 400 if no email is passed to POST /login', done => {
        chai.request(config_1.get('backendUrl'))
            .post('/login')
            .send({
            password: 'hashmeplz'
        })
            .then(res => {
            chai.expect(res.status).to.equal(400);
            chai.expect(res.body.err).to.equal('No email or password entered!');
            done();
        });
    });
    after((done) => __awaiter(this, void 0, void 0, function* () {
        // Delete all test data from db
        yield user_1.UserModel.deleteMany({ $and: [{ fName: user.fName }, { lName: user.lName }, { email: user.email }] });
        yield login_1.LoginModel.deleteMany({ $and: [{ email: userLogin.email }] });
        done();
    }));
});
//# sourceMappingURL=logincontroller.spec.js.map
import { describe, before, it, beforeEach } from "mocha"
import * as chai from 'chai'
import { Server } from '../../lib/createServer'
import chaiHttp = require('chai-http')
import { get as getConfig } from 'config'
import { Login, LoginModel } from "../../models/login";
import { ObjectId } from 'mongodb'
import { User, UserModel } from "../../models/user";
import { hash, compare } from 'bcrypt'
import { verify } from 'jsonwebtoken'
import { IJWT } from "../../interfaces/jwt";

chai.use(chaiHttp)

describe('Testing the Login Controller', () => {
    let user = new User(
        "test@test.com",
        "John",
        "Test"
    )

    let userLogin = new Login(
        "test@test.com",
        undefined,
        undefined
    )
    let userId: ObjectId
    before(async done => {
        let server = await new Server(undefined, 'development')
        await server.config()
        await server.start()

        await new UserModel(user).save((err, addedUser) => {
            if(err) throw err
            userLogin.userId = addedUser._id
            userId = addedUser._id
        })

        let hashedPass = await hash('hashmeplz', 10)
        userLogin.password = hashedPass
        await new LoginModel(userLogin).save()
        done()
    })

    it('Should return a JWT and redirect to app when correct params are sent to POST /login', done => {
        let { email } = userLogin;
        chai
        .request(getConfig('backendUrl'))
        .post('/login')
        .send({
            email,
            password: 'hashmeplz'
        })
        .then(res => {
            chai.expect(res.status).to.equal(301)
            chai.expect(res.body.jwt).to.not.be.undefined
            chai.expect(res.body.err).to.be.undefined
            
            let jwt = verify(res.body.jwt, getConfig('tokenpass'))
            let decodedJWT: IJWT = jwt as IJWT;
            chai.expect(decodedJWT).to.equal(userId)
            done()
        })

    })

    it('Should return 403 if wrong email is passed to POST /login', done => {
        chai.request(getConfig('backendUrl'))
        .post('/login')
        .send({
            email: 'whatMan@what.slt',
            password: 'hashmeplz'
        })
        .then(res => {
            chai.expect(res.status).to.equal(403)
            chai.expect(res.body.err).to.equal('Wrong email or password entered!')
            done()
        })
    })

    it('Should return 403 if wrong password is passed to POST /login', done => {
        let { email } = userLogin

        chai.request(getConfig('backendUrl'))
        .post('/login')
        .send({
            email,
            password: 'donthashmepls'
        })
        .then(res => {
            chai.expect(res.status).to.equal(403)
            chai.expect(res.body.err).to.equal('Wrong email or password entered!')
            done()
        })
    })
})
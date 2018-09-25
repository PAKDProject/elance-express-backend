import "mocha"
import  * as chai  from 'chai'
import { Server } from '../../lib/createServer'
import { default as fetch } from 'node-fetch'
import chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Testing the User Controller', () => {
    const apiUrl = 'http://localhost:3000/user'
    before(done => {
        let app = new Server( undefined, 'development')
        app.config().then(() => { 
            app.start()
            done()
        })
    })

    it('Should return user at /:id when id is passed', done => {
        fetch(apiUrl + '')
        .then(users => {
            chai.expect(users).to.not.be.null
            chai.expect(users.status).to.equal(200)
            chai.expect(users).to.not.be.undefined
            done()
        })
    })

    it('Should insert a new user at /', done => {
        chai.request(apiUrl)
        .post('/')
        .send({
            username: 'xXxJeffBezosxXx'
        })
        .then(res => {
            chai.expect(res.status).to.equal(201)
            done()
        })
    })

    it('Should update user at /:id when ID is passed')
    it('Should return all relevant users at /search/:query is used')

    after(() => {
        process.exit(0)
    })
})
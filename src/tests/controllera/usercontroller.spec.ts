import { describe, before, it } from "mocha"
import { expect } from 'chai'
import { Server } from '../../lib/createServer'
import { default as fetch } from 'node-fetch'

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
            expect(users).to.not.be.null
            expect(users.status).to.equal(200)
            expect(users).to.not.be.undefined
            done()
        })
    })

    it('Should insert a new user at /')
    it('Should update user at /:id when ID is passed')
    it('Should return all relevant users at /search/:query is used')

    after(() => {
        process.exit(0)
    })
})
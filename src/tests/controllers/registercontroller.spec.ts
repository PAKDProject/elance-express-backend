import { describe, before, it, beforeEach } from "mocha"
import * as chai from 'chai'
import { Server } from '../../lib/createServer'
import chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Testing the Registration Controller', () => {
    before(async done => {
        let server = await new Server(undefined, 'development')
        await server.config()
        await server.start()
        done()
    })

    it('Should return a JWT when correct params are sent to POST /register')
    it('Should return 400 if wrong params are passed to POST /login')
})
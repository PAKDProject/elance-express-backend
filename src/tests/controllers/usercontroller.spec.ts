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
        chai.request(apiUrl)
        .get('')
        .end((_err, res) => {
            chai.expect(res).to.not.be.null
            chai.expect(res.status).to.equal(200)
            chai.expect(res).to.not.be.undefined
            done()
        })
    })

    it('Should insert a new user at /', done => {
        const user = {
            username: 'xXx_JeffBezos_xXx',
            fName: 'Jeff',
            lName: 'Bezos',
            dob: new Date('01/01/01'),
            summary: 'Ayy its ya boi, skinnybezos',
            skills: [
                {
                    title: 'God King of Earth',
                    description: 'I have too much money'
                },
                {
                    title: 'Absolutely Shredded',
                    description: 'gains gains gains'
                }
            ],
            educationItems: [
                {
                    degreeTitle: 'PhD in Being Rich',
                    startYear: '2017',
                    endYear: '2999',
                    collegeName: 'AWS Institute',
                    grade: '69',
                    description: 'Why is this a field loool 4Head'
                }
            ],
            avatarUrl: 'bezos.png',
            backoundUrl: 'background.png',
            socialLinks: [
                {
                    name: 'Github',
                    linkUrl: 'https://github.com/BlueishLeaf'
                }
            ],
            tagline: 'The real OG'
        }
        chai.request(apiUrl)
        .post('/')
        .send(user)
        .end((res: Response) => {
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai = require("chai");
const createServer_1 = require("../../lib/createServer");
const chaiHttp = require("chai-http");
const user_1 = require("../../models/user");
chai.use(chaiHttp);
mocha_1.describe('Testing the User Controller', () => {
    const apiUrl = 'http://localhost:3000/user';
    mocha_1.before(done => {
        let app = new createServer_1.Server(undefined, 'development');
        app.config().then(() => {
            app.start();
            new user_1.UserModel({
                email: 'jeffmoneybezos1@aws.com',
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
            }).save();
            new user_1.UserModel({
                email: 'jeffmoneybezos2@aws.com',
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
            }).save();
            done();
        });
    });
    mocha_1.it('Should return all users', done => {
        chai.request(apiUrl)
            .get('')
            .end((_err, res) => {
            chai.expect(res).to.not.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.have.property('users');
            chai.expect(res).to.not.be.undefined;
            done();
        });
    });
    mocha_1.it('Should insert a new user at /', done => {
        const user = {
            email: 'jeffmoneybezos3@aws.com',
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
        };
        chai.request(apiUrl)
            .post('/')
            .send(user)
            .end((_err, res) => {
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.have.property('msg').eql('User created.');
            done();
        });
    });
    mocha_1.it('Should update user at /:id when ID is passed', done => {
        const userChanges = {
            fName: 'Money',
            lName: 'Bags'
        };
        user_1.UserModel.findOne({}, (_err, user) => {
            if (user) {
                chai.request(apiUrl)
                    .put('/' + user._id)
                    .send(userChanges)
                    .end((_err, res) => {
                    chai.expect(res.status).to.equal(202);
                    chai.expect(res.body).to.have.property('msg').eql('User updated.');
                    chai.expect(res.body.user).to.have.property('fName').eql('Money');
                    chai.expect(res.body.user).to.have.property('lName').eql('Bags');
                    done();
                });
            }
        });
    });
    mocha_1.it('Should return all relevant users at /search/:query is used');
    mocha_1.it('Should delete the user at /:id when ID is passed');
    after(done => {
        user_1.UserModel.deleteMany({}, (_err) => {
            done();
            process.exit(0);
        });
    });
});
//# sourceMappingURL=usercontroller.spec.js.map
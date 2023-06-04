const {app,server} = require('./../libs/app');
const request = require('supertest');
describe('superTest!!!!',()=>{
    afterAll(()=>{
        server.close();
    })

    test('server test',(done)=>{
        request(app).get('/api1').end((err,res)=>{
            if(err) throw err;
            expect(res.body.name).toMatch('api1 called!');
            done();
        })
    })
})
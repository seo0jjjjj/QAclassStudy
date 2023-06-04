beforeEach(()=>{
    console.log('beforeEach static()');
})

describe('initallizer Test', ()=>{
    //Each
    beforeEach(()=>{
        console.log('beforeEach()');
    })

    afterEach(()=>{
        console.log("afterEach()");
    })

    //All
    beforeAll(()=>{
        console.log("beforeAll()");
    })

    afterAll(()=>{
        console.log("afterAll()");

    })

    test('test01',()=>{
        expect(0).toBe(0);
    })
    test('test02',()=>{
        expect(0).toBe(0);
    })
    test('test03',()=>{
        expect(0).toBe(0);
    })
})
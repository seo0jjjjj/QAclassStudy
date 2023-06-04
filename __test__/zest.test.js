const { fetchData, fetchDataError } = require('../libs/promise');

describe('jestTest', () => {
    test('then', () => {
        fetchData().then(data => expect(data).toBe(`hello`));
    })

    test('try Catch Test', async () => {
        try {
            //await fetchData().expect('get');
            await fetchDataError();
        } catch (e) {
            expect(e).toMatch('bye');
        }
    });

    test(`resolves, rejects`, async () => {
        await expect(fetchData()).resolves.toBe('hello');
        await expect(fetchDataError()).rejects.toBe('bye');
    });
    test('assertions test', () => {
        expect.assertions(2)
        expect(true).not.toBeFalsy();
        expect(true).toBeTruthy();
    });
    test(`callback Test`, (done) => {
        function callback(end){
            fetchData().then(data=>expect(data).toBe(`hello`));
            end();
        }
        callback(done);
    });

});
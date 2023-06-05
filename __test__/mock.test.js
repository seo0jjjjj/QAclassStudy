const { Excute, Excute2 } = require('./../libs/forEach')

const mock = jest.fn((x, y) => x + y);
describe('mock Test', () => {

    test('forEach mock function', () => {
        mock(0, 1);
        mock(2, 3);
        mock.mockReturnValue(1000);
        expect(mock()).toBe(1000);
        expect(mock.mock.calls[0][1]).toBe(1);
        expect(mock.mock.calls[1][1]).toBe(3);
        mock.mockRestore();

    });

    test('mock fun fake', async () => {
        jest.spyOn(Excute.prototype, 'get').mockResolvedValueOnce('hi');
        expect(await Excute2()).toBe('hi');
        jest.restoreAllMocks()
        expect(Excute2()).toBe('get');
    })


});
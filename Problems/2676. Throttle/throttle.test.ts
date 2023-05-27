import { throttle } from './throttle';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

// TODO add properly tested examples

describe('2676. Throttle', () => {
    let func: jest.Mock;
    let dFunc: Function;

    // beforeEach(() => {
    //     func = jest.fn();
    //     dFunc = throttle(func, 50);
    // });

    test('Example 1', async() => {
        func = jest.fn();
        dFunc = throttle(func, 100);

        dFunc();
        dFunc();

        jest.runAllTimers();

        expect(func).toBeCalledTimes(2);
    });
});

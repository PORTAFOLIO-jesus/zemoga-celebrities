import { litelTimeNumberDays } from "../../../src/helpers/dates";

describe('Testing Helper for Dates', () => {

    test('should return a relative from updatedTime until now ', () => {
        const date = "2020-03-10T23:08:57.892Z";
        const valueActual = litelTimeNumberDays(date);
        const valueExpected = '3 years ago';
        expect(valueActual).toBe(valueExpected);
    })
})
import celebrityApi from "../../../src/api/celebrityApi";

describe('Testing Celebrity Api', () => {
    test('axios should be configurated', () => {
        expect(celebrityApi.defaults.baseURL).toBe('https://zemoga-fcb8b-default-rtdb.firebaseio.com');
    })
})
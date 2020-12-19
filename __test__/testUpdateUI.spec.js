const requestPost = require('../src/client/js/updateUI')
const updateUIFunction = requestPost.updateUI

describe('Test "updateUI()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof updateUIFunction).toBe("function");
    });
})
const {describe, expect, test, beforeEach} = require('@jest/globals');
const API = require('../src/API');

beforeEach(() => {
    API.init(); // Call the API.init function before each test
  });

describe('Pre seeded tables module', () => {
    test('Checking that genres are not empty', () => {
        expect(API.getGenres().length).toBeGreaterThan(0);
        console.log('Genres table have ' + API.getGenres().length + ' genres');
    });
});

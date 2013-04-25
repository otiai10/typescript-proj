/// <reference path="../src/index.ts" />
/// <reference path="../vendor/mocha.d.ts" />
/// <reference path="../vendor/chai.d.ts" />

var expect = chai.expect;

describe('index', () => {
    it('has text `Hello TypeScript!`', () => {
        var index = new Index.HelloWorld();
        expect(index.text()).to.equal('Hello TypeScript!');
    });
});
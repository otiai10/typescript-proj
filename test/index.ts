/// <reference path="../src/index.ts" />
/// <reference path="../definitions/mocha/mocha.d.ts" />
/// <reference path="../definitions/chai/chai.d.ts" />

describe('index', () => {
    var expect = chai.expect;
    it('has text `Hello TypeScript!`', () => {
        var index = new Index.HelloWorld();
        expect(index.text()).to.equal('Hello TypeScript!');
    });
    it('Test of `Template class`', () => {
        var template = new Index.Template();
        expect(template.render(
            '{each fruits}{name}:{color} {/each}',
            { fruits: [{name: 'Apple', color: 'Red'},{name: 'Banana', color: 'Yellow'},{name: 'Orange', color: 'Orange'}]}
        )).to.equal("Apple:Red Banana:Yellow Orange:Orange ");
    });
});

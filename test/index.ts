/// <reference path="../src/index.ts" />
/// <reference path="../definitions/mocha/mocha.d.ts" />
/// <reference path="../definitions/chai/chai.d.ts" />

describe('index', () => {
    var expect = chai.expect;
    it('has text `Hello TypeScript!`', () => {
        var index = new Index.HelloWorld();
        expect(index.text()).to.equal('Hello TypeScript!');
    });
    it('(´・ω・`) `Aaa!`', () => {
        var index = new Index.Aaa();
        expect(index.hoge()).to.equal('ああああああ');
    });
    it('Render Method Test', () => {
        var masa = new Index.Masa();
        expect(masa.render()).to.equal('kuzu13newbee');
        expect(masa.render2(10,5)).to.equal('15');
        var company = {
            'name'    : 'GREE',
            'address' : 'Roppongi',
            'type'    : 'Internet',
        }
        expect(masa.toHtml(company)).to.equal('<h1>GREE</h1><ul><li>Roppongi</li><li>Internet</li></ul>');
    });
    it('Advanced Test for `adv`', () => {
        var ochiai = new Index.Ochiai();
        expect(ochiai.render('{each names}{0}{/each names}', { names : ['Sasaki', 'Omi', 'Wen']}))
            .to.equal("Sasaki,Omi,Wen");
    });
});

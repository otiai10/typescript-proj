module Index {
    export class HelloWorld {
        text() : string {
            return 'Hello TypeScript!';
        }
    }
    export class Aaa {
        hoge() : string {
            return 'ああああああ';
        }
    }
    export class Masa {
        render() : string {
            return 'kuzu13newbee';
        }
        render2(i1, i2) : string {
            return String(i1 + i2);
        }
        toHtml(objComp) : string {
            return '<h1>' + objComp.name + '</h1><ul><li>' + objComp.address + '</li><li>' + objComp.type + '</li></ul>';
        }
    }
    export class Ochiai {
        render(format: string, params: any) : string {
            var ren: string = '';
            var res: any = this.has_each(format);
            if(res && params[res.key] !== void 0){
                var len: int = params[res.key].length;
                for (var i=0; i < len; i++) {
                    ren += this.apply(res.innerFormat, params[res.key][i]);
                    ren += ',';
                }
                ren = ren.replace(/.$/,'');
            }
            return ren;
        }
        has_each(s) : any {
            if (s.match(/\{each.*\}/) && s.match(/\{\/each.*\}/)) {
                var key: string = s.match(/\{each ([a-z^\{]*)\}/)[1];
                var innerFormat = s.match(/\{each[ a-z^\{]*\}(.*)\{\/each.*\}/)[1];
                return {'key':key,'innerFormat':innerFormat};
            }
            return null;
        }
        apply(s, p) : string {
            if (typeof p == 'string') {
                return s.replace(/\{.*\}/,p);
            }
        }
    }
}

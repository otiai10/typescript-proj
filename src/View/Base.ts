module ViewBase {
    export class View {
        private _string: string;
        private _params: any;
        constructor(private format: string){
            this._string = format;
        }
        apply(params: any[]) : View {
            if (typeof params == 'object') {
                this._params = params[0];
            }
            // this._stringに含まれる最深部のpatternを走査する
            this._string = this.parse(this._string);
            return this;
        }

        toString() : string {
            return this._string;
        }

        // とりあえず多重eachのことは考えない
        parse(source: string) : any {
            var mat = source.match(/\{[a-z \/^\}]*\}/g);
            var mlen: number = mat.length;
            for(var i=0;i < mlen; i++){
                if (mat[i].match(/\{each[ a-z]*\}/)) {
                    // {{{{ handle Each
                    var jointed_result  = '';
                    var target_area     = source.match(/(\{each[ a-z]*\}.*\{\/each\})/)[1];
                    var inner_str       = source.match(/\{each[ a-z]*\}(.*)\{\/each\}/)[1];
                    var inner_param_key = mat[i].match(/\{each *([a-z]*)\}/)[1];
                    var inner_params = this._params[inner_param_key];
                    var iplen = inner_params.length;
                    for (var j=0;j < iplen; j++) {
                        var applied_str = this._apply(inner_str, inner_params[j]);
                        jointed_result += applied_str;
                    }
                    // }}}
                    source = source.replace(target_area, jointed_result);
                }
            }
            return source;
        }

        // ここには{each}や{if}など閉じタグが必要なリソースが入って来ない前提で考える
        _apply(_resource:string, _params:any) : string {
            var mat = _resource.match(/\{[a-z0-9]*\}/g);
            for (var i=0;i < mat.length; i++) {
                var target_key_name = mat[i].match(/\{([a-z0-9]*)\}/)[1];
                if (_params[target_key_name] == void 0) {
                    alert(target_key_name + " is required in " + _resource);
                }
                _resource = _resource.replace(mat[i], _params[target_key_name]);
            }
            return _resource;
        }
    }
}

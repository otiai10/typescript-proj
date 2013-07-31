/// <reference path="../src/View/Base.ts" />

module Index {
    export class HelloWorld {
        text() : string {
            return 'Hello TypeScript!';
        }
    }
    export class Template {
        render(format: string, ...params: any[]) : string {
            var view = new ViewBase.View(format);
            view.apply(params);
            return view.toString();
        }
    }
}

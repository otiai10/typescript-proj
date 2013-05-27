declare module chai {
    export function expect(value: any): IChai;
    
    export function should(): void;

    export interface IChai {
        to: IChai;
        be: IChai;
        been: IChai;
        is: IChai;
        and: IChai;
        have: IChai;
        with: IChai;
        that: IChai;
        at: IChai;
        of: IChai;
        same: IChai;
        not: IChai;
        deep: IChai;
        a(v: any): any;
        equal(v: any): any;
        equals(v: any): any;
        eq(v: any): any;
        eql(v: any): any;
        null: any;
        undefined: any;
        true: any;
        false: any;
    }
}


interface Object {
    should: chai.IChai;
}

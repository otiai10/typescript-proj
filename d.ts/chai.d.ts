declare module chai {
    export function expect(value: any): IChai;
    
    interface IChai {
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
        equal: any;
        equals: any;
        eq: any;
        eql: any;
    }
}

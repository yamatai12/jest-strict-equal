class Class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  it("同一の確認", () => {
    //値が同じなのでpass
    expect(new Class("名前")).toEqual({ name: "名前" });
    //型が違うのでfail
    //   expect(new Class("名前")).toStrictEqual({ name: "名前" });
  
    expect([2]).toEqual([2, undefined]);
    // undefinedの要素が考慮されるのでfail
    //   expect([2]).toStrictEqual([2, undefined]);
  
    expect([, 2]).toEqual([undefined, 2]);
    // undefinedの要素が考慮されるのでfail
    //   expect([, 2]).toStrictEqual([undefined, 2]);
  });
  
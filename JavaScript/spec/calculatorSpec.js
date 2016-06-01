/*
string-calculator code kata:
instructions can be found here: http://osherove.com/tdd-kata-1/

The thought is to write some basic javascript, 
the main goal is to learn from other people, how they think! 
But also to do some TDD!

*/

describe("calculator",function(){
    it("should evaluate \"\" to 0",function(){
        expect(calculator.add("")).toEqual(0);
    });
});
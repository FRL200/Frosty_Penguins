const { addvector,percent ,add_question,initial ,sum_weights,questions} = require('./pages/MajorDeterminator');

test("addvector", () => {
    let a = [1,2,3]
    let b = [1,2,3]
    expect(addvector(a,b)).toStrictEqual([2,4,6]);
  }); 
  test("initial", () => {
    expect(initial()).toStrictEqual([0,0,0,0,0,0]);
  }); 
  test("percents", () => {
    expect(percent([2,4,6],[2,8,30])).toStrictEqual([100,50,20]);
  }); 
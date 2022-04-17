exports.addvector = (a,b) => {
    return a.map((e,i) => e + b[i]);
}

exports.percent = (a,b) => {
    return  a.map((e,i) =>(100* e / b[i]).toFixed(1));
}
exports.scale = (a) => {
  return  a.map((e) =>(e-1)/4);
}
exports.add_question = (q,weight) => {
   let temp = [q['CLAS Compsci'],q['Engineering CompSci'],q['Comp engineering'],q['Electrical Engineering'],q['Data Science'],q['Digital Arts and sciences']]
  return temp.map(x => x * weight)

}
exports.initial = () => {
    return [0,0,0,0,0,0]

}
exports.sum_weights = (survery_results) => {
    let weights = exports.initial()
    for (let x in exports.questions) {
        weights = exports.addvector(weights,exports.add_question(exports.questions[x],survery_results[x]))
 
      }
    return weights
    }
exports.process_results = (results) =>
{

  results = exports.scale(results)
  results = exports.percent(exports.sum_weights(results),exports.sum_weights([1,1,1,1,1,1,1]))
  return [{
    "CLAS Compsci ": results[0],
    "Engineering CompSci": results[1],
    "Comp engineering": results[2],
    "Electrical Engineering": results[3],
    "Data Science": results[4],
    "Digital Arts and sciences": results[5]

  }]
}

exports.questions = [
    {
      "Question": "Are you interested in learning a foreign language and or do you speak a foreign language fluently?",
      "CLAS Compsci": 0.5,
      "Engineering CompSci": 0,
      "Comp engineering": 0,
      "Electrical Engineering": 0,
      "Data Science": 0.5,
      "Digital Arts and sciences": 0
    },
    {
      "Question": "How interested are you interested in hardware(the components that go inside computers)",
      "CLAS Compsci": 0.3,
      "Engineering CompSci": 0.35,
      "Comp engineering": 0.9,
      "Electrical Engineering": 1,
      "Data Science": 0.15,
      "Digital Arts and sciences": 0.15
    },
    {
      "Question": "How interested are you in application development(software for different operating systems like windows, mac OS, android, web, etc)",
      "CLAS Compsci": 1,
      "Engineering CompSci": 1,
      "Comp engineering": 0.4,
      "Electrical Engineering": 0.15,
      "Data Science": 0.15,
      "Digital Arts and sciences": 0.7
    },
    {
      "Question": "How interested are you in learning more advanced mathamatical topics",
      "CLAS Compsci": 0.7,
      "Engineering CompSci": 0.7,
      "Comp engineering": 0.75,
      "Electrical Engineering": 0.8,
      "Data Science": 1,
      "Digital Arts and sciences": 0.5
    },
    {
      "Question": "How interested are you in working on videos games",
      "CLAS Compsci": 0.7,
      "Engineering CompSci": 0.6,
      "Comp engineering": 0.4,
      "Electrical Engineering": 0.15,
      "Data Science": 0.15,
      "Digital Arts and sciences": 1
    },
    {
      "Question": "how interested are you in artificial intelligence and machine learning?",
      "CLAS Compsci": 0.8,
      "Engineering CompSci": 0.8,
      "Comp engineering": 0.8,
      "Electrical Engineering": 0.8,
      "Data Science": 1,
      "Digital Arts and sciences": 0.4
    },
    {
      "Question": "how interested are you in networking and communications",
      "CLAS Compsci": 0.7,
      "Engineering CompSci": 0.75,
      "Comp engineering": 1,
      "Electrical Engineering": 0.85,
      "Data Science": 0.2,
      "Digital Arts and sciences": 0.65
    }
  ]
  //console.log(this.percent(this.sum_weights([1,1,1,1,1,1,1]),this.sum_weights([1,1,1,1,1,1,1])))

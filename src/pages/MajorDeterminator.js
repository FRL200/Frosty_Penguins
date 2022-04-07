import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const MajorDeterminator = () => {
    return <>
        <h1>Major Determinator</h1>
        <p1>This is the Major Determinator Page!</p1>
     <Interest/>
    </>;
};
class Interest extends React.Component{
render() { return(
    <>
    <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
    <Button variant="link">Link</Button>
  </>
    );
    }
    }
    class ShoppingList extends React.Component {
        render() {
          return (
            <div className="shopping-list">
              <h1>Shopping List for {this.props.name}</h1>
              <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
              </ul>
            </div>
          );
        }
      }
  
export default MajorDeterminator;

exports.addvector = (a,b) => {
    return a.map((e,i) => e + b[i]);
}

exports.percent = (a,b) => {
    return  a.map((e,i) =>100* e / b[i]);
}

exports.add_question = (q,weight) => {
   let temp = [q['CLAS Compsci'],q['Engineering CompSci'],q['Comp engineering'],q['Electrical Engineering'],q['Data Science'],q['Digital Arts and sciences']]
  return temp.map(x => x * weight)

}
exports.initial = () => {
    return [0,0,0,0,0,0]

}
exports.sum_weights = () => {
    weights = initial()
    for (let x in questions) {
        weights = addvector(weights,add_question(questions[x],1))
      }
    return weights
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
let k = [2,2,3,.2,3,3]
//console.log(percent(k,sum_weights()))
//console.log(questions[1]["Question"])
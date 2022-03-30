import React from 'react'
import { BrowserRouter as Router,Link,Route } from 'react-router-dom';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
//import 'semantic-ui-css/semantic.min.css';
//fix this ^^


import './App.css';

import Home from './pages/Home';

function App() {
  return (
      <>
      <div>
      <h1>Frosty Penguins</h1>
      <ButtonComponent 
      content="Major Determinator" 
      cssClass='e-outline'
      //onClick={}
      ></ButtonComponent>
      <ButtonComponent content="Schedule Builder" cssClass='e-outline'></ButtonComponent>
      <ButtonComponent content="Major Navigator" cssClass='e-outline'></ButtonComponent>
      <ButtonComponent content="Classes Navigator" cssClass='e-outline'></ButtonComponent>
    </div>
    </>
  );
}

export default App;


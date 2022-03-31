import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

//Import statements for all of the pages--------------
import Home from './pages/Home.js';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import MajorDeterminator from "./pages/MajorDeterminator";
import MajorNavigator from "./pages/MajorNavigator";
import ClassesNavigator from "./pages/ClassesNavigator";



import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';



class App extends React.Component {
    //return (
        //<div>

    btnClickHome() {
        window.location = "/";
    }

    btnClickMajorDeterminator(){
        window.location= "MajorDeterminator";
    }

    btnClickMajorNav() {
        window.location = "MajorNavigator";
    }

    btnClickClassesNav() {
        window.location = "ClassesNavigator";
    }




    render() {
        return (<div>
            <ButtonComponent cssClass='e-link' onClick={this.btnClickHome.bind(this)}>Home</ButtonComponent>
            <ButtonComponent cssClass='e-link' onClick={this.btnClickMajorDeterminator.bind(this)}>Schedule Builder</ButtonComponent>
            <ButtonComponent cssClass='e-link' onClick={this.btnClickMajorNav.bind(this)}>Major Navigator</ButtonComponent>
            <ButtonComponent cssClass='e-link' onClick={this.btnClickClassesNav.bind(this)}>Classes Navigator</ButtonComponent>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="*" element={<NoPage />} />
                        <Route path="MajorDeterminator" element={<MajorDeterminator />} />
                        <Route path="MajorNavigator" element={<MajorNavigator />} />
                        <Route path="ClassesNavigator" element={<ClassesNavigator />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>);
    }



        /*
      <h1>Frosty Penguins</h1>
      <ButtonComponent 
      content="Major Determinator" 
      cssClass='e-outline'
      //onClick={}
      ></ButtonComponent>
      <ButtonComponent content="Schedule Builder" cssClass='e-outline'></ButtonComponent>
      <ButtonComponent content="Major Navigator" cssClass='e-outline'></ButtonComponent>
      <ButtonComponent content="Classes Navigator" cssClass='e-outline'></ButtonComponent>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="MajorDeterminator" element={<MajorDeterminator />} />
                </Route>
            </Routes>
            </BrowserRouter>*/
       // </div>
   // );
}

export default App;

/*function App() {
    return (
        //<div><h1>Hello</h1></div>
        Home()
      //window.location.replace(Home);
      //<Router>
      //  <Route exact path="/" component={Home} />
     // </Router>
    //fix this too ^^
  );
}
*/
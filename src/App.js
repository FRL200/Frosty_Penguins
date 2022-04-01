
//Imports for React, router, and buttons--------------------
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
//----------------------------------------------------------



//Import statements for all of the pages--------------
import Home from './pages/Home.js';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import MajorDeterminator from "./pages/MajorDeterminator";
import MajorNavigator from "./pages/MajorNavigator";
import ClassesNavigator from "./pages/ClassesNavigator";
//-------------------------------------------------------

//Imports for CSS Files----------------------------------
import './App.css';
//-----------------------------------------------------



//I also had to change App to a class for this to work, hopefully it does not cause any issues

class App extends React.Component {
    //return (
        //<div>


    //Essentially, when a button is clicked, the onClick in the render() 
    //below comes up to here and sets the window.location to the correct place

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



    //This render window sets up the button components and the routing paths so the user can navigate
    render() {
        return (<div>
            <ButtonComponent cssClass='e-link' onClick={this.btnClickHome.bind(this)}>Home</ButtonComponent>
            <ButtonComponent cssClass='e-link' onClick={this.btnClickMajorDeterminator.bind(this)}>Major Determinator</ButtonComponent>
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
}

export default App;

//Everything below here is for reference incase we need to look back at it-------------------------

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
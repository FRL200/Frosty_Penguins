
//Imports for React, router, and buttons--------------------
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {enableRipple} from '@syncfusion/ej2-base'
//----------------------------------------------------------



//Import statements for all of the pages--------------
import Home from './pages/Home.js';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import MajorDeterminator from "./pages/MajorDeterminator";
import MajorExplorer from "./pages/MajorExplorer";
import ScheduleBuilder from "./pages/ScheduleBuilder";
import UFColleges from "./pages/UFColleges";
import UFEngineering from "./pages/UFEngineering";
import UFCSEClasses from "./pages/UFCSEClasses";
import image from "./images/BackgroundImage.png"
//-------------------------------------------------------

//Imports for CSS Files----------------------------------
import './App.css';
//-----------------------------------------------------

//I also had to change App to a class for this to work, hopefully it does not cause any issues

const divStyle = {
    width: '88%',
    height: '800px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
};


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
        window.location = "MajorExplorer";
    }

    btnClickClassesNav() {
        window.location = "ScheduleBuilder";
    }




    //<div style={{ backgroundImage: `url(${image})` }}> </div>
    //return (<div style={{ backgroundImage:`url(${image})`}}>

    //This render window sets up the button components and the routing paths so the user can navigate
    render() {
        /*
        const styleBackground = {
            backgroundImage:`url(${image})`,
            height: '100vh',
            fontSize: '50px',
            backgroundSize: 'cover',
        };
       return (<div style={styleBackground}>
*/


        return (

            <>


            <section className="main-container">
                <ButtonComponent cssClass="e-custom" onClick={this.btnClickHome.bind(this)}>Home</ButtonComponent>
                <ButtonComponent cssClass="e-custom1" onClick={this.btnClickMajorDeterminator.bind(this)}>Major Determinator</ButtonComponent>
                    <ButtonComponent cssClass="e-custom2" onClick={this.btnClickMajorNav.bind(this)}>Major Explorer</ButtonComponent>
                    <ButtonComponent cssClass="e-custom3" onClick={this.btnClickClassesNav.bind(this)}>Schedule Builder</ButtonComponent>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="*" element={<NoPage />} />
                            <Route path="MajorDeterminator" element={<MajorDeterminator />} />
                                <Route path="MajorExplorer" element={<MajorExplorer />} />
                                <Route path="ScheduleBuilder" element={<ScheduleBuilder />} />
                                <Route path="UFColleges" element={<UFColleges />} />
                                <Route path="UFEngineering" element={<UFEngineering />} />
                                <Route path="UFCSEClasses" element={<UFCSEClasses />} />
                        </Route>
                    </Routes>
                        </BrowserRouter>
            </section>
        </>
       );
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
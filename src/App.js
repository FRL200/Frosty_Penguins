
//Imports for React, router, and buttons--------------------
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {enableRipple} from '@syncfusion/ej2-base'
//check this below
import "semantic-ui-css/semantic.min.css"
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


class App extends React.Component {
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

    //Render function below sets up the buttons to always render on each page and allows routing to occurto other pages in the product
    render() {

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
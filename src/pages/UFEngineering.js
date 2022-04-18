
import React from "react";
import Accordion from "./Components/Accordion";
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';

import "./Components/Accordion.css";

function btnClickCSE() {
  window.location = "UFCSEClasses";
}

function btnClickUFColleges() {
  window.location = "UFColleges";
}

const UFEngineering = () => {
    return <>
        <h1>Herbert Wertheim College of Engineering</h1>

     <Accordion
       title="Computer Science and Engineering"
       content="<p>The Computer Science program combines a strong engineering-oriented technical basis with a flexible interdisciplinary component and an emphasis on communication skills. This flexibility is increasingly important as computers become more important tools in an ever-increasing number of disciplines.</p>
       </br>
       <p>College: Herbert Wertheim College of Engineering</p>
       </br>
       <p>Degree: Bachelor of Science in Computer Science</p>
       </br>
       <p>Credits for Degree: 120"
     />
     <ButtonComponent content="CSE Classes" cssClass='e-custom1' onClick={btnClickCSE.bind(this)}></ButtonComponent>
     <Accordion
       title="Computer Engineering"
       content="<p>Computer Engineering (CpE) is a discipline that embodies the science and technology of design, construction, implementation, and maintenance of software and hardware components of computing systems and computer-controlled equipment. Studies in computer engineering integrate fields from both computer science (CS) and electrical engineering (EE).</p>
       </br>
       <p>College: Herbert Wertheim College of Engineering</p>
       </br>
       <p>Degree: Bachelor of Science in Computer Engineering</p>
       </br>
       <p>Credits for Degree: 126"
     />
     <ButtonComponent content="CPE Classes" cssClass='e-custom1' ></ButtonComponent>
     <Accordion
       title="Electrical Engineering"
       content="<p>Electrical Engineering is concerned with all phases and development of the transmission and utilization of electric energy and intelligence. From communication systems to electronic components that run computers and motor vehicles, electrical engineers design products and systems that meet the needs of today and tomorrow's electrical and electronic systems.</p>
       </br>
       <p>College: Herbert Wertheim College of Engineering</p>
       </br>
       <p>Degree: Bachelor of Science in Electrical Engineering</p>
       </br>
       <p>Credits for Degree: 128"
     />
     <ButtonComponent content="EE Classes" cssClass='e-custom1' ></ButtonComponent>
    <h1>        </h1>
    <h1>        </h1>
    <h1>        </h1>
    <ButtonComponent content="<- Back" cssClass='e-custom1' onClick={btnClickUFColleges.bind(this)}></ButtonComponent>
    </>
};

export default UFEngineering;

import React from "react";
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';

function btnClickHome() {
    window.location = "UFColleges";
}

const MajorExplorer = () => {

    return <>
    
    <h1>Institutions</h1>
    <ButtonComponent content="University of Florida" cssClass='e-custom4' onClick={btnClickHome.bind(this)}></ButtonComponent>
    <h1>        </h1>
    <ButtonComponent content="University of Central Florida" cssClass='e-custom4'></ButtonComponent>
    <h1>        </h1>
    <ButtonComponent content="Florida State University" cssClass='e-custom4'></ButtonComponent>
    <h1>        </h1>
    <ButtonComponent content="Florida International University" cssClass='e-custom4'></ButtonComponent>

  
  </>
};

export default MajorExplorer;
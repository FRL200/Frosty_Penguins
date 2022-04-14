
import React from "react";
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';

function btnClickHome() {
    window.location = "UFEngineering";
}

function btnClickMajorExplorer() {
    window.location = "MajorExplorer";
}

const UFColleges = () => {
  
    return <>
      
    <h1>Colleges</h1>
    <ButtonComponent content="Herbert Wertheim College of Engineering" cssClass='e-custom5' onClick={btnClickHome.bind(this)}></ButtonComponent>
    <ButtonComponent content="College of Agricultural and Life Science" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of the Arts" cssClass='e-custom5'></ButtonComponent>
    <h1>        </h1>
    <ButtonComponent content="Warrington College of Business" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of Dentistry" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of Design, Construction and Planning" cssClass='e-custom5'></ButtonComponent>
    <h1>        </h1>
    <ButtonComponent content="College of Education" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of Health and Human Performance" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of Journalism and Communications" cssClass='e-custom5'></ButtonComponent>
    <h1>        </h1>
    <ButtonComponent content="Levin College of Law" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of Liberal Arts and Sciences" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of Medicine" cssClass='e-custom5'></ButtonComponent>
    <h1>        </h1>
    <ButtonComponent content="College of Nursing" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of Pharmacy" cssClass='e-custom5'></ButtonComponent>
    <ButtonComponent content="College of Public Health and Health Professions" cssClass='e-custom5'></ButtonComponent>
    <h1>        </h1>
    <ButtonComponent content="College of Veterinary Medicine" cssClass='e-custom5'></ButtonComponent>
    <h1>        </h1>
    <h1>        </h1>
    <h1>        </h1>
    <ButtonComponent content="<- Back" cssClass='e-custom1' onClick={btnClickMajorExplorer.bind(this)}></ButtonComponent>
    
    </>
};

export default UFColleges;
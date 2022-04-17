import React, { Component } from "react";
import * as Survey from "survey-react";
const {process_results} = require('./MajorDethelper');
const MajorDeterminator = () => {
 return <>
 <link href="https://unpkg.com/survey-react@1.9.24/modern.css" type="text/css" rel="stylesheet"/>
<script src="https://unpkg.com/survey-react@1.9.24/survey.react.min.js"></script>
<div id="surveyContainer"></div>
<Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />
,{document.getElementById("surveyContainer")}
</>

};

            Survey.StylesManager.applyTheme("modern");

            var surveyJSON = {"title":"Engineering Major Determinator","logoPosition":"right","pages":[{"name":"page1","elements":[{"type":"rating","name":"question1","title":"Are you interested in learning a foreign language and or do you speak a foreign language fluently?","isRequired":true},{"type":"rating","name":"question2","title":"How interested are you interested in hardware(the components that go inside computers)","isRequired":true},{"type":"rating","name":"question3","title":"How interested are you in application development(software for different operating systems like windows, mac OS, android, web, etc)","isRequired":true},{"type":"rating","name":"question4","title":"How interested are you in learning more advanced mathematical topics","isRequired":true},{"type":"rating","name":"question5","title":"How interested are you in working on video games","isRequired":true},{"type":"rating","name":"question6","title":"how interested are you in artificial intelligence and machine learning?","isRequired":true},{"type":"rating","name":"question7","title":"how interested are you in networking and communications","isRequired":true}]}]};
            
            function sendDataToServer(survey) {
                //send Ajax request to your web server
                let k = survey.getPlainData() 
                k = k.map(x=>x["value"]);
                k = process_results(k)
                alert("The results are: " + JSON.stringify(k));
                console.table(survey.MajorDeterminator)
              }
             
export default MajorDeterminator;


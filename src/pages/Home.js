import { React } from 'react';
import './styling/Home.css'



//This page sets up the home page for a user to navigate to
const Home = () => {
    return <>
        <div>
            <h1>Home</h1>
                <p>This is the Home Page! Here, you will find all of the information about our product!</p>
                <p>You may be wondering what this website has to offer. Well, you can find all of that information below!</p>
            <h1>Major Determinator</h1>
                <p>Our Major Determinator allows you to answer a quick questionaire to tell you what majors suit you best!</p>
            <h1>Major Navigator</h1>
                <p>Our Major Navigator allows you to look through majors, their requirements, and classes, to see if you are interested in them!</p>
            <h1>Classes Navigator</h1>
            <p>Our Classes Navigator allows you to search through different classes and what they have to offer!</p>
            <div id="footer">
                <p>Hope you enjoy our website!</p>
            </div>
            </div>
        </>;
};

    //document.getElementById("heading1").style.fontSize = "large";





export default Home;

/*
export function Home(){
return(

    <div>
        <h1>Home Page</h1>
        <p1>Here is some placeholder text! </p1>
        <p1>On this page, you will be inputting the information we need from you! </p1>
    </div>
    );
}

export default Home()
*/

import { React } from 'react';
import photoStyle from './styling/Home.css'
import penguinImage from './PageImages/PenguinImage.png';


//This page sets up the home page for a user to navigate to
const Home = () => {
   
    return <>
        <html>
            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "3vw"
                //This code sets up the styling for the Home Text and makes it so it can change size based on how wide the browser view is
            }}>
                <h1 align="center">Home</h1>
            </div>


            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "1.5vw",
                marginBottom: "50px"
                //This code sets up the styling for the description of the homepage and allows it to change size based on browser window size
            }}>
                <p align="center">This is the Home Page! Here, you will find all of the information about our product!</p>
                <p align="center">You may be wondering what this website has to offer. Well, you can find all of that information below!</p>
            </div>


            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "2vw"
                //This code sets up the styling for the Major Determinator heading and allows it to change size
            }}>
                <h1>Major Determinator</h1>
            </div>


            <div className="photoStyle">
                <img src={penguinImage} alt="PenguinPhoto" />   
            </div>


            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "1.25vw",
                marginBottom: "30px"
                //This code sets up the styling for the Major Determinator text and allows it to change size
                //The above code (div className) sets up the image of the penguin to appear in the browser!
            }}>
                <p>Our Major Determinator allows you to answer a quick questionaire to tell you what majors suit you best!</p>
            </div>


            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "2vw"
                //This code sets up the styling for the Major Explorer text and allows it to change based on browser size
            }}>
                <h1>Major Explorer</h1>

            </div>


            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "1.25vw",
                marginBottom: "30px"
               //This code sets up the styling for text description of the major explorer so it is easy to visualize and allows it to change size
            }}>
                <p>Our Major Explorer allows you to look through majors, their requirements, and classes, to see if you are interested in them!</p>
            </div>


            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "2vw"
                //This code sets up the styling for the Schedule Builder text and allows it to change based on window size
            }}>
                <h1>Schedule Builder</h1>
            </div>


            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "1.25vw"
                //This code sets up the styling for the text that contains a description of the Schedule builder and allows it to change size based on window size
            }}>
                <p>Our Schedule Builder allows you to search through different classes and to build a schedule based on what they have to offer!</p>
            </div>

        </html>
    </>;
};

export default Home;

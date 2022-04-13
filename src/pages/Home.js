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

            }}>
                <h1 align="center">Home</h1>
            </div>

            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "1.5vw",
                marginBottom: "50px"

            }}>
                <p align="center">This is the Home Page! Here, you will find all of the information about our product!</p>
                <p align="center">You may be wondering what this website has to offer. Well, you can find all of that information below!</p>

            </div>

            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "2vw"

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
            }}>


                <p>Our Major Determinator allows you to answer a quick questionaire to tell you what majors suit you best!</p>




            </div>



            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "2vw"

            }}>
                <h1>Major Explorer</h1>

            </div>


            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "1.25vw",
                marginBottom: "30px"
            }}>

                <p>Our Major Explorer allows you to look through majors, their requirements, and classes, to see if you are interested in them!</p>


            </div>



            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "2vw"

            }}>
                    <h1>Schedule Builder</h1>

            </div>

            <div style={{
                alignItems: "center",
                justifyContent: "center",
                color: "White",
                fontSize: "1.25vw"
            }}>

                <p>Our Schedule Builder allows you to search through different classes and to build a schedule based on what they have to offer!</p>

                </div>

        </html>
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

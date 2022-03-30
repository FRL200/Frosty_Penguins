import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home.js';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import MajorDeterminator from "./pages/MajorDeterminator";

//import reportWebVitals from './reportWebVitals';
//import 'semantic-ui-css/semantic.min.css';
//fix this ^^



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="MajorDeterminator" element={<MajorDeterminator />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

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
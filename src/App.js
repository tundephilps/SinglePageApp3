import React from 'react';
import Footer from './components/Fullpage/Footer';
import "./components/Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import $ from jquery;
//import jQuery from 'jquery';

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Navbar from './components/Navbar';
import Header from './components/Fullpage/Header';
import Fullpage from './components/Fullpage/Fullpage';


function App() {
    return (<div>


<Router>
<Header />
<Routes>
                <Route path="/" element={<Fullpage />} />
               
               </Routes>
           
        </Router>       
   
        <Footer />
    </div>  );
}

export default App;

 
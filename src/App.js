// import logo from './logo.svg';
import "./App.css";
import "../src/components/Header/Navigation/Navigation";
import Navigation from "../src/components/Header/Navigation/Navigation";

import Footer from "./components/Footer/Footer";
// import ModalAuth from "./components/ModalAuth/ModalAuth";
import  Action  from "./pages/Action/Action";
import HomeTitle from "./pages/HomeTitle/HomeTitle";

import CoffeMore from "./pages/CoffeMore/CoffeMore";
import NotFound from "./pages/NotFound/NotFound";

import { Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <div className="App">
      {/* <PersonList/> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeTitle />} />
        <Route path="/action" element={  <Action/>} />
        <Route path=":category" element={  <CoffeMore/>} />
        
        <Route path="*" element={  <NotFound/>} />
      </Routes>
      <Footer />
      
      {/* <ModalAuth />  MODAL WINDOW*/}
  
    </div>
  );
}

export default App;
         
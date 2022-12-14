// import logo from './logo.svg';
import "./App.css";
import "../src/components/Header/Navigation/Navigation";
import Navigation from "../src/components/Header/Navigation/Navigation";

import Footer from "./components/Footer/Footer";
// import ModalAuth from "./components/ModalAuth/ModalAuth";
import  Action  from "./pages/Action/Action";
import HomeTitle from "./pages/HomeTitle/HomeTitle";
import CategoryPage from "./pages/Restaraunt/Restaraunt";

import More from "./pages/CardMore/CardMore";
import NotFound from "./pages/NotFound/NotFound";

import { Routes, Route} from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      {/* <PersonList/> */}
      
      <Routes>
        <Route>
        <Route path="/" element={<HomeTitle />} />
        <Route path="/action" element={  <Action/>} />
        <Route path="estalibishments/:categoryId/:cardInfoId" element={  <More/>} />
        <Route path="/estalibishments/:categoryId/" element={  <CategoryPage/>} />
        <Route path="*" element={  <NotFound/>} />
        </Route>
      </Routes>
      <Footer />
      
     
  
    </div>
  );
}

export default App;
         
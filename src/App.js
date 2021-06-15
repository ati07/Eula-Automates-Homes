import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import Slider from "./Components/Slider/Slider";
import SubHeader from "./Components/SubHeader/SubHeader";
import Home from "./Pages/Home/Home";
import Catalogue from "./Components/Catalogue/Catalogue";
import AboutUs from "./Pages/About Us/AboutUs";
import Testemonial from "./Pages/Testemonial/Testemonial";
import VisualShowRooms from "./Pages/VisualShowRooms/VisualShowRooms";
import Kitchen from "./Pages/Kitchen/Kitchen";
import ModernKitchen from "./Pages/Modern Kitchen/ModernKitchen";
import HamptonKitchen from "./Pages/Hampton Kitchen/HamptonKitchen";
import ContactUs from "./Pages/Contact US/ContactUs";
import LivingRoom from "./Pages/LivingRoom/LivingRoom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SubHeader/>
          <Switch>
            <Route path="/" exact>
            <Home/>
            </Route>
            <Route path='/LivingRoom'>
            <LivingRoom/>
            </Route>
            <Route path='/About Us'>
            <AboutUs/>
            </Route>
            <Route path='/testemonial'>
              <Testemonial/>
            </Route>
            <Route path='/Visual_Showrooms'>
              <VisualShowRooms/>
            </Route>
            <Route path='/kitchen'>
              <Kitchen/>
            </Route>
            <Route path='/modern_kitchen'>
              <ModernKitchen/>
            </Route>
            <Route path='/Hampton_Kitchens'>
              <HamptonKitchen/>
            </Route>
            <Route path='/ContactUs'>
              <ContactUs/>
            </Route>
          </Switch>
          <Catalogue/>
        <Footer/>
        </div>
    
    </Router>
  );
}

export default App;

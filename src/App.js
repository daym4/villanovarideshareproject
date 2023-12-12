import './App.css';
import HomePage from './screens/homepage.js';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";
import AddRide from "./screens/AddRide.js";
import RideDetails from "./screens/RideDetails.js";
import About from "./screens/About.js";
import MyButton from "./components/MyButton.js";

const App = () => {
  return (
    <div className="app">
            
      <Router>
        <MyButton to="" />
        <MyButton to="Ride Details" />
        <MyButton to="Add a New Ride" />
        <MyButton to="About" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ride details" element={<RideDetails />} />
          <Route path="/add a new ride" element={<AddRide />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
};
   
  export default App;

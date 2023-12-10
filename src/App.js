import './App.css';
import HomePage from './screens/homepage.js';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";
import AddRide from "./screens/AddRide.js";
import Profile from "./screens/Profile.js";
import About from "./screens/About.js";
import MyButton from "./components/MyButton";

const App = () => {
  return (
    <div className="app">
            
      <Router>
        <MyButton to="" />
        <MyButton to="Add a New Ride" />
        <MyButton to="Profile" />
        <MyButton to="About" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add a new ride" element={<AddRide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
};
   
  export default App;

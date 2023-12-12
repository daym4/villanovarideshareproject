import './App.css';
import HomePage from './screens/homepage.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRide from "./screens/AddRide.js";
import RideDetails from "./screens/RideDetails.js";
import About from "./screens/About.js";
import AddCar from './screens/AddCar.js';

const App = () => {
  return (
    <div className="app">
      <Router>
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/add-a-new-ride"><button>Add a New Ride</button></Link>
          <Link to="/add-a-new-car"><button>Add A New Car</button></Link>
          <Link to="/about"><button>About</button></Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ride-details/:rideId" element={<RideDetails />} />
          <Route path="/add-a-new-ride" element={<AddRide />} />
          <Route path="/add-a-new-car" element={<AddCar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
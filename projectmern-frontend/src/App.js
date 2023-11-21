import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavigationBar from "./Components/NavigationBar";
import Register from "./Components/Register";
import EventInfo from "./Components/EventInfo";
import AddEvent from "./Components/AddEvent";
import Footer from "./Components/Footer";
import AdminLogin from "./Components/AdminLogin";
import About from "./Components/About";

function App() {

 
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AddEvent" element={<AddEvent />} />
          <Route path="/EventInfo" element={<EventInfo />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

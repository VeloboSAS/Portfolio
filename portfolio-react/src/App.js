import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import Project from "./pages/project";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} /> 
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

import "./styles/main.css"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Home from "./pages/home"
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import Project from "./components/project/project";

function App() {
  return (
        <div className="App">
            <Navbar/>
            <Home/>
            {/* <Projects/> */}
            {/* <Contacts/> */}

            <Footer/>
        </div>
    );
    }


export default App;

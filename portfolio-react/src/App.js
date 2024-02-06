import "./styles/main.css"

import vk from "./img/icons/vk.svg"
import instagram from "./img/icons/instagram.svg"
import twitter from "./img/icons/twitter.svg"
import gitHub from "./img/icons/gitHub.svg"
import linkedIn from "./img/icons/linkedIn.svg"
import Navbar from "./components/navbar/navbar"
import Header from "./components/header/header"

function App() {
  return (
        <div className="App">
            <Navbar/>
            <Header/>
            
            <main className="section">
              <div className="container">
                <h1 className="title-1">Skills</h1>
                <ul className="content-list">
                  <li className="content-list__item">
                    <h2 className="title-2">Frontend</h2>
                    <p>
                      JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                      BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
                    </p>
                  </li>
                  <li className="content-list__item">
                    <h2 className="title-2">Backend</h2>
                    <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                  </li>
                </ul>
              </div>
            </main>

            <footer className="footer">
              <div className="container">
                <div className="footer__wrapper">
                  <ul className="social">
                    <li className="social__items">
                      <a href="#!"><img src={vk} alt="Link"/></a>
                    </li>
                    <li className="social__items">
                      <a href="#!"><img src={instagram} alt="Link"/></a>
                    </li>
                    <li className="social__items">
                      <a href="#!"><img src={twitter} alt="Link"/></a>
                    </li>
                    <li className="social__items">
                      <a href="#!"><img src={gitHub} alt="Link"/></a>
                    </li>
                    <li className="social__items">
                      <a href="#!"><img src={linkedIn}alt="Link"/></a>
                    </li>
                  </ul>
                  <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                  </div>
                </div>
              </div>
            </footer>
        </div>
    );
    }


export default App;
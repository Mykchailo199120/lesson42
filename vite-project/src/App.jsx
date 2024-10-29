import {NavLink, Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import AboutTeam from "./pages/AboutTeam.jsx";

function App() {

  return (
      <>
          <nav>
              <NavLink to="/" exact activeClassName="active-link">
                  Home
              </NavLink>{''}
              |{''}
              <NavLink to="/about" activeClassName="active-link">
                  About
              </NavLink>{''}
              |{''}
              <NavLink to="/contact" activeClassName="active-link">
                  Contact
              </NavLink>
          </nav>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about/team" element={<AboutTeam />} />
              <Route path="*" element={<h1>404 - Page not found</h1>} />
          </Routes>
      </>
  )

}

export default App

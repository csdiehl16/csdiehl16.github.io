import "./App.css";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import { useState, useRef } from "react";
import Resume from "./components/Resume";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("Projects");

  const projectsRef = useRef();

  const scroll = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const pages = ["Projects", "Resume", "Contact"];

  const navClickHandler = (event) => {
    setActivePage(event.target.value);
  };

  return (
    <div className="App">
      <Profile scroll={scroll} />
      <div className="nav-bar">
        {pages.map((page) => (
          <div>
            <button
              className={
                page === activePage ? "nav-btn nav-btn-clicked" : "nav-btn"
              }
              value={page}
              key={page}
              onClick={navClickHandler}
            >
              {page}
            </button>
            {activePage === page && <div className="nav-btn-line"></div>}
          </div>
        ))}
      </div>
      {activePage === "Projects" ? (
        <Projects ref={projectsRef} />
      ) : activePage === "Resume" ? (
        <Resume />
      ) : (
        <ContactPage />
      )}
      <Footer />
    </div>
  );
}

export default App;

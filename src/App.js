import "./App.css";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import { useState } from "react";
import Resume from "./components/Resume";
import ContactPage from "./components/ContactPage";

function App() {
  const [activePage, setActivePage] = useState("Projects");

  const pages = ["Projects", "Resume", "About"];

  const navClickHandler = (event) => {
    setActivePage(event.target.value);
  };

  return (
    <div className="App">
      <Profile />
      <div className="nav-bar">
        {pages.map((page) => (
          <div>
            <button
              className="nav-button"
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
        <Projects />
      ) : activePage === "Resume" ? (
        <Resume />
      ) : (
        <ContactPage />
      )}
    </div>
  );
}

export default App;

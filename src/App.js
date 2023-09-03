import "./App.css"
import Projects from "./components/Projects"
import Profile from "./components/Profile"
import { useState, useRef } from "react"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"

const pages = ["Projects", "About Me"]

function App() {
  const [activePage, setActivePage] = useState("Projects")

  const projectsRef = useRef()

  const navClickHandler = (event) => {
    setActivePage(event.target.value)
  }

  return (
    <div className="App" style={{ width: "100%" }}>
      <Profile setActivePage={setActivePage} activePage={activePage} />
      <div
        style={{
          height: "calc(100vh - 68px)",
          background: "transparent",
          scrollSnapAlign: "start",
          scrollSnapStop: "normal",
        }}
      ></div>
      <div className="main-container">
        <div className="nav-bar">
          {pages.map((page) => (
            <div key={page}>
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
        ) : (
          <ContactPage />
        )}
        <Footer />
      </div>
    </div>
  )
}

export default App

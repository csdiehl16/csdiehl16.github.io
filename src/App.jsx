import "./App.css"
import "./index.css"
import Projects from "./components/Projects"
import Profile from "./components/Profile"
import { useState, useRef } from "react"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"

const pages = ["About Me", "Projects"]
const projectTypes = [
  "Geospatial",
  "Dashboards",
  "Data journalism",
  "Web development",
]

function App() {
  const [activePage, setActivePage] = useState("Projects")
  const [filters, setFilters] = useState("all")

  const projectsRef = useRef()

  const navClickHandler = (event) => {
    setActivePage(event.target.value)
    if (event.target.value === "Projects") setFilters("all")
  }

  return (
    <div className="App" style={{ width: "100%" }}>
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
          </div>
        ))}
        {projectTypes.map((d) => (
          <button
            onClick={() => setFilters(d)}
            className={
              filters === d
                ? "nav-btn nav-btn-clicked"
                : "nav-btn project-button"
            }
            key={d}
          >
            {d}
          </button>
        ))}
      </div>
      <Profile setActivePage={setActivePage} activePage={activePage} />

      {activePage === "Projects" ? (
        <Projects filters={filters} ref={projectsRef} />
      ) : (
        <ContactPage />
      )}
      <Footer />
    </div>
  )
}

export default App

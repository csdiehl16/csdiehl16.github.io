import ProjectTile from "./ProjectTile";
import "./Projects.css";
import { useState, useRef } from "react";
import Modal from "./Modal";

const projectList = [
  {
    name: "WMATA Dashboard",
    link: "https://github.com/csdiehl/smart-card-data-dashboard#readme",
    imageLink: "/WMATA_web_app.png",
    languages: ["Javascript", "Python"],
    tag: ["Data Visualization"],
  },
  {
    name: "Spotify Reccomendation Engine",
    link: "",
    imageLink: "/spotify_app.png",
    languages: ["Javascript / React"],
    tag: ["Web Development"],
  },
  {
    name: "Protests Visualization",
    link: "https://observablehq.com/@csdiehl/protests-analysis",
    imageLink: "/protests.png",
    languages: ["Javascript / React"],
    tag: ["Data Visualization"],
  },
  {
    name: "Climbing Logbook",
    link: "http://csdiehl.pythonanywhere.com/",
    imageLink: "/climbing.png",
    languages: ["Javascript / React"],
    tag: ["Web Development"],
  },
  {
    name: "Transit System Dashboard",
    link: "https://cse512-21s.github.io/FP-Transit_System/",
    imageLink: "/orcaviz.png",
    languages: ["Javascript / React"],
    tag: ["Data Visualization"],
  },
  {
    name: "Type Cast",
    link: "https://csdiehl.github.io/type_scale/",
    imageLink: "/type_scale.png",
    languages: ["Javascript", "HTML / CSS"],
    tag: ["Web Development"],
  },
  {
    name: "Outdoor Access Score",
    link: "https://rpubs.com/csdiehl/outdoor-access",
    imageLink: "/outdoor_access.png",
    languages: ["Python", "R"],
    tag: ["Data Visualization"],
  },
  {
    name: "Transit Smart Card Clustering",
    link: "https://rpubs.com/csdiehl/transit-clusters",
    imageLink: "/clusters.png",
    languages: ["Python", "R"],
    tag: ["Data Visualization"],
  },
  {
    name: "Mobility in a Pandemic",
    link: "",
    imageLink: "/covid_mobility.jpg",
    languages: ["Python", "R"],
    tag: ["Data Visualization"],
  },
  {
    name: "Early Retirement Calculator",
    link: "https://csdiehl.github.io/early-retirement-calculator/",
    imageLink: "/fire_calculator.png",
    languages: ["Javascript / React", "HTML / CSS"],
    tag: ["Web Development"],
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTile, setActiveTile] = useState(projectList[0]);
  const [filters, setFilters] = useState({
    type: "all",
    language: "all",
  });

  const typeRef = useRef();
  const languageRef = useRef();

  const tileClicked = (name) => {
    setActiveTile(projectData.filter((o) => o.name === name)[0]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSelect = () => {
    setFilters({ ...filters, type: typeRef.current.value });
  };

  const handleLangSelect = () => {
    setFilters({ ...filters, language: languageRef.current.value });
  };

  const projectsTypeFiltered =
    filters.type === "all"
      ? projectList
      : projectList.filter((p) => p.tag.includes(filters.type));

  const projectData =
    filters.language === "all"
      ? projectsTypeFiltered
      : projectsTypeFiltered.filter((p) =>
          p.languages.includes(filters.language)
        );

  const tiles = projectData.map((p) => (
    <ProjectTile
      key={Math.random()}
      tag={p.tag}
      title={p.name}
      link={p.link}
      image={p.imageLink}
      languageTag={p.languages}
      tileClicked={tileClicked}
    />
  ));

  return (
    <div>
      <div className="project-header">
        <h2>Projects</h2>
        <div>
          <select name="type" ref={typeRef} onChange={handleSelect}>
            <option value="all">All Types</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Visualization">Data Visualization</option>
          </select>
          <select name="language" ref={languageRef} onChange={handleLangSelect}>
            <option value="all">All Languages</option>
            <option value="Javascript / React">Javascript / React</option>
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="HTML / CSS">HTML / CSS</option>
            <option value="R">R</option>
          </select>
        </div>
      </div>
      <div className="container">
        {showModal && (
          <Modal
            tileInfo={activeTile}
            closeHandler={closeModal}
            open={showModal}
          />
        )}
        <div className="tileContainer">{tiles}</div>
      </div>
    </div>
  );
};

export default Projects;

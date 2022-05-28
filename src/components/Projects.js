import ProjectTile from "./ProjectTile";
import "./Projects.css";
import { useState } from "react";
import Modal from "./Modal";

const projectList = [
  {
    name: "WMATA Dashboard",
    link: "https://github.com/csdiehl/smart-card-data-dashboard#readme",
    imageLink: "/WMATA_web_app.png",
    languages: ["Javascript", "Python"],
    tag: ["Data Visualization"],
    description:
      "Interactive dashboard to visualize smart card data for Washington D.C. Metropolitan Transit Authority",
    otherImages: [
      "/wmata_1.png",
      "/wmata_2.png",
      "/wmata_3.png",
      "/wmata_4.png",
    ],
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
    languages: ["Javascript", "HTML5 / CSS"],
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
    languages: ["Javascript / React", "HTML5 / CSS"],
    tag: ["Web Development"],
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTile, setActiveTile] = useState(projectList[0]);
  const [filters, setFilters] = useState({
    type: "All Types",
    language: "All Languages",
  });

  const tileClicked = (name) => {
    setActiveTile(projectData.filter((o) => o.name === name)[0]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSelect = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFilters({ ...filters, [name]: value });
  };

  const projectsTypeFiltered =
    filters.type === "All Types"
      ? projectList
      : projectList.filter((p) => p.tag.includes(filters.type));

  const projectData =
    filters.language === "All Languages"
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

  const languages = [
    "All Languages",
    "Javascript / React",
    "Javascript",
    "Python",
    "HTML5 / CSS",
    "R",
  ];

  const types = ["All Types", "Web Development", "Data Visualization"];

  return (
    <div>
      <div className="project-header">
        <h2>Projects</h2>
        <div>
          <div>
            {types.map((t) => (
              <button
                className={
                  filters.type === t
                    ? "select-button select-button-clicked"
                    : "select-button"
                }
                key={t}
                onClick={handleSelect}
                value={t}
                name="type"
              >
                {t}
              </button>
            ))}
          </div>
          <div>
            {languages.map((l) => (
              <button
                className={
                  filters.language === l
                    ? "select-button select-button-clicked"
                    : "select-button"
                }
                key={l}
                onClick={handleSelect}
                value={l}
                name="language"
              >
                {l}
              </button>
            ))}
          </div>
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

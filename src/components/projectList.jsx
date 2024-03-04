import ProjectTile from "./ProjectTile"
import classes from "./ProjectList.module.css"
import { useState, forwardRef } from "react"

const projectRawData = [
  {
    name: "Recharts Sunburst Chart",
    link: "https://github.com/recharts/recharts/pull/4037",
    imageLink: "/recharts_sunburst.png",
    languages: ["React.js", "Typescript", "D3.js"],
    tag: ["Dashboards", "Web development"],
    description:
      "A new chart type for Recharts, an open-source React data visualization library with more than 173k users. The sunburst is a visually appealing variant of the treemap.",
  },
  {
    name: "AP Extreme Heat Tracker",
    link: "https://interactives.ap.org/heat-tracker/",
    imageLink: "/heat_tracker.png",
    languages: ["React.js", "D3.js", "Typescript", "Mapbox GL JS", "Python"],
    tag: ["Geospatial", "Dashboards", "Data journalism"],
    description:
      "A real-time heat tracking app that pulls data every day from satellites and 1,000+ weather stations across the globe, analyzes it for deviations from normal temperatures, and displays it in an interactive, searchable map and custom line chart.",
  },
  {
    name: "AP Wildfire Tracker",
    link: "https://interactives.ap.org/ap-wildfire-tracker/?sort=acres",
    imageLink: "/fire-tracker-screenshot.png",
    languages: ["React.js", "Typescript", "Mapbox GL JS"],
    tag: ["Geospatial", "Dashboards", "Data journalism"],
    description:
      "An interactive dashboard that displays real-time fire incident information and surrounding demographics, updated every 15 minutes.",
    cloudinaryId: "fire_tracker_ul6unw",
  },
  {
    name: "Climate and Disease",
    link: "https://projects.apnews.com/features/2023/climate-change-disease-animals-warming-earth/index.html",
    imageLink: "/grist-disease.png",
    languages: ["React.js", "D3.js", "Python"],
    tag: ["Data Journalism", "Geospatial"],
    description:
      "A parallax scrolling experience. Data visualizations highlight the links between climate change and disease, including the migration of animal species and recent history of climate disasters.",
    cloudinaryId: "grist-disease_ygobl1",
    badge: "./iib_badge.png",
  },
  {
    name: "Maui Fires Timeline",
    link: "https://interactives.ap.org/hawaii-timeline/",
    imageLink: "/lahaina.png",
    languages: ["React.js", "Typescript", "Mapbox GL JS"],
    tag: ["Geospatial", "Data journalism"],
    description:
      "An interactive map that tells the story of the Lahania wildire using smooth animations.",
    cloudinaryId: "lahaina_fqon1l",
  },
  {
    name: "Ski resorts are embracing a new role: climate activist",
    link: "https://apnews.com/article/climate-change-activism-ski-industry-028d83e19543db5d7633ea83932bdde3",
    imageLink: "/skiing.png",
    languages: ["React.js", "D3.js"],
    tag: ["Data journalism", "Web development"],
    description:
      "A scrollytelling page that weaves together photo, video, maps and data visualization to explore the effects of climate change on skiing and snowpack.",
    cloudinaryId: "skiing_xpcioo",
  },
  {
    name: "Death and Regrowth on the Great Barrier Reef",
    link: "https://projects.apnews.com/features/2022/coral-reef-immersive/index.html",
    imageLink: "/GBR.png",
    languages: ["React.js", "Python"],
    tag: ["Geospatial", "Data journalism"],
    description:
      "An interactive map visualization of major coral bleaching events.",
    cloudinaryId: "GBR_yt22no",
  },
  {
    name: "Transit Segment Priority Finder",
    link: "https://ibi-group.github.io/mbta-transit-priority-finder/",
    imageLink: "/mbta_tool.PNG",
    languages: ["React.js", "Python"],
    tag: ["Geospatial", "Dashboards"],
    description:
      "Dashboard built for internal use at MBTA. Allows agency to filter and select stop-to-stop bus segments for transit priority measures such as bus-only lanes. Users can adjust the weights as needed to calculate a new weighted average score based on their priorities.",
  },
  {
    name: "Wildfire Risk Maps",
    link: "https://apnews.com/article/wildfires-forest-thinning-community-risk-biden-9d77309cb9e7520069b3c575d850aadc",
    imageLink: "/wildfire.png",
    languages: ["React.js", "D3.js"],
    tag: ["Data journalism", "Geospatial"],
    description:
      "A series of interactive maps that explore a Forest Service plan to mitigate wildfire throughout the U.S.",
    cloudinaryId: "fire_thinning_bzqrtp",
  },
  {
    name: "AP 2022 Climate Photography Showcase",
    link: "https://apnews.com/article/2022-climate-change-photos-3d0d1a338bf8995048bddae11ad17eb2",
    imageLink: "/climate.png",
    languages: ["React.js"],
    tag: ["Web development"],
    description:
      "A scrollytelling experience highlighting AP's best climate photography.",
    cloudinaryId: "climate_slcbb7",
  },

  {
    name: "WMATA Dashboard",
    link: "https://github.com/csdiehl/smart-card-data-dashboard#readme",
    imageLink: "/WMATA_web_app.png",
    languages: ["Javascript", "Python"],
    tag: ["Dashboards", "Geospatial"],
    description:
      "Interactive dashboard built for internal use at Washington D.C. Metropolitan Transit Authority. Visualizes smart card data.",
    otherImages: [
      "/wmata_1.png",
      "/wmata_2.png",
      "/wmata_3.png",
      "/wmata_4.png",
    ],
  },
  {
    name: "Spotify Reccomendation Engine",
    link: "https://csdiehl.github.io/spotify-reccomendation-engine/",
    imageLink: "/spotify_app.png",
    languages: ["React.js"],
    tag: ["Dashboards"],
    description:
      "Allows users to connect Spotify accounts and receive music reccomendations using the Spotify Web API.",
  },
  {
    name: "Protests Visualization",
    link: "https://observablehq.com/@csdiehl/protests-analysis",
    imageLink: "/protests.png",
    languages: ["React.js"],
    tag: ["Data journalism"],
    description:
      "Interactive, Javascript-based data visualization of recent protests in the United States",
  },
  {
    name: "Transit System Dashboard",
    link: "https://cse512-21s.github.io/FP-Transit_System/",
    imageLink: "/orcaviz.png",
    languages: ["React.js"],
    tag: ["Dashboards", "Geospatial"],
    description:
      "Dashboard for visualizing smart card data showing passenger journeys on Sound Transit in the Puget Sound region",
  },
  {
    name: "Type Cast",
    link: "https://csdiehl.github.io/type_scale/",
    imageLink: "/type_scale.png",
    languages: ["Javascript", "HTML5 / CSS"],
    tag: ["Web development"],
    description:
      "Javascript application that creates a type heirarchy for use in documents and web design",
  },
  {
    name: "Outdoor Access Score",
    link: "https://rpubs.com/csdiehl/outdoor-access",
    imageLink: "/outdoor_access.png",
    description:
      "A custom gravity model I built for a graduate school course that shows census tracts in King County by their ability to access outdoor activities.",
    languages: ["Python", "R"],
    tag: ["Geospatial"],
  },
  {
    name: "Transit Smart Card Clustering",
    link: "https://rpubs.com/csdiehl/transit-clusters",
    imageLink: "/clusters.png",
    description:
      "A machine learning model that clusters transit stations in King Count based on ridership demographics.",
    languages: ["Python", "R"],
    tag: ["Geospatial"],
  },
  {
    name: "Early Retirement Calculator",
    link: "https://csdiehl.github.io/early-retirement-calculator/",
    imageLink: "/fire_calculator.png",
    languages: ["React.js", "HTML5 / CSS"],
    tag: ["Web development"],
  },
  {
    name: "Mobility in a Pandemic",
    link: "",
    imageLink: "/covid_mobility.jpg",
    description:
      "Data visualization of the change in Google searches for common destinations before and after the pandemic.",
    languages: ["Python", "R"],
    tag: [],
  },

  {
    name: "Visualizing Police Use of Force",
    link: "",
    imageLink: "/police_force.jpg",
    description: "",
    languages: ["Python", "R"],
    tag: [],
  },
]

const ProjectList = forwardRef((props, ref) => {
  const [viewMore, setViewMore] = useState(false)

  const projectsFiltered =
    props.filters === "All"
      ? projectRawData
      : projectRawData.filter((p) => p.tag.includes(props.filters))

  const projectData = viewMore ? projectsFiltered : projectsFiltered.slice(0, 5)

  const tiles = projectData.map((p) => (
    <ProjectTile
      key={p.link + p.name}
      tag={p.tag}
      title={p.name}
      link={p.link}
      image={p.imageLink}
      languageTag={p.languages}
      cloudinaryId={p?.cloudinaryId}
      badge={p?.badge}
      description={p.description}
    />
  ))

  return (
    <div className="fade-in" ref={ref}>
      <div className={classes["tileContainer"]}>{tiles}</div>

      <button
        onClick={() => setViewMore((p) => !p)}
        className={classes["see-more-button"]}
      >
        <span>{viewMore ? "Hide" : "See more"} projects</span>
        <img
          className={classes[viewMore ? "arrow-clicked" : ""]}
          alt="arrow"
          height="24px"
          width="24px"
          src="/down-arrow.svg"
        ></img>
      </button>
    </div>
  )
})

export default ProjectList

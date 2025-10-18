export const projectData = [
  {
    name: "Observable canvases",
    client: "Observable",
    sourceLink: "https://observablehq.com",
    link: "/project-canvas",
    imageLink: "/canvas.webp",
    languages: ["React.js", "Typescript", "D3.js"],
    tag: ["React.js", "D3.js"],
    description:
      "Contributed to a next-gen data exploration and BI tool on a collaborative infinite canvas",
    featured: true,
  },
  {
    name: "Recharts Sunburst Chart",
    client: "Recharts Group",
    sourceLink:
      "https://master--63da8268a0da9970db6992aa.chromatic.com/?path=/story/api-chart-sunburstchart--sunburst",
    link: "/recharts",
    codeLink: "https://github.com/recharts/recharts/pull/4037",
    imageLink: "/recharts_sunburst.webp",
    languages: ["React.js", "Typescript", "D3.js"],
    tag: ["Dashboards", "Web development"],
    description:
      "A new chart type for Recharts, an open-source React data visualization library with more than 173k users. The sunburst is a visually appealing variant of the treemap.",
    featured: true,
  },
  {
    name: "School board documents AI-driven search",
    client: "AP News",
    sourceLink: "https://d29ogm19i6xujm.cloudfront.net/",
    link: "/school-board-docs",
    imageLink: "/school-board/main.webp",
    languages: ["Next.js", "AWS", "PostgreSQL", "Vercel AI SDK"],
    tag: ["Web development"],
    description:
      "A web app using a PostgreSQL database, SST, and AWS to create a search engine for the AP education reporting team to find current issues in hundreds of thousands of documents",
    featured: true,
  },

  {
    name: "Carbon footprint explorer",
    client: "AP News",
    sourceLink: "https://apnews.com/projects/carbon-footprint-calculator/",
    link: "/carbon-calculator",
    imageLink: "/income_calculator.webp",
    languages: ["React.js", "Typescript", "D3.js"],
    tag: ["Dashboards", "Data journalism"],
    description:
      "An interactive visualization tool for exploring how your income and consumer spending decisions affect your carbon footprint.",
    featured: true,
  },

  {
    name: "Migration globe",
    client: "Observable",
    link: "https://observablehq.com/d/cd0b1104799e2603",
    imageLink: "/globe.webp",
    languages: ["D3.js"],
    tag: ["Data journalism"],
    description: "Animated globe showing migration patterns",
    featured: true,
  },

  {
    name: "AI Data Assistant",
    client: "Personal Project",
    link: "https://ai-data-assistant.vercel.app/login",
    codeLink: "https://github.com/csdiehl/ai-data-assistant",
    imageLink: "/bitcoin_line.webp",
    languages: ["React.js", "Typescript", "D3.js"],
    tag: ["Dashboards", "Web development"],
    description:
      "Explore your data using conversational AI. A full-stack Next.js web app, using Vercel's AI SDK and a firebase backend, that allows users to chat with a database, save and load data snapshots, and use generative UI to build charts.",
    featured: true,
  },

  {
    name: "AP Wildfire Tracker",
    client: "AP News",
    link: "https://interactives.ap.org/ap-wildfire-tracker/?sort=acres",
    imageLink: "/fire-tracker-screenshot.webp",
    languages: ["React.js", "Typescript", "Mapbox GL JS"],
    tag: ["Geospatial", "Dashboards", "Data journalism"],
    description:
      "An interactive dashboard that displays real-time fire incident information and surrounding demographics, updated every 15 minutes.",
    cloudinaryId: "fire_tracker_ul6unw",
    featured: true,
  },

  {
    name: "Olympics Records Progression",
    client: "AP News",
    link: "https://apnews.com/projects/olympic-athletes-progress/",
    imageLink: "/olympic_records.webp",
    languages: ["React.js", "Typescript", "D3.js"],
    tag: ["Data journalism", "Web development"],
    description:
      "Interactive charts that explore the progress of Olympic records over time.",
  },

  {
    name: "Draggable Migration Globe",
    client: "AP News",
    link: "https://apnews.com/projects/china-migration-thailand-mexico-japan-map/",
    imageLink: "/migration_globe.webp",
    description:
      "A 3D draggable globe showing recent changes in Chinese migration across the world.",
    languages: ["D3.js", "React"],
    tag: ["Data journalism"],
  },

  {
    name: "Paris Olympics Interactive Graphics",
    client: "AP News, Time, FOX",
    link: "https://www.ap.org/content/topics/sports/interactive-graphics/",
    imageLink: "/hometown_heroes.webp",
    languages: ["React.js"],
    tag: ["Data Journalism", "Geospatial"],
    description:
      "Olympic graphics licensed to nearly 100 publications, including Time and FOX, to visualize more than 650 athletes, track medal counts in real time, and explore olympic venues. I produced the hometown heroes and venues maps and oversaw production of the other graphics.",
  },

  {
    name: "Climate and Disease",
    client: "AP News, Grist",
    link: "https://projects.apnews.com/features/2023/climate-change-disease-animals-warming-earth/index.html",
    imageLink: "/grist-disease.webp",
    languages: ["React.js", "D3.js", "Python"],
    tag: ["Data Journalism", "Geospatial"],
    description:
      "A parallax scrolling experience. Data visualizations highlight the links between climate change and disease, including the migration of animal species and recent history of climate disasters.",
    cloudinaryId: "grist-disease_ygobl1",
    badge: "./iib_badge.webp",
  },

  {
    name: "Ski resorts are embracing a new role: climate activist",
    client: "AP News",
    link: "https://apnews.com/article/climate-change-activism-ski-industry-028d83e19543db5d7633ea83932bdde3",
    imageLink: "/skiing.webp",
    languages: ["React.js", "D3.js"],
    tag: ["Data journalism", "Web development"],
    description:
      "A scrollytelling page that weaves together photo, video, maps and data visualization to explore the effects of climate change on skiing and snowpack.",
    cloudinaryId: "skiing_xpcioo",
  },

  {
    name: "Death and Regrowth on the Great Barrier Reef",
    client: "AP News",
    link: "https://projects.apnews.com/features/2022/coral-reef-immersive/index.html",
    imageLink: "/GBR.webp",
    languages: ["React.js", "Python"],
    tag: ["Geospatial", "Data journalism"],
    description:
      "An interactive map visualization of major coral bleaching events.",
    cloudinaryId: "GBR_yt22no",
  },

  {
    name: "CEO Pay Visualization",
    client: "AP News",
    link: "https://apnews.com/article/wildfires-forest-thinning-community-risk-biden-9d77309cb9e7520069b3c575d850aadc",
    imageLink: "/ceo.webp",
    languages: ["React.js", "D3.js"],
    tag: ["Data journalism"],
    description:
      "An interactive scatterplot and diverging bar chart to visualize results of an AP survey on CEO performance and compensation.",
    cloudinaryId: "fire_thinning_bzqrtp",
  },

  {
    name: "Maui Fires Timeline",
    client: "AP News",
    link: "https://interactives.ap.org/hawaii-timeline/",
    imageLink: "/lahaina.webp",
    languages: ["React.js", "Typescript", "Mapbox GL JS"],
    tag: ["Geospatial", "Data journalism"],
    description:
      "An interactive map that tells the story of the Lahania wildire using smooth animations.",
    cloudinaryId: "lahaina_fqon1l",
  },

  {
    name: "AP Extreme Heat Tracker",
    client: "AP News",
    link: "https://interactives.ap.org/heat-tracker/",
    codeLink: "https://github.com/csdiehl/ap-heat-tracker",
    imageLink: "/heat_tracker.webp",
    languages: ["React.js", "D3.js", "Typescript", "Mapbox GL JS", "Python"],
    tag: ["Geospatial", "Dashboards", "Data journalism"],
    description:
      "A real-time heat tracking app that pulls data every day from satellites and 1,000+ weather stations across the globe, analyzes it for deviations from normal temperatures, and displays it in an interactive, searchable map and custom line chart.",
  },

  {
    name: "Wildfire Risk Maps",
    client: "AP News",
    link: "https://apnews.com/article/wildfires-forest-thinning-community-risk-biden-9d77309cb9e7520069b3c575d850aadc",
    imageLink: "/wildfire.webp",
    languages: ["React.js", "D3.js"],
    tag: ["Data journalism", "Geospatial"],
    description:
      "A series of interactive maps that explore a Forest Service plan to mitigate wildfire throughout the U.S.",
    cloudinaryId: "fire_thinning_bzqrtp",
  },

  {
    name: "Transit Segment Priority Finder",
    client: "MBTA Transit Agency",
    link: "https://ibi-group.github.io/mbta-transit-priority-finder/",
    imageLink: "/mbta_tool.webp",
    languages: ["React.js", "Python"],
    tag: ["Geospatial", "Dashboards"],
    description:
      "Dashboard built for internal use at MBTA. Allows agency to filter and select stop-to-stop bus segments for transit priority measures such as bus-only lanes. Users can adjust the weights as needed to calculate a new weighted average score based on their priorities.",
  },

  {
    name: "What would your Olympic sport be?",
    client: "AP News",
    link: "https://apnews.com/what-would-your-best-olympic-sport-be-00000190a37adebeaff0fbffeb6e0000",
    imageLink: "/olympic_sport_finder.webp",
    languages: ["React.js", "D3.js"],
    tag: ["Data journalism"],
    description:
      "Places you in your best olympic sport using your height, weight and more than 100 years of Olympic data.",
  },

  {
    name: "An Underwater Paradise Under Threat",
    client: "AP News",
    link: "https://apnews.com/projects/mexico-tren-maya-climate-yucatan/",
    imageLink: "/cenotes.webp",
    languages: ["React.js", "D3.js"],
    tag: ["Web development"],
    description:
      "I developed this webpage and the accompanying maps to showcase AP reporters' work documenting destruction of cenotes in the Yucatan Peninsula.",
  },

  {
    name: "WMATA Dashboard",
    client: "WMATA Transit Agency",
    link: "https://github.com/csdiehl/smart-card-data-dashboard#readme",
    imageLink: "/WMATA_web_app.webp",
    languages: ["Javascript", "Python"],
    tag: ["Dashboards", "Geospatial"],
    description:
      "Interactive dashboard built for internal use at Washington D.C. Metropolitan Transit Authority. Visualizes smart card data.",
  },
  {
    name: "Visualizing Police Use of Force",
    client: "Class Project",
    link: "/police-force",
    imageSmall: "/police_force.webp",
    imageLink: "/large/police-use-of-force-large.webp",
    description: "",
    languages: ["Python", "R", "Adobe Illustrator"],
    tag: [],
  },

  {
    name: "Mobility in a Pandemic",
    client: "Class Project",
    link: "/pandemic-mobility",
    imageSmall: "/covid-mobility.webp",
    imageLink: "/large/pandemic-large.webp",
    description:
      "Data visualization of the change in Google searches for common destinations before and after the pandemic.",
    languages: ["Python", "R", "Adobe Illustrator"],
    tag: [],
  },

  {
    name: "Spotify Reccomendation Engine",
    client: "Personal Project",
    link: "https://csdiehl.github.io/spotify-reccomendation-engine/",
    imageLink: "/spotify_app.webp",
    languages: ["React.js"],
    tag: ["Dashboards"],
    description:
      "Allows users to connect Spotify accounts and receive music reccomendations using the Spotify Web API.",
  },
  {
    name: "Protests Visualization",
    client: "Personal Project",
    link: "https://observablehq.com/@csdiehl/protests-analysis",
    imageLink: "/protests.webp",
    languages: ["React.js"],
    tag: ["Data journalism"],
    description:
      "Interactive, Javascript-based data visualization of recent protests in the United States",
  },
  {
    name: "Transit System Dashboard",
    client: "WMATA Transit Agency",
    link: "https://cse512-21s.github.io/FP-Transit_System/",
    imageLink: "/orcaviz.webp",
    languages: ["React.js"],
    tag: ["Dashboards", "Geospatial"],
    description:
      "Dashboard for visualizing smart card data showing passenger journeys on Sound Transit in the Puget Sound region",
  },
  {
    name: "Outdoor Access Score",
    client: "Class Project",
    link: "https://rpubs.com/csdiehl/outdoor-access",
    imageLink: "/outdoor_access.webp",
    description:
      "A custom gravity model I built for a graduate school course that shows census tracts in King County by their ability to access outdoor activities.",
    languages: ["Python", "R"],
    tag: ["Geospatial"],
  },

  {
    name: "Transit Smart Card Clustering",
    client: "Class Project",
    link: "https://rpubs.com/csdiehl/transit-clusters",
    imageLink: "/clusters.webp",
    description:
      "A machine learning model that clusters transit stations in King Count based on ridership demographics.",
    languages: ["Python", "R"],
    tag: ["Geospatial"],
  },
];

import{r as d}from"./index.LFf77hJu.js";import{c as g,a as x,b as m}from"./index.35036246.qXoH3LIF.js";var T={exports:{}},y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=d,C=Symbol.for("react.element"),M=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,z=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var i,o={},c=null,r=null;n!==void 0&&(c=""+n),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(r=t.ref);for(i in t)E.call(t,i)&&!W.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:C,type:e,key:c,ref:r,props:o,_owner:z.current}}y.Fragment=M;y.jsx=I;y.jsxs=I;T.exports=y;var s=T.exports,_=new Map,v=new WeakMap,L=0,O=void 0;function V(e){return e?(v.has(e)||(L+=1,v.set(e,L.toString())),v.get(e)):"0"}function $(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?V(e.root):e[t]}`).toString()}function F(e){const t=$(e);let n=_.get(t);if(!n){const i=new Map;let o;const c=new IntersectionObserver(r=>{r.forEach(a=>{var l;const f=a.isIntersecting&&o.some(h=>a.intersectionRatio>=h);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=f),(l=i.get(a.target))==null||l.forEach(h=>{h(f,a)})})},e);o=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:c,elements:i},_.set(t,n)}return n}function J(e,t,n={},i=O){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:o,observer:c,elements:r}=F(n),a=r.get(e)||[];return r.has(e)||r.set(e,a),a.push(t),c.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(r.delete(e),c.unobserve(e)),r.size===0&&(c.disconnect(),_.delete(o))}}function B({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:o,triggerOnce:c,skip:r,initialInView:a,fallbackInView:l,onChange:f}={}){var h;const[b,G]=d.useState(null),j=d.useRef(),[k,S]=d.useState({inView:!!a,entry:void 0});j.current=f,d.useEffect(()=>{if(r||!b)return;let p;return p=J(b,(A,R)=>{S({inView:A,entry:R}),j.current&&j.current(A,R),R.isIntersecting&&c&&p&&(p(),p=void 0)},{root:o,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,b,o,i,c,r,n,l,t]);const w=(h=k.entry)==null?void 0:h.target,D=d.useRef();!b&&w&&!c&&!r&&D.current!==w&&(D.current=w,S({inView:!!a,entry:void 0}));const u=[G,k.inView,k.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}const U=e=>{const{ref:t,inView:n}=B({threshold:.6});return s.jsxs("div",{ref:t,className:n?g.tile:`${g.tile} ${g["tile-hidden"]}`,children:[s.jsxs("div",{children:[s.jsx("h2",{className:g["project-title"],children:e.title}),s.jsx("p",{className:g.description,children:e.description}),s.jsx("p",{className:g["language-tag"],children:e.languageTag.join(" / ")}),s.jsxs("a",{className:g["project-link"],href:e.link,children:[s.jsx("span",{children:"View Project"}),s.jsx("img",{alt:"right-arrow",src:"/arrow-right.svg"})]})]}),s.jsx("a",{href:e.link,children:s.jsx("img",{className:g["tile-img"],src:e?.image,alt:e.title})}),e.badge&&s.jsx("img",{className:g.badge,alt:"information is beautiful awards badge",src:e.badge})]})},P=[{name:"Recharts Sunburst Chart",link:"https://github.com/recharts/recharts/pull/4037",imageLink:"/recharts_sunburst.png",languages:["React.js","Typescript","D3.js"],tag:["Dashboards","Web development"],description:"A new chart type for Recharts, an open-source React data visualization library with more than 173k users. The sunburst is a visually appealing variant of the treemap."},{name:"AP Extreme Heat Tracker",link:"https://interactives.ap.org/heat-tracker/",imageLink:"/heat_tracker.png",languages:["React.js","D3.js","Typescript","Mapbox GL JS","Python"],tag:["Geospatial","Dashboards","Data journalism"],description:"A real-time heat tracking app that pulls data every day from satellites and 1,000+ weather stations across the globe, analyzes it for deviations from normal temperatures, and displays it in an interactive, searchable map and custom line chart."},{name:"AP Wildfire Tracker",link:"https://interactives.ap.org/ap-wildfire-tracker/?sort=acres",imageLink:"/fire-tracker-screenshot.png",languages:["React.js","Typescript","Mapbox GL JS"],tag:["Geospatial","Dashboards","Data journalism"],description:"An interactive dashboard that displays real-time fire incident information and surrounding demographics, updated every 15 minutes.",cloudinaryId:"fire_tracker_ul6unw"},{name:"Climate and Disease",link:"https://projects.apnews.com/features/2023/climate-change-disease-animals-warming-earth/index.html",imageLink:"/grist-disease.png",languages:["React.js","D3.js","Python"],tag:["Data Journalism","Geospatial"],description:"A parallax scrolling experience. Data visualizations highlight the links between climate change and disease, including the migration of animal species and recent history of climate disasters.",cloudinaryId:"grist-disease_ygobl1",badge:"./iib_badge.png"},{name:"Maui Fires Timeline",link:"https://interactives.ap.org/hawaii-timeline/",imageLink:"/lahaina.png",languages:["React.js","Typescript","Mapbox GL JS"],tag:["Geospatial","Data journalism"],description:"An interactive map that tells the story of the Lahania wildire using smooth animations.",cloudinaryId:"lahaina_fqon1l"},{name:"Ski resorts are embracing a new role: climate activist",link:"https://apnews.com/article/climate-change-activism-ski-industry-028d83e19543db5d7633ea83932bdde3",imageLink:"/skiing.png",languages:["React.js","D3.js"],tag:["Data journalism","Web development"],description:"A scrollytelling page that weaves together photo, video, maps and data visualization to explore the effects of climate change on skiing and snowpack.",cloudinaryId:"skiing_xpcioo"},{name:"Death and Regrowth on the Great Barrier Reef",link:"https://projects.apnews.com/features/2022/coral-reef-immersive/index.html",imageLink:"/GBR.png",languages:["React.js","Python"],tag:["Geospatial","Data journalism"],description:"An interactive map visualization of major coral bleaching events.",cloudinaryId:"GBR_yt22no"},{name:"Transit Segment Priority Finder",link:"https://ibi-group.github.io/mbta-transit-priority-finder/",imageLink:"/mbta_tool.PNG",languages:["React.js","Python"],tag:["Geospatial","Dashboards"],description:"Dashboard built for internal use at MBTA. Allows agency to filter and select stop-to-stop bus segments for transit priority measures such as bus-only lanes. Users can adjust the weights as needed to calculate a new weighted average score based on their priorities."},{name:"Wildfire Risk Maps",link:"https://apnews.com/article/wildfires-forest-thinning-community-risk-biden-9d77309cb9e7520069b3c575d850aadc",imageLink:"/wildfire.png",languages:["React.js","D3.js"],tag:["Data journalism","Geospatial"],description:"A series of interactive maps that explore a Forest Service plan to mitigate wildfire throughout the U.S.",cloudinaryId:"fire_thinning_bzqrtp"},{name:"AP 2022 Climate Photography Showcase",link:"https://apnews.com/article/2022-climate-change-photos-3d0d1a338bf8995048bddae11ad17eb2",imageLink:"/climate.png",languages:["React.js"],tag:["Web development"],description:"A scrollytelling experience highlighting AP's best climate photography.",cloudinaryId:"climate_slcbb7"},{name:"WMATA Dashboard",link:"https://github.com/csdiehl/smart-card-data-dashboard#readme",imageLink:"/WMATA_web_app.png",languages:["Javascript","Python"],tag:["Dashboards","Geospatial"],description:"Interactive dashboard built for internal use at Washington D.C. Metropolitan Transit Authority. Visualizes smart card data."},{name:"Spotify Reccomendation Engine",link:"https://csdiehl.github.io/spotify-reccomendation-engine/",imageLink:"/spotify_app.png",languages:["React.js"],tag:["Dashboards"],description:"Allows users to connect Spotify accounts and receive music reccomendations using the Spotify Web API."},{name:"Protests Visualization",link:"https://observablehq.com/@csdiehl/protests-analysis",imageLink:"/protests.png",languages:["React.js"],tag:["Data journalism"],description:"Interactive, Javascript-based data visualization of recent protests in the United States"},{name:"Transit System Dashboard",link:"https://cse512-21s.github.io/FP-Transit_System/",imageLink:"/orcaviz.png",languages:["React.js"],tag:["Dashboards","Geospatial"],description:"Dashboard for visualizing smart card data showing passenger journeys on Sound Transit in the Puget Sound region"},{name:"Type Cast",link:"https://csdiehl.github.io/type_scale/",imageLink:"/type_scale.png",languages:["Javascript","HTML5 / CSS"],tag:["Web development"],description:"Javascript application that creates a type heirarchy for use in documents and web design"},{name:"Outdoor Access Score",link:"https://rpubs.com/csdiehl/outdoor-access",imageLink:"/outdoor_access.png",description:"A custom gravity model I built for a graduate school course that shows census tracts in King County by their ability to access outdoor activities.",languages:["Python","R"],tag:["Geospatial"]},{name:"Transit Smart Card Clustering",link:"https://rpubs.com/csdiehl/transit-clusters",imageLink:"/clusters.png",description:"A machine learning model that clusters transit stations in King Count based on ridership demographics.",languages:["Python","R"],tag:["Geospatial"]},{name:"Early Retirement Calculator",link:"https://csdiehl.github.io/early-retirement-calculator/",imageLink:"/fire_calculator.png",languages:["React.js","HTML5 / CSS"],tag:["Web development"]},{name:"Mobility in a Pandemic",link:"",imageLink:"/covid_mobility.jpg",description:"Data visualization of the change in Google searches for common destinations before and after the pandemic.",languages:["Python","R"],tag:[]},{name:"Visualizing Police Use of Force",link:"",imageLink:"/police_force.jpg",description:"",languages:["Python","R"],tag:[]}],q=d.forwardRef((e,t)=>{const[n,i]=d.useState(!1),o=e.filters==="All"?P:P.filter(a=>a.tag.includes(e.filters)),r=(n?o:o.slice(0,5)).map(a=>s.jsx(U,{tag:a.tag,title:a.name,link:a.link,image:a.imageLink,languageTag:a.languages,cloudinaryId:a?.cloudinaryId,badge:a?.badge,description:a.description},a.link+a.name));return s.jsxs("div",{className:"fade-in",ref:t,children:[s.jsx("div",{className:x.tileContainer,children:r}),s.jsxs("button",{onClick:()=>i(a=>!a),className:x["see-more-button"],children:[s.jsxs("span",{children:[n?"Hide":"See more"," projects"]}),s.jsx("img",{className:x[n?"arrow-clicked":""],alt:"arrow",height:"24px",width:"24px",src:"/down-arrow.svg"})]})]})}),H=["All","Geospatial","Dashboards","Data journalism","Web development"];function Q(){const[e,t]=d.useState("All"),n=d.useRef();return s.jsxs("div",{className:m.App,style:{width:"100%"},children:[s.jsx("div",{className:m["nav-bar"],children:H.map(i=>s.jsx("button",{onClick:()=>t(i),className:`${m["nav-btn"]} ${m[e===i?"nav-btn-clicked":"project-button"]}`,children:i},i))}),s.jsx("div",{className:m["nav-line"],children:s.jsx("div",{className:m["nav-highlight"]})}),s.jsx(q,{filters:e,ref:n})]})}export{Q as default};

import { ZoomTransform } from "d3-zoom"
import { Card } from "./index"

export const ProjectCard = ({
  card,
  canvasTransform,
}: {
  card: Card
  canvasTransform: ZoomTransform
}) => {
  return (
    <a href={card.link} target="_blank" rel="noreferrer">
      <div
        className="card"
        style={{
          position: "absolute",
          fontWeight: card.featured ? "bold" : "normal",
          top: `${card.coordinates.y * canvasTransform.k}px`,
          left: `${card.coordinates.x * canvasTransform.k}px`,
          transformOrigin: "top left",

          // zoom to canvas zoom
          transform: `scale(${canvasTransform.k})`,
        }}
      >
        <p className="project-title">{card.text}</p>
        <img className="project-image" src={card.imageLink}></img>
        <div className="project-infobox">
          <p>{card.languages.join(" | ")}</p>
          <p>{card.description}</p>
          <img height={24} width={24} src="/link-solid.svg"></img>
        </div>
      </div>
    </a>
  )
}

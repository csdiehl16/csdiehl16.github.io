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
          top: `${card.coordinates.y * canvasTransform.k}px`,
          left: `${card.coordinates.x * canvasTransform.k}px`,
          transformOrigin: "top left",

          // zoom to canvas zoom
          transform: `scale(${canvasTransform.k})`,
        }}
      >
        <img className="project-image" src={card.imageLink}></img>
        <p className="project-title">{card.text}</p>
      </div>
    </a>
  )
}

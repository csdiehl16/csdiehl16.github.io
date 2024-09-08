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
      onClick={() => alert("clicked!")}
    >
      <img className="project-image" src={"./sample_image.jpg"}></img>
      <p className="project-title">{card.text}</p>
    </div>
  )
}

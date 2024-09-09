import { ZoomTransform } from "d3-zoom"
import { Card } from "./index"
import { select } from "d3-selection"
import "d3-transition"
import { useState } from "react"
const duration = 700

const icons = ["sun", "sparkles", "fire", "glass", "shoe"]

const FeaturedMenu = ({
  projects,
  transform,
  setTransform,
}: {
  transform: ZoomTransform
  setTransform: (transform: ZoomTransform) => void
  projects: Card[]
}) => {
  const [hovered, setHovered] = useState(null)

  function zoomToProject(project: Card) {
    const scale = 1
    const { x: targetX, y: targetY } = project.coordinates

    const x = window.innerWidth / 2 - (targetX + 150) * scale
    const y = window.innerHeight / 2 - (targetY + 300) * scale
    const newTransform = new ZoomTransform(scale, x - 150, y + 150)

    const canvasDiv = select(".canvas") // assuming you are using an SVG, adjust the selector accordingly
    // Get the current transform from the canvas (if exists, or set as identity)

    canvasDiv.style("transition", `transform ${duration}ms ease-in`)

    setTransform(newTransform)

    // Remove the transition after the animation is complete
    setTimeout(() => {
      canvasDiv.style("transition", "transform 0ms linear")
    }, duration) // Match this with the transition duration (500ms in this case)
  }
  return (
    <div className="featured-projects">
      <p className="featured-header">Featured Projects</p>
      {projects.map((proj, i) => {
        return (
          <div style={{ position: "relative" }}>
            <button
              onMouseOver={() => setHovered(proj.id)}
              onMouseOut={() => setHovered(null)}
              key={proj.id}
              onClick={() => zoomToProject(proj)}
              className="featured"
            >
              <img
                height={24}
                width={24}
                src={`/featured-icons/${icons[i]}.svg`}
              ></img>
            </button>
            <p
              className="featured-project-label"
              style={{
                opacity: hovered === proj.id ? 1 : 0,
                transition: "opacity 200ms ease-in",
              }}
            >
              {proj.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default FeaturedMenu

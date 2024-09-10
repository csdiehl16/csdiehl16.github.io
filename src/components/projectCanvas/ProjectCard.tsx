import { ZoomTransform } from "d3-zoom"
import { Card } from "./index"
import React from "react"

export const ProjectCard = ({
  card,
  canvasTransform,
  imageOnLoad,
}: {
  card: Card
  canvasTransform: ZoomTransform
  imageOnLoad: (count: number) => void
}) => {
  console.log(canvasTransform.k)
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
        <p
          style={{
            fontSize:
              canvasTransform.k >= 0.6
                ? `${16 / canvasTransform.k}px`
                : ".875rem",
          }}
          className="project-title"
        >
          {card.text}
        </p>
        <img
          //@ts-ignore
          onLoad={() => imageOnLoad((p) => p + 1)}
          className="project-image"
          src={card.imageLink}
        ></img>
        <div className="project-infobox">
          <p>{card.description}</p>

          <img height={24} width={24} src="/link-solid.svg"></img>
          <p
            style={{
              color: "lightgrey",
              fontSize: ".875rem",
            }}
          >
            {card.languages.join(" | ")}
          </p>
        </div>
      </div>
    </a>
  )
}

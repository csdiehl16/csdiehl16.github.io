import { UniqueIdentifier, Over, ClientRect } from "@dnd-kit/core"
import { Coordinates, Translate } from "@dnd-kit/core/dist/types"
import { useState } from "react"
import { Canvas } from "./Canvas"
import { projectData } from "./projectData"
import "./canvas.css"
import { ZoomTransform, zoomIdentity } from "d3-zoom"

export interface Card {
  id: UniqueIdentifier
  coordinates: Coordinates
  text: string
  imageLink: string
  link: string
}

const cardData = [
  { title: "Project 1" },
  { title: "Project 2" },
  { title: "Project 3" },
  { title: "Project 4" },
  { title: "Project 5" },
  { title: "Project 6" },
  { title: "Project 7" },
  { title: "Project 8" },
  { title: "Project 9" },
]

const cardWidth = 450
const cardHeight = 300
const cardPadding = 48
const cardsInRow = 3

function createCards(data, start = { x: 0, y: 0 }) {
  const startPosition = [
    start.x - 1.5 * (cardWidth + cardPadding),
    start.y - 1.5 * (cardHeight + cardPadding),
  ]
  return data.map((d, i) => {
    const { name, ...restProps } = d
    const rowNumber = Math.floor(i / cardsInRow)
    const positionInRow = i % cardsInRow
    return {
      id: name,
      text: name,
      ...restProps,
      coordinates: {
        x: startPosition[0] + positionInRow * (cardWidth + cardPadding),
        y: startPosition[1] + rowNumber * (cardHeight + cardPadding),
      },
    }
  })
}

export default function ProjectCanvas() {
  const [transform, setTransform] = useState(zoomIdentity)
  const [cards, setCards] = useState<Card[]>(
    createCards(projectData, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })
  )
  return (
    <div className="App">
      <Canvas
        transform={transform}
        setTransform={setTransform}
        cards={cards}
        setCards={setCards}
      />
    </div>
  )
}

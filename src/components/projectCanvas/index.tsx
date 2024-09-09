import { UniqueIdentifier } from "@dnd-kit/core"
import { Coordinates } from "@dnd-kit/core/dist/types"
import { zoomIdentity } from "d3-zoom"
import { useState } from "react"
import { Canvas } from "./Canvas"
import "./canvas.css"
import { projectData } from "./projectData"
import FeaturedMenu from "./FeaturedMenu"

export interface Card {
  id: UniqueIdentifier
  coordinates: Coordinates
  text: string
  imageLink: string
  link: string
}
export interface Post {
  id: number
  title: string
  description: string
  coordinates: { x: number; y: number }
  link?: string
}

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

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Building an AI-powered data explorer",
      description: "",
      coordinates: { x: -480, y: 350 },
      link: "/blog/post-3/",
    },
    {
      id: 2,
      title: "Observations on the new Observable 2.0 Framework",
      description: "",
      coordinates: { x: 1400, y: 200 },
      link: "/blog/post-2/",
    },
    {
      id: 3,
      title:
        "Mysterious missing weather stations and other lessons from tracking global heat",
      description: "",
      coordinates: { x: -500, y: 600 },
      link: "/blog/post-1/",
    },
    {
      id: 4,
      title: "Presentations",
      description: `"Tracking Wildfires for the Associated Press" | Seattle JS meetup, October 2023
"Data visualization for the news" University of Washington School of Journalism, February 2024 `,
      coordinates: { x: 1400, y: 600 },
    },
  ])
  const [dragged, setDragged] = useState(false)
  return (
    <div className="App">
      <FeaturedMenu />
      <Canvas
        setDragged={setDragged}
        transform={transform}
        setTransform={setTransform}
        cards={cards}
        setCards={setCards}
        posts={posts}
        setPosts={setPosts}
      />
      {!dragged && (
        <div className="intro-message">← Click and drag to explore →</div>
      )}
    </div>
  )
}

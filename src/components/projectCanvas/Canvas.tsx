import { DndContext, useDroppable } from "@dnd-kit/core"
import { DragEndEvent } from "@dnd-kit/core/dist/types"
import { Card, Post } from "./index"
import { ProjectCard } from "./ProjectCard"
import { ZoomTransform, zoom } from "d3-zoom"
import { useRef, useCallback, useMemo, useLayoutEffect } from "react"
import { select } from "d3-selection"
import { Draggable } from "./Draggable"

interface CanvasProps {
  cards: Card[]
  setCards: (cards: Card[]) => void
  transform: ZoomTransform
  setTransform: (transform: ZoomTransform) => void
  posts: Post[]
  setPosts: (posts: Post[]) => void
  setDragged: (dragged: boolean) => void
}

export const Canvas = ({
  cards,
  setCards,
  transform,
  setTransform,
  posts,
  setPosts,
  setDragged,
}: CanvasProps) => {
  const { setNodeRef } = useDroppable({
    id: "canvas",
  })
  const canvasRef = useRef<HTMLDivElement | null>(null)

  const updateAndForwardRef = (div: HTMLDivElement) => {
    canvasRef.current = div
    setNodeRef(div)
  }

  const updateDraggedCardPosition = ({ delta, active }: DragEndEvent) => {
    if (!delta.x && !delta.y) return

    setPosts(
      posts.map((card) => {
        if (card.id === active.id) {
          return {
            ...card,
            coordinates: {
              x: card.coordinates.x + delta.x,
              y: card.coordinates.y + delta.y,
            },
          }
        }
        return card
      })
    )
  }

  // create the d3 zoom object, and useMemo to retain it for rerenders
  const zoomBehavior = useMemo(() => zoom<HTMLDivElement, unknown>(), [])

  // update the transform when d3 zoom notifies of a change
  const updateTransform = useCallback(
    ({ transform }: { transform: ZoomTransform }) => {
      setTransform(transform)
    },
    [setTransform]
  )

  useLayoutEffect(() => {
    if (!canvasRef.current) return

    // get transform change notifications from d3 zoom
    zoomBehavior.on("zoom", updateTransform)

    // attach d3 zoom to the canvas div element, which will handle
    // mousewheel, gesture and drag events automatically for pan / zoom
    select<HTMLDivElement, unknown>(canvasRef.current).call(zoomBehavior)
  }, [zoomBehavior, canvasRef, updateTransform])

  return (
    <div
      onClick={() => setDragged(true)}
      ref={updateAndForwardRef}
      className="canvasWindow"
    >
      <div
        className="canvas"
        style={{
          // apply the transform from d3
          transformOrigin: "top left",
          transform: `translate3d(${transform.x}px, ${transform.y}px, ${transform.k}px)`,
          position: "relative",
          height: "300px",
        }}
      >
        <DndContext onDragEnd={updateDraggedCardPosition}>
          {cards.map((card) => (
            <ProjectCard
              canvasTransform={transform}
              card={card}
              key={card.id}
            />
          ))}
          {posts.map((post) => (
            <Draggable key={post.id} card={post} canvasTransform={transform} />
          ))}
        </DndContext>
      </div>
    </div>
  )
}

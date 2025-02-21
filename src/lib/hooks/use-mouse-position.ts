"use client"

import { useState, useEffect } from "react"
import { useSpring } from "@react-spring/web"

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  const springConfig = { mass: 1, tension: 80, friction: 30 }
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0, config: springConfig }))

  useEffect(() => {
    api.start({ x: mousePosition.x, y: mousePosition.y })
  }, [mousePosition, api])

  return { x, y }
}


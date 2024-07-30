import { useState } from 'react'
import _ from 'lodash'

export default (
  callback: (direction: 'left' | 'right' | 'up' | 'down') => void
) => {
  // let startX: number | null
  // let startY: number | null
  const [startX, setStartX] = useState<number | null>(null)
  const [startY, setStartY] = useState<number | null>(null)

  const touchStart = _.debounce((event: React.TouchEvent) => {
    const touch = event.touches[0]
    setStartX(touch.clientX)
    setStartY(touch.clientY)
  }, 200)

  // const touchStart = useCallback(() => _.debounce((event: React.TouchEvent) => {
  //   const touch = event.touches[0]
  //   startX = touch.clientX
  //   startY = touch.clientY
  // }, 200), [])

  const touchEnd = _.debounce((event: React.TouchEvent) => {
    if (!startX || !startY) {
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    // Check if the movement is horizontal or vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > 0) {
        // Right swipe
        callback('right')
      } else {
        // Left swipe
        callback('left')
      }
    } else {
      // Vertical swipe
      if (deltaY > 0) {
        // Down swipe
        callback('down')
      } else {
        // Up swipe
        callback('up')
      }
    }

    setStartX(null)
    setStartY(null)
  }, 200)

  return { touchStart, touchEnd }
}

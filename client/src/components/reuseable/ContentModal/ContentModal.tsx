import React from 'react'
import _ from 'lodash'
import {
  StyledFullScreenMask,
  StyledContent,
  StyledCloseButton,
} from './styles'

const handleSwipe = (
  callback: (direction: 'left' | 'right' | 'up' | 'down') => void
) => {
  let startX: number | null
  let startY: number | null

  const touchStart = _.debounce((event: React.TouchEvent) => {
    const touch = event.touches[0]
    startX = touch.clientX
    startY = touch.clientY
  }, 200)

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

    startX = null
    startY = null
  }, 200)

  return { touchStart, touchEnd }
}

const ContentModal = (props: {
  active: boolean
  content: typeof React.Children
  activeIndex?: number
  handleClose: () => void
  handleImageBrowse: (idx: number, direction: 'left' | 'right') => void
}) => {
  console.log('content', props.content)
  const swipeHandler = handleSwipe(
    (direction: 'left' | 'right' | 'up' | 'down') => {
      console.log(props.activeIndex, direction)
      if (typeof props.activeIndex !== 'number' || props.activeIndex === -1)
        return
      if (direction === 'left')
        props.handleImageBrowse(props.activeIndex, 'right')
      if (direction === 'right')
        props.handleImageBrowse(props.activeIndex, 'left')
    }
  )
  return (
    <div
      onTouchStart={swipeHandler.touchStart}
      onTouchEnd={swipeHandler.touchEnd}
    >
      <StyledFullScreenMask active={props.active}>
        <StyledContent>
          <StyledCloseButton>
            <span onClick={props.handleClose}>x</span>
          </StyledCloseButton>
          {props.content}
        </StyledContent>
      </StyledFullScreenMask>
    </div>
  )
}

export default ContentModal

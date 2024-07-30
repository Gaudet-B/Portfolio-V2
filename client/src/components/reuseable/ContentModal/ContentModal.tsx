import { PropsWithChildren } from 'react'
import handleSwipe from '../../../hooks/useSwipe'
import {
  StyledFullScreenMask,
  StyledContent,
  StyledCloseButton,
} from './styles'

const ContentModal = ({
  active,
  children,
  activeIndex,
  handleClose,
  handleImageBrowse,
}: PropsWithChildren<{
  active: boolean
  activeIndex?: number
  handleClose: () => void
  handleImageBrowse: (idx: number, direction: 'left' | 'right') => void
}>) => {
  const swipeHandler = handleSwipe(
    (direction: 'left' | 'right' | 'up' | 'down') => {
      console.log(activeIndex, direction)
      if (typeof activeIndex !== 'number' || activeIndex === -1) return
      if (direction === 'left') handleImageBrowse(activeIndex, 'right')
      if (direction === 'right') handleImageBrowse(activeIndex, 'left')
    }
  )
  return (
    <div
      onTouchStart={swipeHandler.touchStart}
      onTouchEnd={swipeHandler.touchEnd}
    >
      <StyledFullScreenMask $active={active}>
        <StyledContent>
          <StyledCloseButton>
            <span onClick={handleClose}>x</span>
          </StyledCloseButton>
          {children}
        </StyledContent>
      </StyledFullScreenMask>
    </div>
  )
}

export default ContentModal

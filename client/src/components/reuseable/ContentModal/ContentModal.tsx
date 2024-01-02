import React from 'react'

import {
  StyledFullScreenMask,
  StyledContent,
  StyledCloseButton,
} from './styles'

const ContentModal = (props: {
  active: boolean
  content: typeof React.Children
  handleClose: () => void
}) => {
  return (
    <StyledFullScreenMask active={props.active}>
      <StyledContent>
        <StyledCloseButton>
          <span onClick={props.handleClose}>x</span>
        </StyledCloseButton>
        {props.content}
      </StyledContent>
    </StyledFullScreenMask>
  )
}

export default ContentModal

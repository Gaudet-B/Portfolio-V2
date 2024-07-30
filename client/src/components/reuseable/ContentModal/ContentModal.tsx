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
      {/* <StyledFullScreenMask active={props.active} onClick={props.handleClose}> */}
      <StyledContent>
        {/* <div
          style={{
            width: 'fit-content',
          }}
        > */}
        <StyledCloseButton>
          <span onClick={props.handleClose}>x</span>
        </StyledCloseButton>
        {/* </div> */}
        {props.content}
      </StyledContent>
    </StyledFullScreenMask>
  )
}

export default ContentModal

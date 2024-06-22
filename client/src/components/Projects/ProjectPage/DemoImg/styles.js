import styled, { keyframes } from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide'

const ANIMATION_DELAY = 0.3

const getHoverHeight = (props) => {
  console.log('hoverHeight', props.hoverHeight)
  return props.portrait ? props.hoverHeight : undefined
}

const getHoverWidth = (props) => {
  console.log('hoverWidth', props.hoverWidth)
  return props.portrait ? undefined : props.hoverWidth
}

const fadeIn = keyframes`
    0% { opacity: 0; }
    90% { opacity: 0; }
    100% { opacity: 1; }
`

export const StyledDemoImg = styled.div`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  display: ${(props) => (props.hideDemo ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &[data-active='true'] {
    height: fit-content;
    width: fit-content;
  }
`

export const StyledThumbnailContainer = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  transition: 0.5s ease-out;
  border: 0.5px solid ${styleGuide.colors.SpaceBlack};
  border-radius: 3px;
  overflow: hidden;
  &[data-active='true'] {
    height: ${(props) => props.activeHeight}px;
    width: ${(props) => props.activeWidth}px;
    &[data-active='true'] {
      max-height: 90vh;
      overflow-y: scroll;
      overflow-x: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        width: ${(props) => (props.hideScrollbar ? '0px' : '8px')};
      }
      &::-webkit-scrollbar-button:single-button:vertical:decrement {
        background-color: ${styleGuide.colors.SpaceBlack};
        display: block;
        border-style: solid;
        height: 4px;
        width: ${(props) => (props.hideScrollbar ? '0px' : '8px')};
        border-width: 0 4px 4px 4px;
        border-color: transparent transparent ${styleGuide.colors.MatrixGreen}
          transparent;
      }
      &::-webkit-scrollbar-button:single-button:vertical:increment {
        background-color: ${styleGuide.colors.SpaceBlack};
        display: block;
        border-style: solid;
        height: 8px;
        width: ${(props) => (props.hideScrollbar ? '0px' : '8px')};
        border-width: 4px 4px 0 4px;
        border-color: ${styleGuide.colors.MatrixGreen} transparent transparent
          transparent;
      }
      &::-webkit-scrollbar-track {
        background-color: ${styleGuide.colors.MatteGray};
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${styleGuide.colors.MatrixGreen};
      }
    }
  }
  &:hover {
    transition: ${(props) =>
      !props.activeHeight
        ? `${ANIMATION_DELAY}s ease-in ${ANIMATION_DELAY}s`
        : undefined};
    height: ${(props) =>
      !props.activeHeight ? getHoverHeight(props) : undefined};
    width: ${(props) =>
      !props.activeHeight ? getHoverWidth(props) : undefined};
  }
`

// &[data-active='true'] {
//   height: ${(props) => (props.landscape ? 353 : 192)}px;
//   width: ${(props) => (props.landscape ? 623 : 113)}px;
//   position: absolute;
//   z-index: 10;
//   transform: translateY(${(props) => props.translateY})
//     translateX(${(props) => props.translateX}) scale(5);
//   max-height: ${(props) => props.maxHeight || 18}vh;
// }

export const StyledImageContainer = styled.div`
  height: inherit;
  width: inherit;
  border-radius: 3px;
`

// &[data-active='true'] {
//   max-height: ${(props) => props.maxHeight || 18}vh;
//   overflow-y: scroll;
//   overflow-x: visible;
//   scrollbar-width: none;
//   -ms-overflow-style: none;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// }

export const StyledImage = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 2px;
  background-size: ${(props) => (props.modal ? 'contain' : 'cover')};
  background-repeat: ${(props) => (props.modal ? 'no-repeat' : undefined)};
  background-position: center;
  cursor: pointer;
`

export const StyledMask = styled.div`
  opacity: 1;
  height: 100%;
  width: 100%;
  background-color: rgb(26, 26, 26, 0.6);
  background-size: ${(props) => (props.cropped ? 'contain' : 'cover')};
  background-position: center;
  &:hover {
    transition: ${ANIMATION_DELAY}s ease-in;
    opacity: ${(props) => (props.showRestartLink ? '1' : '0')};
  }
  &[data-active='true'] {
    opacity: 0;
  }
`
// &[data-active='true'] {
//   height: 20vh;
//   width: 20vw;
//   z-index: -1;
//   transform: translateY(-23px) translateX(-35px);
//   position: absolute;
//   &:hover {
//     opacity: 1;
//   }
// }

// transform: translateY(-260px);
export const StyledImageControls = styled.div`
  top: 50%;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  display: flex;
  felx-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: fit-content;
  &[data-active='true'] {
    position: absolute;
    animation: ${fadeIn} ${ANIMATION_DELAY}s ease-in;
    opacity: 1;
  }
`

export const StyledLinkContainer = styled.div`
  width: inherit;
  text-align: center;
  display: ${(props) => (props.hideLink ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  z-index: 5;
  opacity: 0;
  &[data-active='true'] {
    position: relative;
    bottom: 54%;
    opacity: 1;
  }
  & span {
    font-size: ${styleGuide.fonts.sizes.large};
  }
`

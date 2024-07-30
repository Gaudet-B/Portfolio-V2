import styled, { keyframes } from 'styled-components'
import styleGuide from '../../../../StyleGuide/StyleGuide'

const MOBILE_CONTENT_MIN_WIDTH = 320
const CONTENT_MIN_WIDTH = 400
// const CONTENT_HEIGHT = 500

const { colors, fonts } = styleGuide

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const StyledCompanySummaryContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  /* padding-top: 3em; */
  font-size: ${fonts.sizes.schmedium};
  line-height: 22pt;
  max-width: 550px;
`

export const StyledSummaryText = styled.span``

export const StyledLogoImage = styled.img`
  transform: translateY(6px);
  margin-right: 4px;
`

export const StyledBoldText = styled.strong`
  background-image: linear-gradient(60deg, #a5d8ff, 40%, #ffc9c9);
  color: transparent;
  background-clip: text;
`

export const StyledBookend = styled.div`
  height: 100px;
`

export const StyledCaseStudyContainer = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledCaseStudyHeader = styled.h2<{ $mobile?: boolean }>`
  font-size: ${({ $mobile }) =>
    $mobile ? fonts.sizes.medium : fonts.sizes.large};
  margin: 0 0 20px 0;
`

export const StyledCaseStudyGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* flex-wrap: wrap; */
  gap: 6px;
`

export const StyledMobileGrid = styled.div`
  width: 100%;
  display: flex;
  padding: 2px 8px;
  justify-content: space-evenly;
  /* flex-wrap: wrap; */
  gap: 6px;
`

/** @TODO change max-width? */
export const StyledScrollableContainer = styled.div<{ $shouldRender: boolean }>`
  display: ${({ $shouldRender }) => ($shouldRender ? 'flex' : 'none')};
  width: 100%;
  max-width: 700px;
  padding: 2px 4px;
  overflow: hidden;
  white-space: nowrap;
  border: 2px solid ${colors.GrayShadow};
  border-radius: 10px;
  &:hover {
    border: 2px solid ${colors.MatrixGreen};
    & > div {
      &::-webkit-scrollbar-thumb {
        background-color: ${colors.MatrixGreen};
        &:hover {
          background-color: ${colors.LabelGreen};
        }
      }
      &::-webkit-scrollbar-button {
        &:single-button {
          &:horizontal {
            &:decrement {
              border-color: transparent ${colors.MatrixGreen} transparent
                transparent;
              &:hover {
                border-color: transparent ${colors.LabelGreen} transparent
                  transparent;
              }
            }
            &:increment {
              border-color: transparent transparent transparent
                ${colors.MatrixGreen};
              &:hover {
                border-color: transparent transparent transparent
                  ${colors.LabelGreen};
              }
            }
          }
        }
      }
      & > div {
        opacity: 1;
        transition: opacity 0.5s;
      }
    }
  }
`

// export const StyledCaseStudyRow = styled.div<{
//   $mobile: boolean
// }>`
// flex-direction: ${({ $mobile }) => ($mobile ? 'column' : 'row')}};

export const StyledCaseStudyRow = styled.div<{ $mobile?: boolean }>`
  /* transform: translateX(-20px); */
  /* width: ${CONTENT_MIN_WIDTH}px; */
  scroll-snap-type: x mandatory;
  height: 100%;
  display: flex;
  gap: 80px;
  align-items: ${({ $mobile }) => ($mobile ? 'stretch' : 'center')};
  overflow: auto;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-button {
    &:single-button {
      display: block;
      border-style: solid;
      height: 10px;
      width: 6px;
      background-color: ${colors.SpaceBlack};
      &:horizontal {
        &:decrement {
          border-width: 5px 5px 5px 0;
          border-color: transparent ${colors.GrayShadow} transparent transparent;
          &:hover {
            border-color: transparent ${colors.MatrixGreen} transparent
              transparent;
          }
        }
        &:increment {
          border-width: 5px 0 5px 5px;
          border-color: transparent transparent transparent ${colors.GrayShadow};
          &:hover {
            border-color: transparent transparent transparent
              ${colors.MatrixGreen};
          }
        }
      }
    }
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.GrayShadow};
    background-clip: padding-box;
    border-radius: 15px;
    &:hover {
      background-color: ${colors.MatrixGreen};
    }
  }
  &::-webkit-scrollbar-track {
    margin: 0 1px;
    background-color: ${colors.MatteGray};
    border: 1px solid ${colors.MatteGray};
    border-radius: 15px;
  }
`

export const StyledCaseStudyContentContainer = styled.div<{
  $reverse: boolean
}>`
  padding: 20px 0;
  scroll-snap-align: center;
  width: ${CONTENT_MIN_WIDTH}px;
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'column-reverse' : 'column')};
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > div {
    & > div {
      & > div {
        & > div {
          cursor: default;
        }
      }
    }
  }
`

export const StyledMobileContainer = styled.div<{ $shouldRender: boolean }>`
  display: ${({ $shouldRender }) => ($shouldRender ? 'flex' : 'none')};
  width: 100%;
  max-width: ${CONTENT_MIN_WIDTH - 40}px;
  min-width: ${MOBILE_CONTENT_MIN_WIDTH}px;
  padding: 2px 0;
  overflow: hidden;
  white-space: nowrap;
  border-top: 2px solid ${colors.GhostGray};
  border-bottom: 2px solid ${colors.GhostGray};
  background-color: ${colors.MatteGray};
  /* border-radius: 10px; */
`

export const StyledMobileContentContainer = styled.div<{ $reverse: boolean }>`
  padding: 10px 0;
  scroll-snap-align: center;
  width: ${MOBILE_CONTENT_MIN_WIDTH}px;
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'column-reverse' : 'column')};
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const StyledCaseStudyColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledCaseStudyTextContainer = styled.div`
  width: ${CONTENT_MIN_WIDTH}px;
  text-align: center;
  white-space: wrap;
`

/** @TODO split this into two components? */
export const StyledCaseStudyImageContainer = styled.div<{
  $isClickable: boolean
  $mobile?: boolean
}>`
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
  display: ${({ $mobile }) => ($mobile ? 'flex' : 'block')};
  justify-content: ${({ $mobile }) => ($mobile ? 'center' : undefined)};
  align-items: ${({ $mobile }) => ($mobile ? 'center' : undefined)};
  /* height: ${({ $mobile }) => ($mobile ? '100%' : 'auto')}; */
  width: ${({ $mobile }) => ($mobile ? '100%' : 'auto')};
  background-color: ${({ $mobile }) =>
    $mobile ? colors.SpaceBlack : undefined};
  padding: ${({ $mobile }) => ($mobile ? '8px' : '0')};
  border: ${({ $mobile }) =>
    $mobile ? `0.5px solid ${colors.SpaceBlack}` : 'none'};
  border-radius: ${({ $mobile }) => ($mobile ? '6px' : '0')};
`

export const StyledCaseStudyText = styled.p`
  width: ${CONTENT_MIN_WIDTH - 40}px;
  padding: 0 20px;
`

export const StyledMobileTextContainer = styled.div`
  width: ${MOBILE_CONTENT_MIN_WIDTH}px;
  text-align: center;
  white-space: wrap;
`

export const StyledMobileText = styled.p`
  width: ${MOBILE_CONTENT_MIN_WIDTH - 40}px;
  margin: auto;
  padding: 0;
`

export const StyledControlButton = styled.div`
  position: sticky;
  top: 100%;
  left: 42%;
  transform: translateY(10px);
  opacity: 0;
  transition: opacity 0.5s;
  cursor: pointer;
  & > svg {
    border-radius: 50% 50% 0 0;
    background-color: ${colors.MatteGray};
    box-shadow: 0 -8px 15px ${colors.SpaceBlack};
  }
`

export const StyledImageRow = styled.div<{ $mobile?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: ${({ $mobile }) => ($mobile ? '100%' : 'auto')};
  background-color: ${({ $mobile }) =>
    $mobile ? colors.SpaceBlack : undefined};
  padding: ${({ $mobile }) => ($mobile ? '8px' : '0')};
  border: ${({ $mobile }) =>
    $mobile ? `0.5px solid ${colors.SpaceBlack}` : 'none'};
  border-radius: ${({ $mobile }) => ($mobile ? '6px' : '0')};
`

export const StyledLeftPane = styled.div`
  position: sticky;
  display: flex;
  padding: 0 10px;
  height: 100%;
  width: 50px;
  background-color: rgba(25, 25, 25, 0.4);
  top: 0;
  left: 0;
`

export const StyledRightPane = styled.div`
  position: sticky;
  display: flex;
  padding: 0 10px;
  height: 100%;
  width: 50px;
  background-color: rgba(25, 25, 25, 0.4);
  top: 0;
  left: 100%;
`

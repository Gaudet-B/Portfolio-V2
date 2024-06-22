import styled from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide'

const CONTENT_WIDTH = 400
// const CONTENT_HEIGHT = 500

const { colors } = styleGuide

export const StyledBookend = styled.div`
  height: 100px;
`

export const StyledCaseStudyContainer = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledCaseStudyHeader = styled.h2`
  margin: 0 0 20px 0;
`

export const StyledCaseStudyGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 6px;
`

export const StyledScrollableContainer = styled.div`
  max-width: 400px;
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
    }
  }
`

export const StyledCaseStudyRow = styled.div`
  scroll-snap-type: x mandatory;
  padding: 20px 0;
  display: flex;
  gap: 80px;
  flex-direction: ${({ mobile, reverse }) => {
    if (reverse) return 'column-reverse'
    if (mobile) return 'column'
    return 'row'
  }};
  align-items: center;
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

export const StyledCaseStudyContentContainer = styled.div`
  scroll-snap-align: center;
  width: ${CONTENT_WIDTH}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const StyledCaseStudyTextContainer = styled.div`
  width: ${CONTENT_WIDTH}px;
  text-align: center;
  white-space: wrap;
`

export const StyledCaseStudyText = styled.p`
  width: ${CONTENT_WIDTH}px;
`

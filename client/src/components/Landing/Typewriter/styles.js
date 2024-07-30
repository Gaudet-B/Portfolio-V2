import styled, { keyframes } from 'styled-components'

import styleGuide from '../../StyleGuide/StyleGuide'

const MAX_WIDTH = 1500
const MIN_HEIGHT = 212

const caret = keyframes`
    50% { border-color: transparent; }
`

export const StyledTypewriter = styled.div`
  min-height: ${MIN_HEIGHT}px;
  top: 16%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`

export const StyledTypewriterText = styled.h1`
  top: 18%;
  margin-top: 6px;
  height: ${(props) => (props.invisible ? '20px' : undefined)};

  width: 10em;
  margin: 6px 0;
  color: ${(props) =>
    props.heading ? styleGuide.colors.White : styleGuide.colors.MatrixGreen};
  font-size: ${(props) => (props.heading ? '4em' : '2.5em')};
  font-size: ${(props) => (props.responsive ? '2.5em' : undefined)};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  trasform: translateY(-50%);
  > span {
    border-right: 0.05em solid;
    animation: ${caret} 1s steps(1) infinite;
  }
`

// export const StyledTypewriterText = styled.h3`
//     margin-top: 6px;
// `

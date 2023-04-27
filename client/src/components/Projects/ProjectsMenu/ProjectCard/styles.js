import styled, { keyframes } from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide'

const contract = keyframes`
  from {height: inherit; top: 0}
  to {height: 5px; top: 50%}
`

const expand = keyframes`
  from {height: 5px; top: 50%}
  to {height: inherit; top: 0}
`

export const StyledProjectCardContainer = styled.div`
  background-size: cover;
  width: inherit;
  height: inherit;
  transform: perspective(500px) translate3d(0, 0, -100px) scale(0.9);
  transition: 1.5s ease-out transform;
  border: 2px solid ${styleGuide.colors.WhiteSmoke};
  border-radius: 5px;
  &:hover {
    transform: translate3d(0, 0, 50px);
    box-shadow: 0 0 25px 5px ${styleGuide.colors.WhiteSmoke};
  }
`

export const StyledCardOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(26, 26, 26, 0.2);
`

export const StyledCardMask = styled.div`
  animation: ${(props) => (props.active ? expand : contract)} 0.3s
    ${(props) => (props.active ? 'ease-in' : 'ease-out')};
  border-radius: ${(props) => (props.active ? '5px' : undefined)};
  height: ${(props) => (props.active ? 'inherit' : '0px')};
  top: ${(props) => (props.active ? '0' : '50%')};
  position: relative;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(26, 26, 26, 0.9);
  margin: auto 0;
  overflow: scroll;
  scrollbar-width: 0px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledCardText = styled.span`
  color: ${(props) =>
    props.active ? styleGuide.colors.WhiteSmoke : 'transparent'};
  font-size: ${styleGuide.fonts.sizes.small};
`

export const StyledCardTitle = styled.h3`
  color: ${(props) =>
    props.active ? styleGuide.colors.MatrixGreen : 'transparent'};
  font-size: ${styleGuide.fonts.sizes.medium};
  font-weight: bold;
`

export const StyledCardlink = styled.span`
  color: ${(props) =>
    props.active ? styleGuide.colors.WhiteSmoke : 'transparent'};
  font-size: ${styleGuide.fonts.sizes.extraSmall};
`

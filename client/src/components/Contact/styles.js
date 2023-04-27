import styled, { keyframes } from 'styled-components'
import background from '../../assets/3d-background.png'

const CONTAINER_HEIGHT = 80
const CLOSED_CONTAINER = 90
const OPEN_CONTAINER = 700

const open = keyframes`
    from {height: ${CLOSED_CONTAINER}px;}
    to {height: ${OPEN_CONTAINER}px;}
`
const close = keyframes`
  from {height: ${OPEN_CONTAINER}px;}
  to {height: ${CLOSED_CONTAINER}px;}
`

export const StyledBackground = styled.div`
  width: 100%;
  display: flex;
  animation: un-mask 2s ease;
  background-image: url(${background});
  min-height: 100vh;
  height: 100%;
  -webkit-backgound-size: cover;
  -moz-backgound-size: cover;
  background-size: cover;
  text-align: center;
`

export const StyledContactContainer = styled.div`
  width: inherit;
  max-width: 100vw;
  color: rgba(255, 255, 255, 0.75);
  font-family: 'Anonymous Pro';
  background: linear-gradient(
    8deg,
    rgba(26, 26, 26, 0.2) 0%,
    rgba(25, 25, 25, 1) 70%
  );
`

export const StyledFormContainer = styled.div`
  min-height: ${CLOSED_CONTAINER}px;
  max-height: ${CONTAINER_HEIGHT}vh;
  background: linear-gradient(
    to bottom,
    rgb(38, 38, 38) 0%,
    rgb(38, 38, 38, 0.5) 100%
  );
  padding-top: 2em;
  max-width: 1100px;
  margin: auto;
  margin: 1rem auto;
  border: 1px solid rgba(245, 245, 245, 0.4);
  border-radius: 5px;
  overflow: scroll;
  scrollbar-width: 0px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &[data-open='true'] {
    animation: ${open} 0.6s ease-in;
  }
  &[data-closed='true'] {
    height: ${CLOSED_CONTAINER}px;
  }
`

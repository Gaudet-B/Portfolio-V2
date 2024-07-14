import styled, { keyframes } from 'styled-components'
import background from '../../assets/3d-background.png'
import styleGuide from '../StyleGuide/StyleGuide'

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
const unMask = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`
const flash = keyframes`
  0% {background-color: whitesmoke;}
  70% {background-color: rgb(245, 245, 245, .8);}
  71% {background-color: whitesmoke;}
`

export const StyledBackground = styled.div`
  width: 100%;
  display: flex;
  animation: ${unMask} 2s ease;
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 1rem 4px;
  border: 1px solid ${styleGuide.colors.WhiteSmoke};
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

export const StyledForm = styled.form`
  min-width: fit-content;
  margin: auto;
  padding: 2em 4em;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    circle at 50% -50%,
    rgb(25, 25, 25, 1) 0%,
    rgb(25, 25, 25, 1) 60%,
    transparent 100%
  );
`

export const StyledFormComponent = styled.div`
  width: 60vw;
  max-width: 700px;
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
`

export const StyledLabel = styled.label`
  width: 38%;
  font-size: 1.7rem;
  color: whitesmoke;
`

export const StyledInput = styled.input`
  margin: 0px 12px;
  padding: 8px;
  min-width: 60%;
  max-width: 500px;
  min-height: 30px;
  font-family: 'Anonymous Pro', monospace;
  font-size: 1.1rem;
  font-weight: bold;
  color: whitesmoke;
  box-shadow: 0px 0px 8px -2px rgba(245, 245, 245, 0.9);
  background-color: transparent;
  border: none;
`

export const StyledTextArea = styled.textarea`
  margin: 0px 12px;
  padding: 8px;
  min-width: 60%;
  max-width: 500px;
  font-family: 'Anonymous Pro', monospace;
  font-size: 1.1rem;
  font-weight: bold;
  color: whitesmoke;
  box-shadow: 0px 0px 8px -2px rgba(245, 245, 245, 0.9);
  background-color: transparent;
  border: none;
`

export const StyledDropdown = styled.select`
  margin: 0px 12px;
  padding: 8px;
  min-width: 60%;
  max-width: 500px;
  min-height: 30px;
  font-family: 'Anonymous Pro', monospace;
  font-size: 1.1rem;
  font-weight: bold;
  color: whitesmoke;
  box-shadow: 0px 0px 8px -2px rgba(245, 245, 245, 0.9);
  background-color: transparent;
  border: none;
`

export const StyledOption = styled.option`
  min-height: 30px;
  font-family: 'Anonymous Pro', monospace;
  background-color: rgb(25, 25, 25, 1);
`

export const StyledButtonContainer = styled.div`
  width: 60vw;
  max-width: 700px;
  margin: 1em auto;
  display: flex;
  justify-content: flex-end;
`

export const StyledButton = styled.button`
  transition: 1s ease-out;
  height: 40px;
  width: 110px;
  background-color: whitesmoke;
  border: 2px solid transparent;
  border-radius: 5% / 10%;
  box-shadow: 0 25px 12px -15px rgba(245, 245, 245, 0.24);
  font-family: 'Anonymous Pro', monospace;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: black;
  &:hover {
    cursor: pointer;
    animation: ${flash} 0.5s linear;
    background-color: transparent;
    border: 1px solid whitesmoke;
    color: whitesmoke;
  }
`

export const StyledTitle = styled.div`
  font-size: 36pt;
  margin: 0 0 32px 0;
  text-shadow: 1px 1px 1px rgba(245, 245, 245, 0.3);
`

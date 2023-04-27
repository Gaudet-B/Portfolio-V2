import styled, { keyframes, createGlobalStyle } from 'styled-components'
import styleGuide from '../StyleGuide/StyleGuide'

const MAX_CONTAINER_WIDTH = `1200px`

export const LandingFonts = createGlobalStyle`
    @font-face {
        font-family: 'Anonymous Pro';
        src: url (${styleGuide.fonts.families.anonymousProNormal}) format('ttf');
        font-display: swap;
    }
`

const unMask = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`

const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

// REMOVED:
// max-width: ${props => props.responsive ? undefined : '2000px'};
// max-height: ${props => props.responsive ? undefined : '1500px'};
export const StyledLandingBackground = styled.div`
  background-color: rgb(25, 25, 25);
  margin: 0;
  height: ${(props) => (props.responsive ? '100%' : '1500px')};
  width: ${(props) => (props.responsive ? '100%' : undefined)};

  background-size: cover;
  text-align: center;
`
// the current green used as "color" here is "rgba(0, 218, 25, 0.7);" --> and on mobile it's "rgba(0, 218, 25, 0.5);"
// add "overflow-x: hidden;" here ???
export const StyledMainWrapper = styled.div`
  position: absolute;
  height: ${(props) => (props.responsive ? 'fit-content' : '100vh')};
  width: 100vw;
  color: ${styleGuide.colors.MatrixGreen};
  font-family: 'Anonymous Pro', monospace;
  background: linear-gradient(
    6deg,
    rgba(26, 26, 26, ${(props) => (props.responsive ? '0' : '0.1')}) 0%,
    rgba(25, 25, 25, 1) 62%
  );
  background-size: cover;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: ${(props) =>
    props.small ? 'rgb(25,25,25,.8)' : undefined};
  &::-webkit-scrollbar {
    display: none;
  }
  min-height: ${(props) => (props.responsive ? '100vh' : undefined)};
  padding-top: ${(props) => (props.responsive ? '100px' : undefined)};
  padding-bottom: ${(props) => (props.responsive ? '200px' : undefined)};
`

export const StyledMainContainer = styled.div`
  margin: ${(props) => (props.small ? '18vh auto 0 auto' : '30vh auto 0 auto')};
  margin-top: ${(props) => (props.responsive ? '6vh' : undefined)};
`

export const StyledCenterColumn = styled.div`
  animation: ${fadeIn} 3s;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledButtonContainer = styled.div`
  max-width: ${MAX_CONTAINER_WIDTH};
  margin: auto;
  animation: ${fadeIn} 3s;
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.responsive ? 'column' : 'row')};
  justify-content: space-evenly;
  padding: ${(props) => (props.responsive ? '96px 12px 12px 12px' : undefined)};
`

export const StyledSocialContainer = styled.div`
  transform: ${(props) =>
    props.responsive
      ? undefined
      : 'perspective(750px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9)'};
  box-shadow: 0 70px 40px -20px rgba(245, 245, 245, 0.24);
  margin-top: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid whitesmoke;
  background-color: ${(props) =>
    props.responsive
      ? 'rgba(211, 211, 211, 0.616)'
      : 'rgba(167, 165, 165, 0.3)'};
  border-radius: 10% / 20%;
  animation: ${fadeIn} 3s;
  transition: 0.4s ease-in-out transform;
  &:hover {
    transform: translate3d(0px, 0px, -250px);
    background-color: rgba(0, 240, 17, 0.6);
  }
  > a {
    margin: 5px;
    height: 40px;
    width: 40px;
    border: 1px solid rgb(26, 26, 26);
    border-radius: 20%;
  }
`

export const StyledSocialImage = styled.div`
  height: 100%;
  border-radius: 20%;
  background-image: url('${(props) => props.img}');
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
`

export const StyledCopyrightContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const StyledCopyrightText = styled.span`
  color: ${styleGuide.colors.BackgroundGray};
`

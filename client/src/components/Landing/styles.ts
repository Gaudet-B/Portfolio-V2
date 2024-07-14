import styled, { keyframes, createGlobalStyle } from 'styled-components'
import styleGuide from '../StyleGuide/StyleGuide'

const MAX_CONTAINER_WIDTH = `1200px`

export const LandingFonts = createGlobalStyle`
    @font-face {
        font-family: 'Anonymous Pro';
        src: url (${styleGuide.fonts.families.AnonymousPro}) format('ttf');
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
export const StyledLandingBackground = styled.div<{ $responsive: boolean }>`
  background-color: rgb(25, 25, 25);
  margin: 0;
  height: ${({ $responsive }) => ($responsive ? '100%' : '1500px')};
  width: ${({ $responsive }) => ($responsive ? '100%' : undefined)};

  background-size: cover;
  text-align: center;
`
// the current green used as "color" here is "rgba(0, 218, 25, 0.7);" --> and on mobile it's "rgba(0, 218, 25, 0.5);"
// add "overflow-x: hidden;" here ???
export const StyledMainWrapper = styled.div<{
  $responsive: boolean
  $small: boolean
}>`
  position: absolute;
  height: ${({ $responsive }) => ($responsive ? 'fit-content' : '100vh')};
  width: 100vw;
  color: ${styleGuide.colors.MatrixGreen};
  font-family: 'Anonymous Pro', monospace;
  background: linear-gradient(
    6deg,
    rgba(26, 26, 26, ${({ $responsive }) => ($responsive ? '0' : '0.1')}) 0%,
    rgba(25, 25, 25, 1) 62%
  );
  background-size: cover;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: ${({ $small }) =>
    $small ? 'rgb(25,25,25,.8)' : undefined};
  &::-webkit-scrollbar {
    display: none;
  }
  min-height: ${({ $responsive }) => ($responsive ? '100vh' : undefined)};
  padding-top: ${({ $responsive }) => ($responsive ? '50px' : undefined)};
  padding-bottom: ${({ $responsive }) => ($responsive ? '100px' : undefined)};
`

export const StyledMainContainer = styled.div<{
  $responsive: boolean
  $small: boolean
}>`
  margin: ${({ $small }) => ($small ? '18vh auto 0 auto' : '30vh auto 0 auto')};
  margin-top: ${({ $responsive }) => ($responsive ? '6vh' : undefined)};
`

export const StyledCenterColumn = styled.div`
  animation: ${fadeIn} 3s;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledButtonContainer = styled.div<{ $responsive: boolean }>`
  max-width: ${MAX_CONTAINER_WIDTH};
  margin: auto;
  animation: ${fadeIn} 3s;
  position: relative;
  display: flex;
  flex-direction: ${({ $responsive }) => ($responsive ? 'column' : 'row')};
  justify-content: space-evenly;
  padding: ${({ $responsive }) =>
    $responsive ? '56px 12px 12px 12px' : undefined};
`

export const StyledSocialContainer = styled.div<{ $responsive: boolean }>`
  transform: ${({ $responsive }) =>
    $responsive
      ? undefined
      : 'perspective(750px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9)'};
  box-shadow: 0 70px 40px -20px rgba(245, 245, 245, 0.24);
  margin-top: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid whitesmoke;
  background-color: ${({ $responsive }) =>
    $responsive ? 'rgba(211, 211, 211, 0.616)' : 'rgba(167, 165, 165, 0.3)'};
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

export const StyledSocialImage = styled.div<{ $img: string }>`
  height: 100%;
  border-radius: 20%;
  background-image: url('${({ $img }) => $img}');
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  &:hover {
    transform: scale(1.05);
  }
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

import styled, { keyframes, createGlobalStyle } from 'styled-components'
import styleGuide from '../StyleGuide/StyleGuide'

const BUTTON_INDENT = 24
const BUTTON_SPACING_BOTTOM = 12

export const NavFonts = createGlobalStyle`
  @font-face {
    font-family: 'Anonymous Pro';
    src: url (${styleGuide.fonts.families.AnonymousPro}) format('ttf');
    font-display: swap;
  }
`

const expand = keyframes`
  from {height: 0px;}
  to {height: 110px;}
`

const contract = keyframes`
  from {height: 110px;}
  to {height: 0px;}
`

const unmask = keyframes`
  from {background-size: cover;}
  to {background-size: 0;}
`

/* @keyframes slide {
  0% {transform: translateY(-4rem) translateX(3rem)}
  100% {transform: translateY(4rem) translateX(-3rem)}
} */

/** @TODO this is unused... remove? */
export const StyledNavLink = styled.div`
  font-family: helvetica;
  margin: 0px 2px;
  padding: 10px 12px 0px 12px;
  text-decoration: none;
  font-size: 1.4rem;
  color: whitesmoke;
  border-radius: 5px 5px 0px 0px;
  &:hover {
    color: whitesmoke;
  }
`

export const StyledSmallLink = styled.a`
  font-family: helvetica;
  margin: 6px 0;
  text-shadow: 2px 2px 1px black;
  text-decoration: none;
  font-size: 1.4rem;
  color: whitesmoke;
  z-index: 5;
  &[data-active='true'] {
    color: rgb(0, 173, 17);
    &:hover {
      color: rgba(0, 173, 17);
    }
  }
`

// .active {
//   color: rgb(0, 173, 17);
// }
// .active:hover {
//   color: rgba(0, 173, 17);
// }

export const StyledNavMenu = styled.div`
  border-radius: 0px 0px 8px 8px;
  display: ${(props) => (props.show ? 'flex' : 'flex')};
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  background-color: transparent;
  text-align: end;
  width: fit-content;
  height: ${(props) => (props.show ? '110px' : '0px')};
  padding: ${(props) => (props.show ? '12px' : '0 12px')};
  overflow: scroll;
  background-color: rgb(26, 26, 26, 0.95);
  transform: translate3d(-50px, 50px, 0);
  z-index: 5;
  scrollbar-width: 0px;
  &::-webkit-scrollbar {
    display: none;
  }
  &[data-open='true'] {
    animation: ${expand} 0.3s ease;
  }
  &[data-open='false'] {
    animation: ${contract} 0.3s ease;
  }
`
export const StyledMobileLinkWrapper = styled.div`
  font-family: helvetica;
  text-decoration: none;
  font-size: ${styleGuide.fonts.sizes.small};
  > a {
    color: ${(props) =>
      props.active
        ? styleGuide.colors.MatrixGreen
        : styleGuide.colors.WhiteSmoke};
    &:visited {
      color: ${(props) =>
        props.active
          ? styleGuide.colors.MatrixGreen
          : styleGuide.colors.WhiteSmoke};
    }
    &:hover {
      color: ${(props) =>
        props.active
          ? styleGuide.colors.MatrixGreen
          : styleGuide.colors.WhiteSmoke};
    }
  }
`

/* transform: ${(props) => props.transform}; */

// .navMenu {
//   border-radius: 0px 0px 8px 8px;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   position: relative;
//   background-color: transparent;
//   text-align: end;
//   width: fit-content;
//   height: fit-content;
//   background-color: transparent;
//   /* transition: .7s ease-out transform; */
//   transition: .7s ease transform;
// }

/* .activeMenu {
  height: fit-content;
  transition: 2s linear;
  animation: expand 2s linear ease-out;
} */

/* .inactiveMenu {
  height: fit-content;
  transition: 2s linear;
  animation: contract 2s linear ease-in;
} */

// =========================
// const unMask = keyframes`
// from {opacity: 0;}
// to {opacity: 1;}
// `

// const fadeIn = keyframes`
// 0% {opacity: 0;}
// 100% {opacity: 1;}
// `
// =========================

export const StyledNavWrapper = styled.div`
  width: ${(props) => (props.responsive ? '100%' : undefined)};
  height: ${(props) => (props.responsive ? '10vh' : 'fit-content')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.responsive ? '0' : '20px 55px 0 55px')};
  margin-bottom: ${(props) => (props.responsive ? undefined : '5px')};
  background-color: ${styleGuide.colors.SpaceBlack};
`
export const StyledBackButton = styled.span`
  color: ${styleGuide.colors.MatrixGreen};
  font-size: ${styleGuide.fonts.sizes.medium};
  cursor: pointer;
  margin-left: ${BUTTON_INDENT}px;
  margin-bottom: ${BUTTON_SPACING_BOTTOM}px;
  height: fit-content;
`

// width: ${(props) => (props.responsive ? undefined : '100%')};
export const StyledMainNav = styled.div`
  width: 100%;
  max-width: ${(props) => (props.responsive ? undefined : '1150px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${styleGuide.colors.SpaceBlack};
  padding: ${(props) => (props.responsive ? '0' : '20px 55px 0 55px')};
`

export const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 20px;
`

export const StyledNavLinksLarge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`

// 'visited' and 'hover' are used here to override bootstrap defaults on Resume page
export const StyledLinkWrapper = styled.div`
  font-family: helvetica;
  margin: 0px 2px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: ${styleGuide.fonts.sizes.medium};

  border-radius: 5px 5px 0px 0px;
  > a {
    color: ${(props) =>
      props.active
        ? styleGuide.colors.MatrixGreen
        : styleGuide.colors.WhiteSmoke};
    &:visited {
      color: ${(props) =>
        props.active
          ? styleGuide.colors.MatrixGreen
          : styleGuide.colors.WhiteSmoke};
    }
    &:hover {
      color: ${(props) =>
        props.active
          ? styleGuide.colors.MatrixGreen
          : styleGuide.colors.WhiteSmoke};
    }
  }
`

export const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 12px 0 0;
`

export const StyledHamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`

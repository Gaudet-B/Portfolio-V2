import styled, { createGlobalStyle, keyframes } from 'styled-components'
import styleGuide from '../StyleGuide/StyleGuide'

const CONTAINER_HEIGHT = 80
const CLOSED_CONTAINER = 22
const OPEN_CONTAINER = 700
const ANIMATION_TIMING = `0.7s`

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Anonymous Pro';
        src: url(${styleGuide.fonts.families.AnonymousPro}) format('truetype');
    }
`

const openMenu = keyframes`
    from {height: ${CLOSED_CONTAINER}px;}
    to {height: ${OPEN_CONTAINER}px;}
`
const openSmallMenu = keyframes`
    from {height: ${CLOSED_CONTAINER}px;}
    to {height: ${CONTAINER_HEIGHT}vh;}
`

const closeMenu = keyframes`
    from {height: ${OPEN_CONTAINER}px;}
    to {height: ${CLOSED_CONTAINER}px;}
`
const closeSmallMenu = keyframes`
    from {height: ${CONTAINER_HEIGHT}vh;}
    to {height: ${CLOSED_CONTAINER}px;}
`

/**
 * @NOTE - remove the 'color' property once all styling has been rewritten
 */
export const StyledBackground = styled.div`
  height: 100vh;
  background-size: cover;
  overflow-y: hidden;
  font-family: 'Anonymous Pro';
  color: ${styleGuide.colors.WhiteSmoke};
`

export const StyledProjectsContainer = styled.div`
  height: inherit;
  width: inherit;
  background: linear-gradient(
    0deg,
    rgba(26, 26, 26, 0.5) 0%,
    rgba(25, 25, 25, 1) 60%
  );
`

export const StyledMenuContainer = styled.div<{
  $responsive: boolean
  $setByWindowHeight: boolean
}>`
  min-height: ${CLOSED_CONTAINER}px;
  max-height: ${CONTAINER_HEIGHT}vh;
  width: ${({ $responsive }) => ($responsive ? '95%' : '90%')};
  max-width: 1100px;
  margin: ${({ $responsive }) => ($responsive ? '5px auto 0 auto' : '0 auto')};
  border: 2px solid ${styleGuide.colors.GhostGray};
  border-radius: 5px;
  overflow: scroll;
  scrollbar-width: 0px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &[data-open='true'] {
    animation: ${({ $setByWindowHeight }) =>
        $setByWindowHeight ? openSmallMenu : openMenu}
      ${ANIMATION_TIMING} ease-in;
  }
  &[data-closed='true'] {
    animation: ${({ $setByWindowHeight }) =>
        $setByWindowHeight ? closeSmallMenu : closeMenu}
      ${ANIMATION_TIMING} ease-out;
    height: ${CLOSED_CONTAINER}px;
  }
`

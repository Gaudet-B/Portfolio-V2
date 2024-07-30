import styled from 'styled-components'
import styleGuide from '../StyleGuide/StyleGuide'

const BUTTON_INDENT = 25

export const StyledNavWrapper = styled.div`
  width: ${(props) => (props.windowWidth > 800 ? undefined : '100%')};
  height: ${(props) => (props.windowWidth > 800 ? 'fit-content' : '10vh')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.windowWidth > 800 ? '20px 55px 0 55px' : '0')};
  margin-bottom: ${(props) => (props.windowWidth > 800 ? '5px' : undefined)};
  background-color: ${styleGuide.colors.SpaceBlack};
`
export const StyledBackButton = styled.span`
  color: ${styleGuide.colors.MatrixGreen};
  font-size: ${styleGuide.fonts.sizes.medium};
  cursor: pointer;
  margin-left: ${BUTTON_INDENT}px;
  height: fit-content;
`

export const StyledMainNav = styled.div`
  width: ${(props) => (props.windowWidth > 800 ? '100%' : undefined)};
  max-width: 1150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${styleGuide.colors.SpaceBlack};
  padding: ${(props) =>
    props.windowWidth > 800 ? '20px 55px 0 55px' : '0 25px'};
  padding: ${(props) => (props.noPadding ? '0' : undefined)};
`

export const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
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

export const StyledMobileMenu = styled.div``

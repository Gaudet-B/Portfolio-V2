import styled from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide'

export const StyledGalleryContainer = styled.div`
  width: 100%;
  padding: 35px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${styleGuide.colors.MatteGray};
`

export const StyledGalleryHeader = styled.h3`
  color: ${styleGuide.colors.WhiteSmoke};
  font-size: ${styleGuide.fonts.sizes.extraLarge};
  margin: 12px 0;
  text-shadow: 3px 3px 0px ${styleGuide.colors.SpaceBlack};
  letter-spacing: 5px;
`

export const StyledImageGrid = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1px;
`

export const StyledGalleryTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
`

export const StyledGalleryTab = styled.div`
  color: ${styleGuide.colors.GhostGray};
  font-size: ${styleGuide.fonts.sizes.small};
  text-shadow: 3px 3px 0px ${styleGuide.colors.SpaceBlack};
  letter-spacing: 5px;
  cursor: pointer;
  &:hover {
    color: ${styleGuide.colors.WhiteSmoke};
  }
  &[data-active='true'] {
    color: ${styleGuide.colors.WhiteSmoke};
    transform: scale(1.1);
  }
`

export const StyledTabSeparator = styled.span`
  color: ${styleGuide.colors.GhostGray};
  font-size: ${styleGuide.fonts.sizes.large};
  margin: 0 8px 0 6px;
`

// export const StyledFullScreenMask = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 2;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgb(26, 26, 26, 0.6);
// `

import styled from 'styled-components'
import StyleGuide from '../../StyleGuide/StyleGuide'

export const StyledFullScreenMask = styled.div`
  display: ${(props) => (props.active ? undefined : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background-color: rgb(26, 26, 26, 0.8);
`
export const StyledContent = styled.div`
  position: relative;
  z-index: 3;
  height: 80%;
  margin: 5% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const StyledCloseButton = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 82%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  > span {
    cursor: pointer;
    font-size: ${StyleGuide.fonts.sizes.extraLarge};
    &:hover {
      transition: 0.2s ease-in;
      color: ${StyleGuide.colors.GhostGray};
    }
  }
`

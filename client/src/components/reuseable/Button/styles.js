import styled from 'styled-components'
import styleGuide from '../../StyleGuide/StyleGuide'

// const FONT_SIZE = {
//     extraSmall: 10,
//     small: 12,
//     medium: 14,
//     large: 18,
// }

const FONT_COLOR = {
  light: styleGuide.colors.SpaceBlack,
  dark: styleGuide.colors.WhiteSmoke,
  disabled: styleGuide.colors.GhostGray,
}

const HOVER_FONT_COLOR = {
  light: styleGuide.colors.WhiteSmoke,
  dark: styleGuide.colors.SpaceBlack,
  disabled: styleGuide.colors.GhostGray,
}

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: transparent;
  color: ${(props) => (props.color ? FONT_COLOR[props.color] : undefined)};
  font-size: ${(props) => styleGuide.fonts.sizes[props.size]};
  border: ${(props) =>
    props.border ? '1px solid ' + FONT_COLOR[props.color] : 'none'};
  border-radius: 5px;
  padding: 6px;
  &:hover {
    color: ${(props) =>
      props.disabled
        ? undefined
        : props.border
        ? HOVER_FONT_COLOR[props.color]
        : undefined};
    background-color: ${(props) =>
      props.disabled
        ? undefined
        : props.border
        ? 'rgba(245, 245, 245)'
        : undefined};
    text-decoration: ${(props) => (props.border ? undefined : 'underline')};
  }
`

export const StyledChevron = styled.img`
  width: 8px;
  transform: ${(props) =>
    props.direction === 'down' ? 'rotate(270deg)' : 'rotate(90deg)'};
  margin-right: 5px;
`

export const StyledText = styled.div`
  min-width: ${(props) => props.textWidth || undefined};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: ${(props) => (props.leftSpacing ? '10px' : undefined)};
`

// export const StyledSpan = styled.span`
//     &:hover {
//         color: transparent;
//     }
// `;

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

export const StyledButton = styled.button<{
  $border?: boolean
  $color: keyof typeof FONT_COLOR
  $size?: keyof typeof styleGuide.fonts.sizes
  $disabled?: boolean
}>`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background-color: transparent;
  color: ${({ $color }) => ($color ? FONT_COLOR[$color] : undefined)};
  font-size: ${({ $size }) => styleGuide.fonts.sizes[$size || 'medium']};
  border: ${({ $border, $color }) =>
    $border ? '1px solid ' + FONT_COLOR[$color] : 'none'};
  border-radius: 5px;
  padding: 6px;
  &:hover {
    color: ${({ $border, $color, $disabled }) =>
      $disabled ? undefined : $border ? HOVER_FONT_COLOR[$color] : undefined};
    background-color: ${({ $border, $disabled }) =>
      $disabled ? undefined : $border ? 'rgba(245, 245, 245)' : undefined};
    text-decoration: ${({ $border }) => ($border ? undefined : 'underline')};
  }
`

export const StyledChevron = styled.img<{ $direction?: string }>`
  width: 8px;
  transform: ${({ $direction }) =>
    $direction === 'down' ? 'rotate(270deg)' : 'rotate(90deg)'};
  margin-right: 5px;
`

export const StyledText = styled.div<{
  $leftSpacing: boolean
  $textWidth?: string
}>`
  min-width: ${({ $textWidth }) => $textWidth || undefined};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: ${({ $leftSpacing }) => ($leftSpacing ? '10px' : undefined)};
`

// export const StyledSpan = styled.span`
//     &:hover {
//         color: transparent;
//     }
// `;

import styled from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide'

export const StyledFilterItem = styled.li<{ $active: boolean; $show: boolean }>`
  transform: scale(${({ $active, $show }) => ($active ? 1.1 : 1)});
  transition: 0.1s ease-out transform;
  cursor: pointer;
  list-style: none;
  margin: 0 12px;
  color: ${({ $active, $show }) =>
    $active
      ? styleGuide.colors.MatrixGreen
      : $show && !$active
      ? styleGuide.colors.WhiteSmoke
      : 'transparent'};
  font-weight: ${({ $active, $show }) => ($active ? 'bold' : 'normal')};
  font-size: ${styleGuide.fonts.sizes.small};
`

export const StyledFilterList = styled.ul<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
`

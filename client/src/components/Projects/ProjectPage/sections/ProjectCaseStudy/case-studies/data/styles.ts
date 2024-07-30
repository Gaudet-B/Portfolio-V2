import styled from 'styled-components'
import styleGuide from '../../../../../../StyleGuide/StyleGuide'

const { colors } = styleGuide

export const StyledBoldText = styled.strong`
  background-image: linear-gradient(
    90deg,
    ${colors.MatrixGreen},
    ${colors.LabelGreen},
    ${colors.MatrixGreen}
  );
  color: transparent;
  background-clip: text;
`

export const StyledText = styled.span`
  line-height: 16pt;
`

export const StyledListText = styled.div`
  text-align: left;
`

export const StyledList = styled.ul`
  text-align: left;
`

export const StyledListItem = styled.li`
  margin: 10px 0;
`

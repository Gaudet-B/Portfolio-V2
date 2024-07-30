import { StyledChevronContainer, StyledChevron } from './styles'
import arrow from '../../../../assets/icons/chevron-icon-light.png'

const ChevronButton = (props: {
  direction: 'left' | 'right'
  handleClick?: () => void
  noMargin?: boolean
  customHeight?: number
  customWidth?: number
  reverseHover?: boolean
}) => {
  return (
    <StyledChevronContainer
      direction={props.direction}
      noMargin={props.noMargin}
    >
      <StyledChevron
        onClick={props.handleClick}
        src={arrow}
        alt={'chevron'}
        height={props.customHeight || 40}
        width={props.customWidth || 34}
        reverseHover={props.reverseHover}
      />
    </StyledChevronContainer>
  )
}

export default ChevronButton

import { StyledChevronContainer, StyledChevron } from './styles'
import arrow from '../../../../assets/icons/chevron-icon-light.png'

export const ChevronButton = ({
  direction,
  noMargin,
  customHeight,
  customWidth,
  reverseHover,
  handleClick,
}: {
  direction: 'left' | 'right'
  noMargin?: boolean
  customHeight?: number
  customWidth?: number
  reverseHover?: boolean
  handleClick?: () => void
}) => {
  return (
    <StyledChevronContainer $direction={direction} $noMargin={noMargin}>
      <StyledChevron
        onClick={handleClick}
        src={arrow}
        alt={'chevron'}
        $height={customHeight || 40}
        $width={customWidth || 34}
        $reverseHover={reverseHover}
      />
    </StyledChevronContainer>
  )
}

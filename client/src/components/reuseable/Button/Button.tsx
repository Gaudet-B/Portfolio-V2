import chevron from '../../../assets/icons/chevron-icon-light.png'
import styleGuide from '../../StyleGuide/StyleGuide'
import { StyledButton, StyledChevron, StyledText } from './styles'

const Button = ({
  text,
  size,
  color,
  onClick,
  arrowDirection,
  textWidth,
  disabled,
}: {
  text: string
  size: keyof typeof styleGuide.fonts.sizes
  color: 'light' | 'dark' | 'disabled'
  onClick: () => void
  arrowDirection?: string
  textWidth?: string
  disabled?: boolean
}) => {
  const BORDER = arrowDirection ? undefined : true

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (onClick) {
      return onClick()
    }
  }

  const renderChevron = () => {
    return <StyledChevron $direction={arrowDirection} src={chevron} />
  }

  return (
    <StyledButton
      onClick={handleClick}
      $size={size}
      $color={disabled ? 'disabled' : color}
      $border={BORDER}
      $disabled={disabled}
    >
      {arrowDirection ? renderChevron() : null}
      <StyledText
        $leftSpacing={arrowDirection ? true : false}
        $textWidth={textWidth || undefined}
      >
        {text}
      </StyledText>
    </StyledButton>
  )
}

export default Button

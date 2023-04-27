import chevron from '../../../assets/icons/chevron-icon-light.png'
import { StyledButton, StyledChevron, StyledText } from './styles'

/**
 *
 * @param {ButtonProps} props
 * PropTypes:
 *  arrowDirection: string,
 *  text: string,
 *  size: oneOf([ 'extraSmall', 'small', 'medium', 'large' ]),
 *  color: oneOf( ['dark', 'light', 'disabled' ]),
 *  onClick: function,
 */
const Button = (props: {
  text: string
  size: string
  color: string
  onClick: () => void
  arrowDirection?: string
  textWidth?: string
  disabled?: boolean
}) => {
  const BORDER = props.arrowDirection ? undefined : true

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('click')
    e.preventDefault()
    if (props.onClick) {
      return props.onClick()
    }
  }

  const renderChevron = () => {
    return <StyledChevron direction={props.arrowDirection} src={chevron} />
  }

  return (
    <StyledButton
      onClick={handleClick}
      size={props.size}
      color={props.disabled ? 'disabled' : props.color}
      border={BORDER}
      disabled={props.disabled}
    >
      {props.arrowDirection ? renderChevron() : null}
      <StyledText
        leftSpacing={props.arrowDirection ? true : false}
        textWidth={props.textWidth || undefined}
      >
        {props.text}
      </StyledText>
    </StyledButton>
  )
}

export default Button

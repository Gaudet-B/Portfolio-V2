import Link from '../../../reuseable/Link'
import { StyledMask, StyledButton, StyledLabel } from './styles'

/**
 * LandingButton Component
 * @description - Displays each "button" on Landing page
 * @param props props
 * @returns JSX.Element
 */
const LandingButton = (props: {
  title: string
  windowWidth?: number
  image: string
}) => {
  return (
    <Link to={`/${props.title}`}>
      <StyledButton img={props.image}>
        {props.windowWidth && props.windowWidth > 800 ? <StyledMask /> : null}
      </StyledButton>
      <StyledLabel id={`${props.title}-label`}>
        <p>{props.title[0].toUpperCase() + props.title.substring(1)}</p>
      </StyledLabel>
    </Link>
  )
}

export default LandingButton

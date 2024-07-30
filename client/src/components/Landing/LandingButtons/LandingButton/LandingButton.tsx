import { useMemo } from 'react'
import Link from '../../../reuseable/Link'
import { StyledMask, StyledButton, StyledLabel } from './styles'

const MOBILE_STYLES = {
  display: 'flex',
  flexDirection: 'column-reverse',
  marginBottom: '48px',
} as React.CSSProperties

/**
 * LandingButton Component
 * @description - Displays each "button" on Landing page
 * @param props props
 * @returns JSX.Element
 */
const LandingButton = ({
  image,
  title,
  windowWidth,
}: {
  title: string
  windowWidth?: number
  image: string
}) => {
  const mobile = useMemo(() => {
    if (windowWidth && windowWidth < 800) return true
    return false
  }, [windowWidth])
  return (
    <Link to={`/${title}`} styles={mobile ? MOBILE_STYLES : {}}>
      <StyledButton $img={image} $mobile={mobile}>
        {windowWidth && windowWidth > 800 ? <StyledMask /> : null}
      </StyledButton>
      <StyledLabel id={`${title}-label`} $mobile={mobile}>
        <p>{title[0].toUpperCase() + title.substring(1)}</p>
      </StyledLabel>
    </Link>
  )
}

export default LandingButton

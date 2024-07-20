/* PROJECT */
import Link from '../../reuseable/Link'
import LandingButton from './LandingButton'

/* STYLES */
import {
  StyledButtonContainer,
  StyledCenterColumn,
  StyledSocialContainer,
  StyledSocialImage,
  StyledCopyrightContainer,
  StyledCopyrightText,
} from '../styles'

/* TYPES */
import { Images } from '../../../scripts/getImages'

/**
 * @description - Displays all Landing Page content, outside of background and typewriter
 * @param props
 * @returns JSX.Element
 */
const LandingButtons = (props: {
  images: Images
  windowWidth: number
  showSocial: boolean
}) => {
  const renderSocialLinks = () => {
    return (
      <StyledSocialContainer id="social" $responsive={props.windowWidth < 800}>
        <Link to={'http://linkedin.com/in/brian-f-gaudet'} popOut>
          <StyledSocialImage $img={props.images.icons.linkedIn} />
        </Link>
        <Link to={'http://github.com/Gaudet-B'} popOut>
          <StyledSocialImage $img={props.images.icons.github} />
        </Link>
      </StyledSocialContainer>
    )
  }

  const renderCopyright = () => {
    return (
      <StyledCopyrightContainer>
        <StyledCopyrightText>© BrianGaudet</StyledCopyrightText>
        <StyledCopyrightText>Est. 1986</StyledCopyrightText>
        <StyledCopyrightText>Boston, MA</StyledCopyrightText>
      </StyledCopyrightContainer>
    )
  }

  const renderProjectButton = () => {
    return (
      <LandingButton
        title={'projects'}
        windowWidth={props.windowWidth}
        image={props.images.icons.projects}
      />
    )
  }

  const renderContactButton = () => {
    return (
      <StyledCenterColumn>
        <LandingButton
          title={'contact'}
          windowWidth={props.windowWidth}
          image={props.images.icons.email}
        />
        {props.showSocial ? renderSocialLinks() : null}
        {props.showSocial ? renderCopyright() : null}
      </StyledCenterColumn>
    )
  }

  const renderResumeButton = () => {
    return (
      <LandingButton
        title={'resume'}
        windowWidth={props.windowWidth}
        image={props.images.icons.resume}
      />
    )
  }

  return (
    <StyledButtonContainer $responsive={props.windowWidth < 800}>
      {renderProjectButton()}
      {/* when component is in 'landscape' mode, display Contact in middle */}
      {props.windowWidth > 800 ? renderContactButton() : renderResumeButton()}
      {/* when component is in 'portrait' mode, display Contact at bottom */}
      {props.windowWidth > 800 ? renderResumeButton() : renderContactButton()}
    </StyledButtonContainer>
  )
}

export default LandingButtons

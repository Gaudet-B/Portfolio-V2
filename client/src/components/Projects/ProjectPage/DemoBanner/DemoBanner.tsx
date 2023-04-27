import { StyledBanner, StyledBannerText } from './styles'

const DemoBanner = (props: { text: string; handleClick: () => void }) => {
  return (
    <StyledBanner onClick={props.handleClick}>
      <StyledBannerText>{props.text}</StyledBannerText>
    </StyledBanner>
  )
}

export default DemoBanner

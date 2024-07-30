import { StyledBoldText, StyledLogoImage } from '../../styles'
import borderLogo from '../../../../../../../assets/border/hero_01.PNG'

const BorderLogoLink = ({
  handleClick,
}: {
  handleClick: (e: React.MouseEvent) => void
}) => {
  return (
    <span onClick={handleClick} style={{ cursor: 'pointer' }}>
      {/** @TODO add a click handler that switches to the Border project page (idx === 7) */}
      <StyledLogoImage src={borderLogo} width={40} height={25} />
      <StyledBoldText>Border</StyledBoldText>
    </span>
  )
}

export default BorderLogoLink

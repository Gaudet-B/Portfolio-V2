import BorderLogoLink from './BorderLogoLink'
import { StyledSummaryText } from '../../styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'

export const ViasatSummary = (handleClick: (e: React.MouseEvent) => void) => (
  <StyledSummaryText>
    One of <BorderLogoLink handleClick={handleClick} />
    's local enterprise clients, Viasat Inc. is a global communications company
    that believes everyone and everything in the world can be connected. Viasat
    is developing the ultimate global communications network to power
    high-quality, secure, and affordable connections that impact people's lives
    anywhere they are — on the ground, in the air or at sea.
  </StyledSummaryText>
)

export const SecurityScorecard: CaseStudy = {
  title: 'Security Scorecard',
  sections: [
    {
      type: 'default',
      image: {},
      text: <StyledSummaryText>Viasat's ...</StyledSummaryText>,
    },
  ],
}

export const ViasatTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy

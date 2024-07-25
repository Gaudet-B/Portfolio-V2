import { StyledSummaryText } from '../../styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'

export const EstimaticaSummary = () => {
  return (
    <StyledSummaryText>
      Estimatica is a mobile application that allows users to track their daily
      activities and habits. It was built using React Native and Firebase.
    </StyledSummaryText>
  )
}

export const EstimaticaCaseStudy = {
  title: 'Estimatica',
  sections: [],
}

export const EstimaticaTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy

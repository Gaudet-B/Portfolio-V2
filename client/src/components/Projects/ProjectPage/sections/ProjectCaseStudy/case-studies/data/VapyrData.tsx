import { StyledSummaryText } from '../../styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'

export const VapyrSummary = () => {
  return (
    <StyledSummaryText>
      Vapyr is a mobile application that allows users to track their daily
      activities and habits. It was built using React Native and Firebase.
    </StyledSummaryText>
  )
}

export const VapyrCaseStudy: CaseStudy = {
  title: 'Vapyr',
  sections: [],
}

export const VapyrTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy

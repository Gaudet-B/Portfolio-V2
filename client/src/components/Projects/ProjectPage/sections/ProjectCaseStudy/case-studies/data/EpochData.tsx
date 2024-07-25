import { StyledSummaryText } from '../../styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'

export const EpochSummary = () => {
  return (
    <StyledSummaryText>
      Epoch is a mobile application that allows users to track their daily
      activities and habits. It was built using React Native and Firebase.
    </StyledSummaryText>
  )
}

export const EpochCaseStudy = {
  title: 'Epoch',
  sections: [],
}

export const EpochTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy

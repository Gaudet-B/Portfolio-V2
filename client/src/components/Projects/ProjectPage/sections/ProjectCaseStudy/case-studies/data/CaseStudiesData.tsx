import { BruinAgileDev, BruinTechUpgrade, MetTelSummary } from './MetTelData'
import {
  SecurityScorecard,
  ViasatSummary,
  ViasatTempPlaceholder,
} from './ViasatData'
import { CaseStudies } from '../../../../../../../scripts/getCaseStudy'

export default {
  MetTel: {
    summary: MetTelSummary,
    cases: [BruinAgileDev, BruinTechUpgrade],
  },
  Viasat: {
    summary: ViasatSummary,
    cases: [SecurityScorecard, ViasatTempPlaceholder],
  },
  Border: {
    summary: () => <>{''}</>,
    cases: [],
  } as CaseStudies,
  Epoch: {
    summary: () => <>{''}</>,
    cases: [],
  } as CaseStudies,
  Estimatica: {
    summary: () => <>{''}</>,
    cases: [],
  } as CaseStudies,
  Vapyr: {
    summary: () => <>{''}</>,
    cases: [],
  } as CaseStudies,
}

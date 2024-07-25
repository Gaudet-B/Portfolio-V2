import { BorderSummary, MetTelBruin, ViasatScorecard } from './BorderData'
import { BruinAgileDev, BruinTechUpgrade, MetTelSummary } from './MetTelData'
import {
  SecurityScorecard,
  ViasatSummary,
  ViasatTempPlaceholder,
} from './ViasatData'
import { CaseStudies } from '../../../../../../../scripts/getCaseStudy'
import { EpochCaseStudy, EpochSummary, EpochTempPlaceholder } from './EpochData'

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
    summary: BorderSummary,
    cases: [MetTelBruin, ViasatScorecard],
  },
  Epoch: {
    summary: EpochSummary,
    cases: [EpochCaseStudy, EpochTempPlaceholder],
  },
  Estimatica: {
    summary: EpochSummary,
    cases: [EpochCaseStudy, EpochTempPlaceholder],
  },
  Vapyr: {
    summary: EpochSummary,
    cases: [EpochCaseStudy, EpochTempPlaceholder],
  },
}

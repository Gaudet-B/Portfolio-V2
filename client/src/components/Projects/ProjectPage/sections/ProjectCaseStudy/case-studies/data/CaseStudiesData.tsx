import { BorderSummary, MetTelBruin, ViasatScorecard } from './BorderData'
import { BruinAgileDev, BruinTechUpgrade, MetTelSummary } from './MetTelData'
import {
  SecurityScorecard,
  ViasatSummary,
  ViasatTempPlaceholder,
} from './ViasatData'
// import { CaseStudies } from '../../../../../../../scripts/getCaseStudy'
import { EpochCaseStudy, EpochSummary, EpochTempPlaceholder } from './EpochData'
import {
  EstimaticaCaseStudy,
  EstimaticaSummary,
  EstimaticaTempPlaceholder,
} from './EstimaticaData'
import { VapyrCaseStudy, VapyrSummary, VapyrTempPlaceholder } from './VapyrData'

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
    summary: EstimaticaSummary,
    cases: [EstimaticaCaseStudy, EstimaticaTempPlaceholder],
  },
  Vapyr: {
    summary: VapyrSummary,
    cases: [VapyrCaseStudy, VapyrTempPlaceholder],
  },
}

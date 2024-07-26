import { StyledSummaryText } from '../../styles'
import viasatLogo from '../../../../../../../assets/border/viasat_logo_default.png'
import mettelLogo from '../../../../../../../assets/border/mettel-logo-default.svg'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'

const NewParagraph = () => {
  return (
    <>
      <br />
      <br />
    </>
  )
}

export const BorderSummary = () => {
  return (
    <StyledSummaryText>
      Border, LLC is a team of design and dev innovators, thinkers, and
      changemakers focused on constructing modern web applications. They bring
      decades of startup thinking and big business understanding to help define,
      build, launch and market software.
      <NewParagraph />
      Border's success has come from delivering modern web UX strategy, design,
      architecture, and development to enterprise clients with the agility and
      velocity of a startup.
    </StyledSummaryText>
  )
}

export const MetTelBruin: CaseStudy = {
  title: 'MetTel',
  sections: [
    {
      type: 'default',
      image: {
        source: mettelLogo,
        width: 280,
        height: 150,
        alt: 'MetTel logo',
      },
      text: (
        <StyledSummaryText>
          MetTel is a leading provider of integrated digital communications
          solutions for enterprise customers.
          <NewParagraph />
        </StyledSummaryText>
      ),
    },
  ],
}

export const ViasatScorecard: CaseStudy = {
  title: 'Viasat',
  sections: [
    {
      type: 'default',
      image: {
        source: viasatLogo,
        width: 350,
        height: 150,
        alt: 'Viasat logo',
      },
      text: (
        <StyledSummaryText>
          Viasat Inc. is a global communications company that believes everyone
          and everything in the world can be connected.
          <NewParagraph />
          <NewParagraph />
        </StyledSummaryText>
      ),
    },
  ],
}

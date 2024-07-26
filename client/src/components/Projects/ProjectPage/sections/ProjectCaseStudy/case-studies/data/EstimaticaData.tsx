import { PropsWithChildren } from 'react'
import { StyledSummaryText } from '../../styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'
import styleGuide from '../../../../../../StyleGuide/StyleGuide'

import before from '../../../../../../../assets/estimatica/before_01.PNG'
import after from '../../../../../../../assets/estimatica/after_02.PNG'

const Link = ({ children }: PropsWithChildren) => {
  return (
    <a
      href="https://narrow.land"
      target="_blank"
      style={{
        color: `${styleGuide.colors.LabelGreen}`,
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}

export const EstimaticaSummary = () => {
  return (
    <StyledSummaryText>
      Estimatica is based out of Massachusetts and provides fast and accurate
      cost estimating services for commercial construction projects nationwide.
      Their website was in need of a facelift as the company had grown to reach
      new markets, so they hired <Link>Narrow.Land</Link>, a web design studio
      also based in Massachusetts.
    </StyledSummaryText>
  )
}

export const EstimaticaCaseStudy: CaseStudy = {
  title: 'Estimatica',
  sections: [
    {
      type: 'sandwich',
      images: [
        {
          source: 'https://via.placeholder.com/150x100',
          width: 150,
          height: 100,
          alt: '',
        },
        {
          source: 'https://via.placeholder.com/100x100',
          width: 100,
          height: 100,
          alt: '',
        },
      ],
      text: (
        <StyledSummaryText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </StyledSummaryText>
      ),
      secondaryText: (
        <StyledSummaryText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </StyledSummaryText>
      ),
    },
    {
      type: 'default',
      image: {
        source: before,
        width: 360,
        height: 280,
        alt: 'website UI before redesign',
      },
      text: (
        <StyledSummaryText>
          The biggest challenge I encountered with this job was discovering
          exactly what the end users really wanted and how to fit that within
          the technical constraints Estimatica had provided.
        </StyledSummaryText>
      ),
    },
    {
      type: 'reverse',
      image: {
        source: after,
        width: 400,
        height: 230,
        alt: 'website UI after redesign',
      },
      text: (
        <StyledSummaryText>
          My prior career in construction and project management allowed me to
          empathize with the end users - who were all estimators - despite
          having no access to them due to the nature of the subcontract
          agreement between myself and Estimatica.
        </StyledSummaryText>
      ),
    },
  ],
}

export const EstimaticaTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy

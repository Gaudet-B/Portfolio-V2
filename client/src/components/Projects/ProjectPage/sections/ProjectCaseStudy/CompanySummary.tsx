import { transform } from 'lodash'
import {
  StyledBoldText,
  StyledCompanySummaryContainer,
  StyledLogoImage,
  StyledSummaryText,
} from './styles'

// const COMPANY_SUMMARIES = {
//   MetTel: (
//     <StyledCompanySummaryContainer>
//       <span>
//         MetTel is a leading provider of integrated digital communications
//         solutions for enterprise customers, as well as <img />  Border's longest continuous
//         client.
//       </span>
//     </StyledCompanySummaryContainer>
//   ),
//   Viasat: (
//     <StyledCompanySummaryContainer>
//       Viasat Inc. is a global communications company that believes everyone and
//       everything in the world can be connected. For more than 30 years, Viasat
//       has helped shape how consumers, businesses, governments and militaries
//       around the world communicate. Today, the Company is developing the
//       ultimate global communications network to power high-quality, secure,
//       affordable, fast connections to impact people's lives anywhere they are—on
//       the ground, in the air or at sea.
//     </StyledCompanySummaryContainer>
//   ),
// } as const

export const CompanySummary = ({
  logo,
  title,
}: {
  logo: string
  title: 'MetTel' | 'Viasat'
}) => {
  // const summary = COMPANY_SUMMARIES[title]
  return (
    <StyledCompanySummaryContainer>
      {title === 'MetTel' ? (
        <StyledSummaryText>
          MetTel is a leading provider of integrated digital communications
          solutions for enterprise customers, as well as{' '}
          <StyledLogoImage
            src={logo}
            width={40}
            height={25}
            // style={{ transform: 'translateY(6px)', marginRight: '4px' }}
          />
          {/** @TODO add a click handler that switches to the Border project page */}
          <StyledBoldText>Border</StyledBoldText>'s longest continuous client. I
          maintained a relationship with this client for the entirety of my two
          year tenure at Border.
        </StyledSummaryText>
      ) : null}

      {title === 'Viasat' ? (
        <StyledSummaryText>
          Viasat Inc. is a global communications company that believes everyone
          and everything in the world can be connected. For more than 30 years,
          Viasat has helped shape how consumers, businesses, governments and
          militaries around the world communicate. Today, the Company is
          developing the ultimate global communications network to power
          high-quality, secure, affordable, fast connections to impact people's
          lives anywhere they are—on the ground, in the air or at sea.
        </StyledSummaryText>
      ) : null}
    </StyledCompanySummaryContainer>
  )
}

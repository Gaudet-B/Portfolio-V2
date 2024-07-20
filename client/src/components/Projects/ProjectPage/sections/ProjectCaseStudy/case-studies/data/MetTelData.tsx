import {
  StyledBoldText,
  StyledLogoImage,
  StyledSummaryText,
} from '../../styles'
/** @TODO really need an alias for this */
import borderLogo from '../../../../../../../assets/border/hero_01.PNG'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'

const NewParagraph = () => {
  return (
    <>
      <br />
      <br />
    </>
  )
}

export const MetTelSummary = (
  <StyledSummaryText>
    MetTel is a leading provider of integrated digital communications solutions
    for enterprise customers, as well as{' '}
    <StyledLogoImage src={borderLogo} width={40} height={25} />
    {/** @TODO add a click handler that switches to the Border project page */}
    <StyledBoldText>Border</StyledBoldText>'s longest continuous client. I
    maintained a relationship with this client for the entirety of my two year
    tenure at Border.
  </StyledSummaryText>
)

export const BruinAgileDev: CaseStudy = {
  title: 'Bruin Agile Development',
  sections: [
    {
      type: 'default',
      /** @TODO need image */
      image: '',
      text: (
        <StyledSummaryText>
          MetTel’s e-commerce and inventory management product - titled "Bruin"
          - is a legacy React application built from \'create-react-app\'
          scaffolding and written as mostly class components.
        </StyledSummaryText>
      ),
    },
    {
      type: 'reverse',
      /** @TODO need image */
      image: '',
      text: (
        <StyledSummaryText>
          Due to a problem that many full stack engineering teams face today - a
          lack of enthusiastic frontend engineers - I joined one of their agile
          teams as a dedicated frontend developer and quickly became a valuable
          resource for their more junior engineers, then later a key voice when
          making decisions regarding new feature implementation and application
          architecture.
        </StyledSummaryText>
      ),
    },
    {
      type: 'no-image',
      // image: null,
      text: (
        <StyledSummaryText>
          My most significant contribution to Bruin was participating in the
          final six months of development on and seeing the launch and
          deployment of a \"create a new product\" feature that took nearly two
          years to complete. However, the most enjoyable and rewarding memories
          were easily the pair-coding and collaboration sessions with other
          developers.
        </StyledSummaryText>
      ),
    },
  ],
}

export const BruinTechUpgrade: CaseStudy = {
  title: 'Bruin Technical Upgrade',
  sections: [
    {
      type: 'no-image',
      // image: null,
      text: (
        <StyledSummaryText>
          When MetTel began to prioritize some of its tech debt I was tapped to
          work directly with Martin Volerich (formerly Bloomberg, Meta), the new
          principal frontend engineer.
          <NewParagraph />
          After some deliberation, we chose to take a modular (conceptually
          similar to a micro-frontend) approach. This allowed us to begin
          refactoring our "Foundation" components into a coherent design system
          one by one, and gave Bruin engineers the ability begin importing and
          using the new components immediately from the npm registry.
        </StyledSummaryText>
      ),
    },
    {
      type: 'default',
      image: '',
      text: (
        <StyledSummaryText>
          Additionally, working in a fresh repository made it possible for us to
          move away from the headaches of a 'create-react-app' application that
          was ejected many years ago, as well as eliminate any reliance on
          webpack by moving to Vite for our bundler.
          <NewParagraph />
          Proper use of Typescript was essential to improving code standards and
          developer experience. Other technology choices included some of my
          favorite libraries from Tanner Linsley's Tanstack (react-query,
          react-table, react-virtual) and Jotai for simple, lightweight, and
          sane state management compared to Bruin's heavy reliance on Redux.
        </StyledSummaryText>
      ),
    },
    {
      type: 'reverse',
      image: '',
      text: (
        <StyledSummaryText>
          Lastly, as important as it was to modernize both Bruin itself and the
          experience of the developers working on it, we agreed that it was
          equally - if not more- important to take the opportunity to set a new
          standard for testing that included unit tests (vitest) and robust
          visual examples (Storybook). To accomplish this, we took a "Test
          Driven Development" (TDD) approach from day one.
        </StyledSummaryText>
      ),
    },
  ],
}

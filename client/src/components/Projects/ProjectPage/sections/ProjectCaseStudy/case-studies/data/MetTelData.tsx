import { StyledText } from './styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'
/** @TODO really need an alias for this */
import ecommerce from '../../../../../../../assets/border/case-studies/mettel/ecommerce.png'
import components from '../../../../../../../assets/border/case-studies/mettel/components-icon.svg'
import typescript from '../../../../../../../assets/border/case-studies/mettel/typescript-icon.svg'
import tests from '../../../../../../../assets/border/case-studies/mettel/unittests.webp'
import BorderLogoLink from './BorderLogoLink'

export const MetTelSummary = (handleClick: (e: React.MouseEvent) => void) => (
  <StyledText>
    MetTel is a leading provider of integrated digital communications solutions
    for enterprise customers, as well as{' '}
    <BorderLogoLink handleClick={handleClick} />
    's longest continuous client. I maintained a relationship with this client
    for the entirety of my two year tenure at Border.
  </StyledText>
)

export const BruinAgileDev: CaseStudy = {
  title: 'Bruin Agile Development',
  sections: [
    {
      type: 'sandwich',
      /** @TODO need image */
      image: {
        source: 'https://create-react-app.dev/img/logo.svg',
        width: 150,
        height: 150,
        alt: 'create-react-app logo',
      },
      text: (
        <StyledText>
          MetTel’s e-commerce and inventory management product - titled "Bruin"
          - is a legacy React application built from 'create-react-app'
          scaffolding and written as mostly class components.
        </StyledText>
      ),
      secondaryText: (
        <StyledText>
          Due to a problem that many full stack engineering teams face today - a
          lack of enthusiastic frontend engineers - I joined one of their agile
          teams as a dedicated frontend developer and quickly became a valuable
          resource for their more junior engineers, then later a key voice when
          making decisions regarding new feature implementation and application
          architecture.
        </StyledText>
      ),
    },
    {
      type: 'default',
      image: {
        source: ecommerce,
        width: 280,
        height: 200,
        alt: 'AI generated ecommerce UI design',
      },
      text: (
        <StyledText>
          My most significant contribution to Bruin was participating in the
          final six months of development on and seeing the launch and
          deployment of a "create a new product" feature that took nearly two
          years to complete. However, the most enjoyable and rewarding memories
          were easily the pair-coding and collaboration sessions with other
          developers.
        </StyledText>
      ),
    },
  ],
}

export const BruinTechUpgrade: CaseStudy = {
  title: 'Bruin Technical Upgrade',
  sections: [
    {
      type: 'sandwich',
      image: {
        source: components,
        width: 180,
        height: 150,
        alt: 'components icon by "icons.design" from Noun Project',
      },
      text: (
        <StyledText>
          When MetTel began to prioritize some of its tech debt I was tapped to
          work directly with Martin Volerich (formerly Bloomberg, Meta), the new
          principal frontend engineer.
        </StyledText>
      ),
      secondaryText: (
        <StyledText>
          After some research and deliberation, we chose to take a modular
          (conceptually similar to a micro-frontend) approach. This allowed us
          to begin refactoring our "Foundation" components into a coherent
          design system one by one, and gave Bruin engineers the ability begin
          importing and using the new components immediately from the npm
          registry.
        </StyledText>
      ),
    },
    {
      type: 'reverse',
      image: {
        source: 'https://vitejs.dev/logo-with-shadow.png',
        width: 200,
        height: 200,
        alt: '',
      },
      text: (
        <StyledText>
          Additionally, working in a fresh repository made it possible for us to
          move away from the headaches of a 'create-react-app' application that
          was ejected many years ago, as well as eliminate any reliance on
          webpack by moving to Vite for our bundler.
        </StyledText>
      ),
    },
    {
      type: 'reverse',
      images: [
        {
          source: typescript,
          width: 120,
          height: 120,
          alt: 'typescript logo',
        },
        {
          source: 'https://cdn.candycode.com/jotai/jotai-mascot.png',
          width: 120,
          height: 120,
          alt: 'jotai logo',
        },
        {
          source:
            'https://tanstack.com/_build/assets/logo-color-600w-Bx4vtR8J.png',
          width: 120,
          height: 120,
          alt: 'tanstack logo',
        },
      ],
      text: (
        <StyledText>
          Proper use of Typescript was essential to improving code standards and
          developer experience. Other technology choices included some of my
          favorite libraries from Tanner Linsley's Tanstack (react-query,
          react-table, react-virtual) and Jotai for simple, lightweight, and
          sane state management compared to Bruin's heavy reliance on Redux.
        </StyledText>
      ),
    },
    {
      type: 'default',
      image: {
        source: tests,
        width: 220,
        height: 220,
        alt: 'AI generated unit tests icon',
      },
      text: (
        <StyledText>
          Lastly, as important as it was to modernize both Bruin itself and the
          experience of the developers working on it, we agreed that it was
          equally - if not more- important to take the opportunity to set a new
          standard for testing that included unit tests (vitest) and robust
          visual examples (Storybook). To accomplish this, we took a "Test
          Driven Development" (TDD) approach from day one.
        </StyledText>
      ),
    },
  ],
}

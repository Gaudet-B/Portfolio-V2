import { PropsWithChildren } from 'react'
import {
  StyledBoldText,
  StyledList,
  StyledListItem,
  StyledListText,
  StyledText,
} from './styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'
import styleGuide from '../../../../../../StyleGuide/StyleGuide'
import codepen from '../../../../../../../assets/vapyr/codepen-react-17-inverse-data-flow.PNG'
import graphs from '../../../../../../../assets/vapyr/graphs.svg'
import appdesign from '../../../../../../../assets/vapyr/application-design.webp'
import waterfall from '../../../../../../../assets/vapyr/react-waterfall.webp'
import lifecycle from '../../../../../../../assets/vapyr/react-lifecycle-methods.png'
// import useeffect from '../../../../../../../assets/vapyr/react-useeffect.jpg'
import learnreact from '../../../../../../../assets/vapyr/learn-react.png'

const List = ({ children }: PropsWithChildren) => {
  return <StyledList>{children}</StyledList>
}

const Item = ({ children }: PropsWithChildren) => {
  return <StyledListItem>{children}</StyledListItem>
}

const GreenText = ({ children }: PropsWithChildren) => {
  return <StyledBoldText>{children}</StyledBoldText>
}

const BoldText = ({ children }: PropsWithChildren) => {
  return <strong>{children}</strong>
}

const ItalicText = ({ children }: PropsWithChildren) => {
  return <em>{children}</em>
}

const Link = ({ children }: PropsWithChildren) => {
  return (
    <a
      href="https://17.reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow"
      target="_blank"
      style={{
        color: styleGuide.colors.LabelGreen,
        // fontWeight: 'bold',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}

export const VapyrSummary = () => {
  return (
    <StyledText>
      Vapyr Analytics is a data-driven startup that partners with loacal and
      state governments to monitor water treatment facilities and alert the
      proper authorities when compliance standards are not met.
    </StyledText>
  )
}

export const VapyrCaseStudy: CaseStudy = {
  title: 'Vapyr',
  sections: [
    {
      type: 'reverse',
      image: {
        source: graphs,
        width: 180,
        height: 180,
        alt: 'graphs and charts icons',
      },
      text: (
        <StyledText>
          My contribution to Vapyr's web application was minor, as this was the
          first work I would officially be paid for. Both partners were
          backend-focused - one was a data scientist and the other a computer
          science graduate with server-side experience.
        </StyledText>
      ),
    },
    {
      type: 'reverse',
      // image: {},
      text: (
        <StyledText>
          The problem, however, was an interesting one, and one that I was well
          suited for. I had recently completed an intensive 14-week coding
          bootcamp where I excelled in JavaScript and really enjoyed working
          with React.
        </StyledText>
      ),
      secondaryText: (
        <StyledText>
          Vapyr's application was built with React and Redux. One of the
          partners had paid for a short "learn React" course and used that
          knowledge to spin up a pretty sleek website. That is, until they began
          incorporating some fairly complex data-visualization features.
        </StyledText>
      ),
    },
    {
      type: 'reverse',
      image: {
        source: appdesign,
        width: 250,
        height: 200,
        alt: 'apllication design icon',
      },
      text: (
        <StyledText>
          I was tasked with first fixing the bug that had eluded their
          developers for countless hours, then advising them on potential
          changes to application design.
        </StyledText>
      ),
    },
    {
      type: 'default',
      images: [
        // {
        //   source: 'https://via.placeholder.com/100x70',
        //   width: 100,
        //   height: 70,
        //   alt: 'placeholder',
        // },
        {
          source: lifecycle,
          width: 180,
          height: 100,
          alt: 'React component lifecycle flowchart',
        },
        {
          source: waterfall,
          width: 120,
          height: 100,
          alt: 'placeholder',
        },
      ],
      text: (
        <StyledListText>
          The issues I found were common React "footguns" as they say. Among
          these were:
          <List>
            <Item>overuse of 'useEffect'</Item>
            <Item>
              reliance on 'useState' despite having a powerful global state
              manager (Redux) available
            </Item>
            <Item>
              data "<BoldText>waterfalls</BoldText>" that were difficult to keep
              track of
            </Item>
            <Item>
              and something that has been debated to death over the years -
              separation of concerns when it comes to components
            </Item>
          </List>
        </StyledListText>
      ),
    },
    {
      type: 'reverse',
      image: {
        source: codepen,
        width: 300,
        height: 220,
        alt: 'React code sample from CodePen',
      },
      text: (
        <StyledText>
          The bug was ironed out by splitting components into smaller parts and
          mapping out the the flow of props, then creating an inverse data flow.
        </StyledText>
      ),
      secondaryText: (
        <StyledText>
          <ItalicText>
            *see <Link>React 17 docs</Link> on inverse data flow
          </ItalicText>
        </StyledText>
      ),
    },
    {
      type: 'reverse',
      text: (
        <StyledText>
          <StyledText>
            I won't weight in on the "
            <BoldText>smart vs. dummb components</BoldText>" debate, or the "
            <BoldText>controlled vs. uncontrolled components</BoldText>" debate,
            but I will say what I told them - "
            <GreenText>
              Settling on a code style is valuable, especially as the
              application grows."
            </GreenText>{' '}
            And as far as components go - "
            <GreenText>Make sure they only do one thing!</GreenText>"{' '}
          </StyledText>
        </StyledText>
      ),
      secondaryText: (
        <StyledText>
          For example, if a component is supposed to render a button, make sure
          that's all it does - it shouldn't also conditionally render a link, or
          conditionally render plain text, etc.
        </StyledText>
      ),
    },
    {
      type: 'default',
      image: {
        source: learnreact,
        width: 250,
        height: 150,
        alt: 'image of a "data waterfall"',
      },
      text: (
        <StyledListText>
          Ultimately, a simple set of <BoldText>code rules</BoldText> were
          adopted, including:
          <List>
            <Item>Smaller, more intentional components</Item>
            <Item>
              Well-defined "<BoldText>data waterfalls</BoldText>" with loader
              components
            </Item>
            <Item>
              Using Redux to handle application data, and application (local)
              state to handle component (frontend) logic
            </Item>
          </List>
        </StyledListText>
      ),
    },
  ],
}

export const VapyrTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy

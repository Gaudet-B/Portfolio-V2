import { StyledText } from './styles'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'
import BorderLogoLink from './BorderLogoLink'
import network from '../../../../../../../assets/border/case-studies/viasat/network-security-icon.svg'
import startup from '../../../../../../../assets/border/case-studies/viasat/startup-icon.webp'

const NewParagraph = () => {
  return (
    <>
      <br />
      <br />
    </>
  )
}

export const ViasatSummary = (handleClick: (e: React.MouseEvent) => void) => (
  <StyledText>
    One of <BorderLogoLink handleClick={handleClick} />
    's local enterprise clients, Viasat Inc. is a global communications company
    that believes everyone and everything in the world can be connected. Viasat
    is developing the ultimate global communications network to power
    high-quality, secure, and affordable connections that impact people's lives
    anywhere they are — on the ground, in the air or at sea.
  </StyledText>
)

export const SecurityScorecard: CaseStudy = {
  title: 'Security Scorecard',
  sections: [
    {
      type: 'default',
      image: {
        source: network,
        width: 250,
        height: 250,
        alt: 'network security icon by Candy Design from Noun Project',
      },
      text: (
        <StyledText>
          The nature of Viasat's business dictates they adhere to the strictest
          security standards. Border was contracted to work directly with the
          Security Engineering team, which led those engineers to architect new
          development environments that would soon be adopted company-wide.
          These "boxes" lived on EC2 instances, could be spun up fairly quickly,
          and were only accessible via SSH.
        </StyledText>
      ),
    },
    {
      type: 'sandwich',
      image: {
        source: startup,
        width: 200,
        height: 200,
        alt: 'AI generated startup icon',
      },
      text: (
        <StyledText>
          Border's job was to architecht and maintain a modern frontend for an
          existing application that tracked compliance of all applications and
          systems company-wide, based on ISO/IEC standards.
        </StyledText>
      ),
      secondaryText: (
        <StyledText>
          I was added to the team to do something Border doesn't typically offer
          - full stack development. This allowed us (Border) to create a small
          "team within a team" in order to build complete features
          front-to-back, while still maintaining our principle of operating with
          startup-like speed.
        </StyledText>
      ),
    },
    {
      type: 'no-image',
      text: (
        <StyledText>
          In the 18 months I spent working with the Viasat Security Engineering
          team, large numbers of new users were on-boarded after a fairly public
          acquisition. This challenged us to find a balance between scaling
          backend infrastructure and being responsive to user feedback with new
          features.
          <NewParagraph />
          <NewParagraph />
          Particularly, keeping application data synchronized was a challenge
          due to the automated nature of tracking compliance on these systems.
          Relevant data came from three separate sources, users were able to
          make some changes via the UI, and a Redis cache - along with some
          tricky optimistic updates - was used to ensure a completely seemless
          user experience with zero loading screens or spinners after initial
          load.
        </StyledText>
      ),
    },
    {
      type: 'reverse',
      images: [
        {
          source:
            'https://www.postgresql.org/media/img/about/press/elephant.png',
          width: 200,
          height: 200,
          alt: 'PostgreSQL logo',
        },
        {
          source:
            'https://b2332085.smushcdn.com/2332085/wp-content/uploads/2021/07/codedx-cover.png?lossy=1&strip=1&webp=1',
          width: 200,
          height: 80,
          alt: 'CodeDX logo',
        },
        {
          source:
            'https://redis.io/wp-content/uploads/2024/04/Logotype.svg?auto=webp&quality=85,75&width=120',
          width: 150,
          height: 45,
          alt: 'Redis logo',
        },
      ],
      text: (
        <StyledText>
          I worked on a wide variety of tasks, including React components (React
          18 + Typescript), HTML email services (MJML), automated tasks (Python
          lambdas + Terraform), data synchronization (Code DX + PostgreSQL +
          Redis), and a Python + Flask backend.
        </StyledText>
      ),
    },
  ],
}

export const ViasatTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy

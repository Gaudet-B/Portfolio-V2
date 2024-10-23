import { PropsWithChildren } from 'react'
import { CaseStudy } from '../../../../../../../scripts/getCaseStudy'
import styleGuide from '../../../../../../StyleGuide/StyleGuide'
import { StyledText } from './styles'

import before from '../../../../../../../assets/estimatica/before_01.PNG'
import after from '../../../../../../../assets/estimatica/after_02.PNG'
import wplogo from '../../../../../../../assets/estimatica/wordpress-logo-black-n-white.jpg'
import jscomponents from '../../../../../../../assets/estimatica/js-component-icon.svg'
import openinnewtab from '../../../../../../../assets/open-in-new-tab.svg'
import jsheader from '../../../../../../../assets/estimatica/jsheader.png'
import OpenInNewTab from '../../../../../../reuseable/icons/OpenInNewTab'

const Link1 = ({ children }: PropsWithChildren) => {
  return (
    <a
      href="https://estimaticainc.com/"
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

const Link2 = ({ children }: PropsWithChildren) => {
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

const Link3 = ({ children }: PropsWithChildren) => {
  return (
    <a
      href="https://estimaticainc.com"
      target="_blank"
      style={{
        color: `${styleGuide.colors.LabelGreen}`,
        fontWeight: 'bold',
        // textDecoration: 'none',
        display: 'flex',
        gap: '3px',
      }}
    >
      {children}
      <OpenInNewTab color={styleGuide.colors.LabelGreen} size={20} />
    </a>
  )
}

export const EstimaticaSummary = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'center',
      }}
    >
      <StyledText>
        Based in Massachusetts, <Link1>Estimatica Inc.</Link1> provides fast and
        accurate cost estimating services for commercial construction projects
        nationwide. Their website was in need of a facelift as the company had
        grown to reach new markets, so they hired <Link2>Narrow.Land</Link2>, a
        web design studio also based in Massachusetts.
      </StyledText>
      <Link3>visit estimaticainc.com</Link3>
    </div>
  )
}

export const EstimaticaCaseStudy: CaseStudy = {
  title: 'Estimatica',
  sections: [
    {
      type: 'default',
      image: {
        source: wplogo,
        width: 120,
        height: 120,
        alt: '',
      },
      text: (
        <StyledText>
          Narrow Land was dealing with some turmoil in the Wordpress developer
          market, which led to some temporary work for me. I was presented with
          a reasonable deadline, as well as very clear expectations and a strict
          process.
        </StyledText>
      ),
    },
    {
      type: 'sandwich',
      images: [
        {
          source: jscomponents,
          width: 100,
          height: 100,
          alt: 'custom components icon',
        },
        {
          source: jsheader,
          width: 150,
          height: 100,
          alt: 'JavaScript library icon',
        },
      ],
      text: (
        <StyledText>
          After brushing up on modern Wordpress standards (I had some past
          experience before I became a web developer), the designs and process
          provided were easy to follow.
        </StyledText>
      ),
      secondaryText: (
        <StyledText>
          The most challenging - and for me the most enjoyable - requirements
          were custom JavaScript components I wrote to accommodate sliders,
          carousels, etc.
        </StyledText>
      ),
    },
    {
      type: 'reverse',
      image: {
        source: before,
        width: 360,
        height: 280,
        alt: 'website UI before redesign',
      },
      text: <StyledText>Website layout before redesign.</StyledText>,
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
        <StyledText>
          Website layout - with large hero image and content focus - after
          redesign.
        </StyledText>
      ),
    },
  ],
}

export const EstimaticaTempPlaceholder = {
  title: 'Placeholder - SHOULD NOT RENDER',
  sections: [],
} as CaseStudy

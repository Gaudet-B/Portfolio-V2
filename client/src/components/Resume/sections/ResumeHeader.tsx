import { PropsWithChildren } from 'react'
import OpenInNewTab from '../../reuseable/icons/OpenInNewTab'
import styleGuide from '../../StyleGuide/StyleGuide'
import git from '../../../assets/icons/GitHub.jpg'
import linked from '../../../assets/icons/LinkedIn.jpg'
import email from '../../../assets/icons/email-icon.png'

const LinksContainer = ({ children }: PropsWithChildren) => (
  <div
    className="d-flex flex-column text-end pt-4"
    style={{
      alignItems: 'flex-end',
      width: 'fit-content',
      fontSize: '14px',
    }}
  >
    {children}
  </div>
)

type Img = {
  source: string
  alt: string
}

const ResumeLink = ({
  img,
  newWindow,
  text,
  to,
}: {
  img: Img
  newWindow: boolean
  text: string
  to: string
}) => (
  <a
    className="my-1 d-flex flex-row link link-light text-decoration-none"
    href={to}
    target={newWindow ? '_blank' : undefined}
    style={{ width: 'fit-content', whiteSpace: 'nowrap' }}
  >
    <img
      className="mx-2 border rounded"
      src={img.source}
      alt={img.alt}
      style={{ height: '30px', width: '30px' }}
    />
    <p className="mt-1 me-1">{text}</p>
    <OpenInNewTab color={styleGuide.colors.GhostGray} size={15} />
  </a>
)

export const ResumeLinks = () => (
  <LinksContainer>
    <ResumeLink
      img={{
        source: linked,
        alt: 'LinkedIn Logo',
      }}
      newWindow
      text={'linkedin.com/in/brian-f-gaudet'}
      to={'https://linkedin.com/in/brian-f-gaudet'}
    />

    <ResumeLink
      img={{
        source: email,
        alt: 'Email Icon',
      }}
      newWindow={false}
      text={'brian.f.gaudet@gmail.com'}
      to={'mailto: brian.f.gaudet@gmail.com'}
    />

    <ResumeLink
      img={{
        source: git,
        alt: 'GitHub Logo',
      }}
      newWindow
      text={'github.com/Gaudet-B'}
      to={'https://github.com/Gaudet-B'}
    />
  </LinksContainer>
)

const ResumeHeader = ({ isDesktop }: { isDesktop: boolean }) => (
  <div className="d-flex flex-row justify-content-between">
    <div
      className="d-flex flex-column"
      style={isDesktop ? { width: '70%' } : { width: '100%' }}
    >
      <h1 className="display-2 text-white-50" style={{ whiteSpace: 'nowrap' }}>
        BRIAN GAUDET
      </h1>
      <p>
        Highly motivated, self-sufficient and learning-obsessed developer who is
        seeking to contribute to or lead web development projects with a focus
        on delivering maintainable code and a good developer experience.
      </p>
      <br />
      <p>
        Successful contributions to enterprise teams have taught me both the
        challenge and reward associated with developing, deploying and
        maintaining modern web applications. Experience in management, training,
        leadership and business operations will continue to guide me as I grow
        in my career as a software engineer.
      </p>
    </div>

    {isDesktop ? <ResumeLinks /> : null}
  </div>
)

export default ResumeHeader

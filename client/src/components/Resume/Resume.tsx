import { useState, useEffect } from 'react'

import Navigation from '../Navigation'

import { StyledResumeContainer } from './styles'
import { StyledBackground } from '../Projects/styles'

import git from '../../assets/icons/GitHub.jpg'
import linked from '../../assets/icons/LinkedIn.jpg'
import email from '../../assets/icons/email-icon.png'
import styleGuide from '../StyleGuide/StyleGuide'

const Resume = () => {
  // functions that track height and width of the window for responsive components
  const getWindowWidth = () => {
    return window.innerWidth
  }

  // width of window are stored in local state
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  // function to be added to the onResize event listener
  const resizeWindow = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    // add Bootstrap to document, remove when component unmounts
    const link = document.createElement('link')
    link.href =
      'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    link.rel = 'stylesheet'
    link.integrity =
      'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
    link.crossOrigin = 'anonymous'
    document.body.appendChild(link)

    // allow scrolling, in case that was disabled from Landing component
    document.querySelector('html')?.setAttribute('style', 'overflow: auto;')
    // add the resizeWindow function to the window as an event listener
    window.addEventListener('resize', resizeWindow)
    // remove event listener and link when component unmounts
    return () => {
      window.removeEventListener('resize', resizeWindow)
      document.body.removeChild(link)
    }
  }, [])

  return (
    <StyledBackground>
      <div className={`${windowWidth > 900 ? 'px-5' : ''} d-flex flex-column`}>
        <Navigation windowWidth={windowWidth} />
        <div
          className={`rounded text-light d-flex flex-column justify-content-center ${
            windowWidth > 500 ? 'py-2' : 'py-1'
          }`}
          style={{
            backgroundColor: styleGuide.colors.SpaceBlack,
            maxWidth: '1000px',
            margin: 'auto',
          }}
        >
          <StyledResumeContainer
            className={'border border-light rounded p-4'}
            style={{ backgroundColor: styleGuide.colors.GrayShadow }}
          >
            <div className="d-flex flex-row justify-content-between">
              <div
                className="d-flex flex-column"
                style={windowWidth > 900 ? { width: '70%' } : { width: '100%' }}
              >
                <h1
                  className="display-2 text-white-50"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  BRIAN GAUDET
                </h1>
                <p>
                  Highly motivated, self-sufficient and learning-obsessed
                  developer who is seeking to contribute to or lead web
                  development projects with a focus on delivering maintainable
                  code and a good developer experience.
                </p>
                <br />
                <p>
                  Successful contributions to enterprise teams have taught me
                  both the challenge and reward associated with developing,
                  deploying and maintaining modern web applications. Experience
                  in management, training, leadership and business operations
                  will continue to guide me as I grow in my career as a software
                  engineer.
                </p>
              </div>

              {windowWidth > 900 ? (
                <div
                  className="d-flex flex-column text-end pt-4"
                  style={{
                    alignItems: 'flex-end',
                    width: 'fit-content',
                    fontSize: '14px',
                  }}
                >
                  <a
                    className="my-1 d-flex flex-row link link-light text-decoration-none"
                    href="http://linkedin.com/in/brian-f-gaudet"
                    /** @TODO add icon to communicate "new tab" to user (w3 might have SVG) */
                    target="_blank"
                    style={{ width: 'fit-content', whiteSpace: 'nowrap' }}
                  >
                    <p className="mt-1">linkedin.com/in/brian-f-gaudet</p>
                    <img
                      className="mx-2 border rounded"
                      src={linked}
                      alt="?"
                      style={{ height: '30px', width: '30px' }}
                    />
                  </a>

                  <a
                    className="my-1 d-flex flex-row link link-light text-decoration-none"
                    href="mailto: brian.f.gaudet@gmail.com"
                  >
                    <p className="mt-1">brian.f.gaudet@gmail.com</p>
                    <img
                      className="mx-2 border rounded bg-light"
                      src={email}
                      alt="?"
                      style={{ height: '30px', width: '30px' }}
                    />
                  </a>

                  <a
                    className="my-1 d-flex flex-row link link-light text-decoration-none"
                    href="http://github.com/Gaudet-B"
                    /** @TODO add icon to communicate "new tab" to user (w3 might have SVG) */
                    target="_blank"
                  >
                    <p className="mt-1">github.com/Gaudet-B</p>
                    <img
                      className="mx-2 border rounded"
                      src={git}
                      alt="?"
                      style={{ height: '30px', width: '30px' }}
                    />
                  </a>
                </div>
              ) : null}
            </div>

            {/* displays social links below summary on smaller screens */}
            {windowWidth > 900 ? null : (
              <div
                className="d-flex flex-column text-end"
                style={{
                  alignItems: 'flex-end',
                  width: '100%',
                  padding: '0px',
                  fontSize: '14px',
                }}
              >
                <a
                  className="my-1 d-flex flex-row link link-light text-decoration-none"
                  href="http://linkedin.com/in/brian-f-gaudet"
                  /** @TODO add icon to communicate "new tab" to user (w3 might have SVG) */
                  target="_blank"
                  style={{ width: 'fit-content' }}
                >
                  <p className="mt-1">linkedin.com/in/brian-f-gaudet</p>
                  <img
                    className="mx-2 border rounded"
                    src={linked}
                    alt="?"
                    style={{ height: '30px', width: '30px' }}
                  />
                </a>
                <a
                  className="my-1 d-flex flex-row link link-light text-decoration-none"
                  href="mailto: brian.f.gaudet@gmail.com"
                >
                  <p className="mt-1">brian.f.gaudet@gmail.com</p>
                  <img
                    className="mx-2 border rounded bg-light"
                    src={email}
                    alt="?"
                    style={{ height: '30px', width: '30px' }}
                  />
                </a>
                <a
                  className="my-1 d-flex flex-row link link-light text-decoration-none"
                  href="http://github.com/Gaudet-B"
                  /** @TODO add icon to communicate "new tab" to user (w3 might have SVG) */
                  target="_blank"
                >
                  <p className="mt-1">github.com/Gaudet-B</p>
                  <img
                    className="mx-2 border rounded"
                    src={git}
                    alt="?"
                    style={{ height: '30px', width: '30px' }}
                  />
                </a>
              </div>
            )}

            <div className="mx-5 border-top border-secondary my-4"></div>
            <h3 className="mt-5 mb-2 text-white-50">
              TECHNOLOGIES & FRAMEWORKS
            </h3>

            <div className={`my-4 ${windowWidth > 800 ? 'mx-5' : 'mx-2'}`}>
              {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '2rem',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
                className={`mb-4 fs-5 ${windowWidth > 500 ? 'pe-4' : ''}`}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span>{'React.js, '}</span>
                  <span>{'Next.js, '}</span>
                  <span>{'Typescript'}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span>{'AWS, '}</span>
                  <span>{'Serverless, '}</span>
                  <span>{'Vercel, '}</span>
                  <span>{'Git'}</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span>{'Next.js, '}</span>
                  <span>{'Python, '}</span>
                  <span>{'SQL'}</span>
                </div>
              </div> */}
              <p className="mb-5">
                React.js, Next.js, JavaScript, Vite.js, AWS, Python, Flask,
                Java, Node.js, MySQL, PostgreSQL, MongoDB, TailwindCSS, GitHub,
                Visual Studio Code, Selenium, terraform, Docker, react-query
              </p>
            </div>

            <h3 className="mt-5 mb-3 text-white-50">PROFESSIONAL EXPERIENCE</h3>

            <div
              className={
                windowWidth > 900
                  ? 'mx-5 my-4 d-flex flex-row justify-content-between'
                  : 'my-4 d-flex flex-row justify-content-between'
              }
            >
              <div
                className="d-flex flex-column"
                style={windowWidth > 900 ? { width: '19%' } : { width: '24%' }}
              >
                {windowWidth > 500 ? (
                  <h5>Border, LLC</h5>
                ) : (
                  <h6>Border, LLC</h6>
                )}
                <h6>San Diego, CA</h6>
                <h6>2022 - 2024</h6>
              </div>

              <div
                className=""
                style={windowWidth > 900 ? { width: '80%' } : { width: '75%' }}
              >
                <h5
                  className={
                    windowWidth > 900
                      ? 'fw-normal fst-italic ms-4'
                      : 'fw-normal fst-italic ms-5'
                  }
                >
                  Frontend Developer
                </h5>
                <ul>
                  <li className="mb-3">
                    Contributions included an application used to track security
                    compliance of internal teams, and modernizing a legacy React
                    application with Typescript and Vite.
                  </li>
                  <li className="mb-3">
                    Maintained daily and weekly communications as a member of
                    agile teams across multiple enterprise clients, including
                    Viasat (San Diego) and MetTel (New York).
                  </li>
                  <li>
                    Consistently delivered features in frontend (React.js) and
                    fullstack (React.js, Python) roles.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={
                windowWidth > 900
                  ? 'mx-5 my-4 d-flex flex-row justify-content-between'
                  : 'my-4 d-flex flex-row justify-content-between'
              }
            >
              <div
                className="d-flex flex-column"
                style={windowWidth > 900 ? { width: '19%' } : { width: '24%' }}
              >
                {windowWidth > 500 ? (
                  <h5>Self-Employed</h5>
                ) : (
                  <h6>Self-Employed</h6>
                )}
                <h6>Remote</h6>
                <h6>2021 - present</h6>
              </div>

              <div
                className=""
                style={windowWidth > 900 ? { width: '80%' } : { width: '75%' }}
              >
                <h5
                  className={
                    windowWidth > 900
                      ? 'fw-normal fst-italic ms-4'
                      : 'fw-normal fst-italic ms-5'
                  }
                >
                  Freelance Software Developer
                </h5>
                <ul>
                  <li className="mb-3">
                    Obtain new clients via Upwork or personal/professional
                    networking.
                  </li>
                  <li className="mb-3">
                    Specialize in automation projects, API interfaces, and web
                    development.
                  </li>
                  <li>
                    Target new clients with frontend and web development work,
                    specifically React.js and Next.js.
                  </li>
                </ul>
              </div>
            </div>

            {/* <div
              className={
                windowWidth > 900
                  ? 'mx-5 mt-4 mb-5 d-flex flex-row justify-content-between'
                  : 'my-4 d-flex flex-row justify-content-between'
              }
            >
              <div
                className="d-flex flex-column"
                style={windowWidth > 900 ? { width: '14%' } : { width: '24%' }}
              >
                {windowWidth > 500 ? (
                  <h5>BottleBoon Colsulting, LLC</h5>
                ) : (
                  <h6>BottleBoon Colsulting, LLC</h6>
                )}
                <h6>San Diego, CA</h6>
                <h6>2020 - 2021</h6>
              </div>

              <div
                className=""
                style={windowWidth > 900 ? { width: '85%' } : { width: '75%' }}
              >
                <h5
                  className={
                    windowWidth > 900
                      ? 'fw-normal fst-italic ms-4'
                      : 'fw-normal fst-italic ms-5'
                  }
                >
                  Owner
                </h5>
                <ul>
                  <li>
                    Partnered with two former co-workers to form an LLC that
                    focused hospitality consulting during the early days of the
                    coronavirus pandemic.
                  </li>
                  <li>
                    Obtained a multi-year contract from a Fortune 500 Real
                    Estate company to operate food and beverage venues on its
                    campuses.
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="mx-5 border-top border-secondary my-4"></div>
            <h3 className="mt-5 mb-3 text-white-50">EDUCATION</h3>

            <div className="mx-4">
              <ul className="mb-5">
                <li className="mb-3">
                  <strong>Coding Dojo </strong> - San Jose, CA (online) -{' '}
                  <strong> Full-Stack Developer Certificate - </strong> Python,
                  MERN, Java - 2021
                </li>
                <li className="mb-3">
                  <strong>Court of Master Sommeliers </strong> - Americas -{' '}
                  <strong> Introductory Course Certification - </strong> 2017
                </li>
                <li>
                  <strong>Salem State University </strong> - Salem, MA -{' '}
                  <strong> B.S. Business Administration - </strong> 2010{' '}
                </li>
              </ul>
            </div>

            <div className="mx-5 border-top border-secondary my-4"></div>
            <div className="text-center">
              <a
                href="https://drive.google.com/uc?id=1E67NoxGN3Vz7_lKF2YxiQ_nR3YMg_Z2u&export=download"
                className="link link-light text-decoration-underline"
                style={{ margin: 'auto' }}
              >
                download a printable copy of this resume
              </a>
            </div>
          </StyledResumeContainer>
        </div>
      </div>
    </StyledBackground>
  )
}

export default Resume

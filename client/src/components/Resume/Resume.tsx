import { useState, useEffect } from 'react'

import Navigation from '../Navigation'

import styles from '../../styles/resume.style.module.css'
import navStyles from '../../styles/nav.style.module.css'

import git from '../../assets/icons/GitHub.jpg'
import linked from '../../assets/icons/LinkedIn.jpg'
import email from '../../assets/icons/email-icon.png'

const Resume = () => {
  // functions that track height and width of the window for responsive components
  const getWindowHeight = () => {
    return window.innerHeight
  }
  const getWindowWidth = () => {
    return window.innerWidth
  }

  // height and width of window are stored in local state
  const [windowHeight, setWindowHeight] = useState(getWindowHeight())
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())
  // const [loading, setLoading] = useState(true)
  const [loading, setLoading] = useState(false)

  // import classnames utility --> https://github.com/JedWatson/classnames //
  // const classNames = require("classnames")

  // function that displays loading spinner
  const loadData = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  // function to be added to the onResize event listener
  const resizeWindow = () => {
    setWindowHeight(window.innerHeight)
    setWindowWidth(window.innerWidth)
    // console.log(windowHeight)
    // console.log(windowWidth)
  }

  useEffect(() => {
    // loadData()

    // add Bootstrap to document, remove when component unmounts (return statement - line 61)
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

  // combines classes for large and small screens
  const classArr = [styles.background, 'px-5', styles.mainContent]
  const responsiveArr = [styles.background, styles.mainContent]
  // const mainClass = classNames(classArr)
  // const responsiveClass = classNames(responsiveArr)

  // spinner
  if (loading) {
    return (
      <div className={styles.loadingBackground}>
        <div className={styles.loadingMask}>
          <div className={styles.spinner}></div>
          <div className={styles.logoSpinner}></div>
          <div className={styles.logo}></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.background}>
        <div
          className={`${styles.background} ${windowWidth > 800 ? 'px-5' : ''} ${
            styles.mainContent
          }`}
        >
          {/* <Header left="CONTACT" right="HOME" windowWidth={windowWidth} /> */}
          <Navigation
            // left="CONTACT"
            // right="HOME"
            windowWidth={windowWidth}
            styles={navStyles}
          />

          <div
            className={
              'rounded text-light d-flex flex-column justify-content-center mt-3'
            }
            style={{
              backgroundColor: '#262626',
              maxWidth: '1200px',
              margin: 'auto',
            }}
          >
            <div
              className={
                windowWidth > 800
                  ? 'border border-light rounded p-4' +
                    ' ' +
                    styles.resumeContainer
                  : 'border border-light rounded container p-2' +
                    ' ' +
                    styles.resumeContainer
              }
            >
              <div className="d-flex flex-row justify-content-between">
                <div
                  className="d-flex flex-column me-4"
                  style={
                    windowWidth > 800 ? { width: '65%' } : { width: '100%' }
                  }
                >
                  <h1 className="display-2 text-secondary">BRIAN GAUDET</h1>
                  <p className={windowWidth > 800 ? '' : 'ms-3'}>
                    Highly motivated, self-sufficient and learning-obsessed
                    developer who is seeking to collaborate with teams and
                    individuals. Successful deployments on numerous projects
                    have taught me both the struggle and reward of developing
                    software applications from end to end. Experience in
                    management, training, leadership and business operations
                    will help guide me as I continue to grow.
                  </p>
                </div>

                {windowWidth > 800 ? (
                  <div
                    className="d-flex flex-column text-end pt-4"
                    style={{ alignItems: 'flex-end', width: 'fit-content' }}
                  >
                    <a
                      className="my-1 d-flex flex-row link link-light text-decoration-none"
                      href="http://linkedin.com/in/brian-f-gaudet"
                      target="_blank"
                      style={{ width: 'fit-content' }}
                    >
                      <p className="mt-1">linkedin.com/in/brian-f-gaudet</p>
                      <img
                        className="mx-2 border rounded"
                        src={linked}
                        alt="?"
                        style={{ height: '40px', width: '40px' }}
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
                        style={{ height: '40px', width: '40px' }}
                      />
                    </a>

                    <a
                      className="my-1 d-flex flex-row link link-light text-decoration-none"
                      href="http://github.com/Gaudet-B"
                      target="_blank"
                    >
                      <p className="mt-1">github.com/Gaudet-B</p>
                      <img
                        className="mx-2 border rounded"
                        src={git}
                        alt="?"
                        style={{ height: '40px', width: '40px' }}
                      />
                    </a>
                  </div>
                ) : null}
              </div>

              {/* displays social links below summary on smaller screens */}
              {windowWidth > 800 ? null : (
                <div
                  className="d-flex flex-column text-end pt-4"
                  style={{
                    alignItems: 'flex-end',
                    width: '100%',
                    padding: '0px',
                  }}
                >
                  <a
                    className="my-1 d-flex flex-row link link-light text-decoration-none"
                    href="http://linkedin.com/in/brian-f-gaudet"
                    target="_blank"
                    style={{ width: 'fit-content' }}
                  >
                    <p className="mt-1">linkedin.com/in/brian-f-gaudet</p>
                    <img
                      className="mx-2 border rounded"
                      src={linked}
                      alt="?"
                      style={{ height: '40px', width: '40px' }}
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
                      style={{ height: '40px', width: '40px' }}
                    />
                  </a>
                  <a
                    className="my-1 d-flex flex-row link link-light text-decoration-none"
                    href="http://github.com/Gaudet-B"
                    target="_blank"
                  >
                    <p className="mt-1">github.com/Gaudet-B</p>
                    <img
                      className="mx-2 border rounded"
                      src={git}
                      alt="?"
                      style={{ height: '40px', width: '40px' }}
                    />
                  </a>
                </div>
              )}

              <div className="mx-5 border-top border-secondary my-4"></div>
              <h3 className="mt-5 mb-2 text-secondary">
                TECHNOLOGIES & FRAMEWORKS
              </h3>

              <div className="mx-5 my-4">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                  className="pe-4 fs-5"
                >
                  <p>React.js, Next.js, Typescript</p>
                  <p>AWS, Serverless, Vercel, Git</p>
                  <p>Next.js, Python, SQL</p>
                </div>
                <p className="mb-5">
                  JavaScript, Java, Express.js, Flask, MongoDB, Mongoose, Spring
                  Boot, Tailwind, Socket.IO, Postman, Jinja2, GitHub, Visual
                  Studio Code, react-query, Beautiful Soup, Selenium, bcrypt
                </p>
              </div>

              <h3 className="mt-5 mb-3 text-secondary">
                PROFESSIONAL EXPERIENCE
              </h3>

              <div
                className={
                  windowWidth > 800
                    ? 'mx-5 my-4 d-flex flex-row justify-content-between'
                    : 'my-4 d-flex flex-row justify-content-between'
                }
              >
                <div
                  className="d-flex flex-column"
                  style={
                    windowWidth > 800 ? { width: '14%' } : { width: '24%' }
                  }
                >
                  <h5>Border</h5>
                  <h6>San Diego, CA</h6>
                  <h6>2022 - present</h6>
                </div>

                <div
                  className=""
                  style={
                    windowWidth > 800 ? { width: '85%' } : { width: '75%' }
                  }
                >
                  <h5
                    className={
                      windowWidth > 800
                        ? 'fw-normal fst-italic ms-4'
                        : 'fw-normal fst-italic ms-5'
                    }
                  >
                    Frontend Developer
                  </h5>
                  <ul>
                    <li>???</li>
                    <li>???</li>
                    <li>???</li>
                  </ul>
                </div>
              </div>

              <div
                className={
                  windowWidth > 800
                    ? 'mx-5 my-4 d-flex flex-row justify-content-between'
                    : 'my-4 d-flex flex-row justify-content-between'
                }
              >
                <div
                  className="d-flex flex-column"
                  style={
                    windowWidth > 800 ? { width: '14%' } : { width: '24%' }
                  }
                >
                  <h5>Self-Employed</h5>
                  <h6>Remote</h6>
                  <h6>2021 - present</h6>
                </div>

                <div
                  className=""
                  style={
                    windowWidth > 800 ? { width: '85%' } : { width: '75%' }
                  }
                >
                  <h5
                    className={
                      windowWidth > 800
                        ? 'fw-normal fst-italic ms-4'
                        : 'fw-normal fst-italic ms-5'
                    }
                  >
                    Freelance Software Developer
                  </h5>
                  <ul>
                    <li>???</li>
                    <li>???</li>
                    <li>???</li>
                  </ul>
                </div>
              </div>

              <div
                className={
                  windowWidth > 800
                    ? 'mx-5 my-4 d-flex flex-row justify-content-between'
                    : 'my-4 d-flex flex-row justify-content-between'
                }
              >
                <div
                  className="d-flex flex-column"
                  style={
                    windowWidth > 800 ? { width: '14%' } : { width: '24%' }
                  }
                >
                  <h5>BottleBoon Colsulting, LLC</h5>
                  <h6>San Diego, CA</h6>
                  <h6>2020 - 2021</h6>
                </div>

                <div
                  className=""
                  style={
                    windowWidth > 800 ? { width: '85%' } : { width: '75%' }
                  }
                >
                  <h5
                    className={
                      windowWidth > 800
                        ? 'fw-normal fst-italic ms-4'
                        : 'fw-normal fst-italic ms-5'
                    }
                  >
                    Owner
                  </h5>
                  <ul>
                    <li>
                      Partnered with two former co-workers to form an LLC that
                      focused hospitality consulting during the early days of
                      the coronavirus pandemic.
                    </li>
                    <li>
                      Obtained a multi-year contract from a Fortune 500 Real
                      Estate company to operate food and beverage venues on its
                      campuses.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mx-5 border-top border-secondary my-4"></div>
              <h3 className="mt-5 mb-3 text-secondary">EDUCATION</h3>

              <div className="mx-4">
                <ul>
                  <li>
                    <strong>Coding Dojo </strong> - San Jose, CA (online) -{' '}
                    <strong> Full-Stack Developer Certificate - </strong>{' '}
                    Python, MERN, Java - 2021
                  </li>
                  <li>
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume

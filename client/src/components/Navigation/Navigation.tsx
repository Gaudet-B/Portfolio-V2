/* GLOBAL */
import { useState, useEffect } from 'react'

/* PROJECT */
import Link from '../reuseable/Link'

/* STYLES */
import {
  NavFonts,
  StyledNavLink,
  StyledSmallLink,
  StyledNavMenu,
  StyledNavWrapper,
  StyledBackButton,
  StyledMainNav,
  StyledLogoContainer,
  StyledNavLinksLarge,
  StyledLinkWrapper,
  StyledMobileMenu,
} from './styles'

/* SCRIPTS */
import getImages from '../../scripts/images'

/* TYPES */
import { Images } from '../Landing/Landing'

/* CONSTANTS */
const IMAGES: Images = getImages()
const { logo, burger } = IMAGES.icons

/**
 * @description - Main Navigation component - handles all site navitation and displays the active project info
 * @param props
 * @returns JSX.Element
 */
const Navigation = (props: {
  windowWidth: number
  styles: any
  // styles?: {}
  // showMenu?: boolean
  handleRefresh?: () => void
}) => {
  /** @NOTE REMOVE coordZ ??? */
  // state variables
  const [page, setPage] = useState<string>('')
  const [coordX, setCoordX] = useState('10rem')
  const [coordY, setCoordY] = useState('0rem')
  const [coordZ, setCoordZ] = useState('0px')
  const [scale, setScale] = useState('1.0')
  const [show, setShow] = useState(false)

  const handleClick = (e: any) => {
    e.preventDefault()
    console.log('click!')
    if (!show) {
      let linkP = document.getElementById('link-projects')
      if (linkP) {
        linkP.innerHTML = 'PROJECTS'
        linkP.style.margin = '.2rem 0'
      }

      let linkR = document.getElementById('link-resume')
      if (linkR) {
        linkR.innerHTML = 'RESUME'
        linkR.style.margin = '.2rem 0'
      }

      let linkC = document.getElementById('link-contact')
      if (linkC) {
        linkC.innerHTML = 'CONTACT'
        linkC.style.margin = '.2rem 0'
      }

      let linkM = document.getElementById('navMenu')
      if (linkM) {
        linkM.style.padding = '1.2rem .6rem'
        linkM.style.backgroundColor = 'rgb(26, 26, 26, .95)'
      }

      setCoordX('0rem')
      setCoordY('0rem')
      // setCoordZ("10px")
      setScale('1.0')
      console.log(`before: ${show}`)
      setShow(true)
      console.log(`after: ${show}`)
    } else {
      console.log(`else`)
      // setCoordZ("-10px")
      setCoordY('0rem')
      setCoordX('10rem')
      setScale('1.0')
      setShow(false)
      setTimeout(() => {
        let linkM = document.getElementById('navMenu')
        if (linkM) {
          linkM.style.padding = '0'
          linkM.style.backgroundColor = 'transparent'
        }

        let linkP = document.getElementById('link-projects')
        if (linkP) {
          linkP.innerHTML = ''
          linkP.style.margin = '0'
        }

        let linkR = document.getElementById('link-resume')
        if (linkR) {
          linkR.innerHTML = ''
          linkR.style.margin = '0'
        }

        let linkC = document.getElementById('link-contact')
        if (linkC) {
          linkC.innerHTML = ''
          linkC.style.margin = '0'
        }

        // setShow(false)
      }, 200)
    }
  }

  const renderBackToMenu = () => {
    return (
      <StyledBackButton onClick={props.handleRefresh}>
        {`< back to menu`}
      </StyledBackButton>
    )
  }

  const renderLogoLink = () => {
    return (
      <a
        href="/"
        style={
          props.windowWidth < 800
            ? { height: 'fit-content', marginTop: '1.25rem' }
            : { height: 'fit-content' }
        }
      >
        {' '}
        <img src={logo} style={{ marginBottom: '12px' }} />{' '}
      </a>
    )
  }

  const renderMobileNav = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '.5rem 10px 0 0',
        }}
      >
        <a onClick={handleClick}>
          {' '}
          <img
            src={burger}
            style={{ transform: 'scale(0.8)' }}
            alt="hamburger menu"
          />{' '}
        </a>
        {renderMobileMenu()}
      </div>
    )
  }

  const renderDesktopNav = () => {
    return (
      <StyledNavLinksLarge>
        <StyledLinkWrapper active={page === 'projects'}>
          <Link to={'/projects'}>PROJECTS</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper active={page === 'resume'}>
          <Link to={'/resume'}>RESUME</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper active={page === 'contact'}>
          <Link to={'/contact'}>CONTACT</Link>
        </StyledLinkWrapper>
      </StyledNavLinksLarge>
    )
  }

  const renderMobileMenu = () => {
    return (
      <StyledNavMenu
        id="navMenu"
        show={show}
        // can probably remove 'coordZ' here
        transform={show ? `` : ``}
        data-open={show}
        // transform={
        //   show
        //     ? `perspective(50px) translate3d(${coordX}, ${coordY}, 0) scale(${scale})`
        //     : `translateY(2rem)`
        // }
      >
        <StyledSmallLink
          id={'link-projects'}
          href="/projects"
          show={show}
          data-active={page === 'projects'}
        ></StyledSmallLink>
        <StyledSmallLink
          id={'link-resume'}
          href="/resume"
          show={show}
          data-active={page === 'resume'}
        ></StyledSmallLink>
        <StyledSmallLink
          id={'link-contact'}
          href="/contact"
          show={show}
          data-active={page === 'contact'}
        ></StyledSmallLink>
      </StyledNavMenu>
    )
  }

  useEffect(() => {
    let url = window.location.href
    let splitUrl = url.split('/')
    let currentPage = splitUrl.pop()
    if (currentPage) setPage(currentPage)
  }, [])

  return (
    <>
      <NavFonts />
      <StyledNavWrapper responsive={props.windowWidth < 800}>
        <StyledMainNav responsive={props.windowWidth < 800}>
          <StyledLogoContainer>
            {renderLogoLink()}
            {props.handleRefresh ? renderBackToMenu() : null}
          </StyledLogoContainer>
          {props.windowWidth < 800 ? renderMobileNav() : renderDesktopNav()}
        </StyledMainNav>
        {/* {renderMobileMenu()} */}
      </StyledNavWrapper>
    </>
  )
}

export default Navigation

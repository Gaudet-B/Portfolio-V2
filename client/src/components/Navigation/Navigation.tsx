/* GLOBAL */
import { useState, useEffect } from 'react'

/* PROJECT */
import Link from '../reuseable/Link'

/* STYLES */
import {
  NavFonts,
  StyledNavMenu,
  StyledNavWrapper,
  StyledBackButton,
  StyledMainNav,
  StyledLogoContainer,
  StyledNavLinksLarge,
  StyledLinkWrapper,
  StyledMobileMenu,
  StyledHamburgerButton,
  StyledMobileLinkWrapper,
} from './styles'

/* SCRIPTS */
import getImages from '../../scripts/images'

/* CONSTANTS */
const IMAGES = getImages()
const { logo, burger } = IMAGES.icons

/**
 * @description - Main Navigation component - handles all site navitation and displays the active project info
 * @param props
 * @returns JSX.Element
 */
const Navigation = (props: {
  windowWidth: number
  handleRefresh?: () => void
}) => {
  const [page, setPage] = useState<string>('')
  const [show, setShow] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShow(!show)
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
      <StyledMobileMenu>
        <StyledHamburgerButton onClick={handleClick}>
          {' '}
          <img
            src={burger}
            style={{ transform: 'scale(0.8)' }}
            alt="hamburger menu"
          />{' '}
        </StyledHamburgerButton>
        <StyledNavMenu id="navMenu" $show={show} data-open={show}>
          <StyledMobileLinkWrapper $active={page === 'projects'}>
            <Link to={'/projects'}>PROJECTS</Link>
          </StyledMobileLinkWrapper>
          <StyledMobileLinkWrapper $active={page === 'resume'}>
            <Link to={'/resume'}>RESUME</Link>
          </StyledMobileLinkWrapper>
          <StyledMobileLinkWrapper $active={page === 'contact'}>
            <Link to={'/contact'}>CONTACT</Link>
          </StyledMobileLinkWrapper>
        </StyledNavMenu>
      </StyledMobileMenu>
    )
  }

  const renderDesktopNav = () => {
    return (
      <StyledNavLinksLarge>
        <StyledLinkWrapper $active={page === 'projects'}>
          <Link to={'/projects'}>PROJECTS</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper $active={page === 'resume'}>
          <Link to={'/resume'}>RESUME</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper $active={page === 'contact'}>
          <Link to={'/contact'}>CONTACT</Link>
        </StyledLinkWrapper>
      </StyledNavLinksLarge>
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
      <StyledNavWrapper $responsive={props.windowWidth < 800}>
        <StyledMainNav $responsive={props.windowWidth < 800}>
          <StyledLogoContainer>
            {renderLogoLink()}
            {props.handleRefresh ? renderBackToMenu() : null}
          </StyledLogoContainer>
          {props.windowWidth < 800 ? renderMobileNav() : renderDesktopNav()}
        </StyledMainNav>
      </StyledNavWrapper>
    </>
  )
}

export default Navigation

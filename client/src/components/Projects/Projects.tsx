/* GLOBAL */
import { useState, useEffect } from 'react'
import { debounce } from 'lodash'

/* PROJECT */
import Navigation from '../Navigation'
import ProjectsRenderer from './ProjectsRenderer'

/* SCRIPTS */
import getImages, { Images } from '../../scripts/images'
import { getSessionStorageOrDefault } from '../../scripts/basic'

/* ASSETS */
import background from '../../assets/3d-background.png'

/* STYLES */
import {
  GlobalFonts,
  StyledBackground,
  StyledProjectsContainer,
  StyledMenuContainer,
} from './styles'

/* TYPES */
export type Project = {
  title: string
  myRole: string
  languages: string
  technologies: string
  summary: string
  details: Array<string>
  image: string
  github: string
  categories: Array<string>
  externalLink?: any
}

export type HeroImages = Images['heros']

/* CONSTANTS */
const IMAGES = getImages()
const ANIMATION_TIMING = 700

/**
 * @description - Main Projects component - renders the projects menu and displays the active project info
 * @param none none
 * @returns JSX.Element
 */
const Projects = () => {
  // height and width of window are stored in local state
  const [windowHeight, setWindowHeight] = useState<number>()
  const [windowWidth, setWindowWidth] = useState<number>()

  // boolean to determine if the menu is open
  const [showMenu, setShowMenu] = useState<boolean>(
    getSessionStorageOrDefault('showMenu', true) === 'true'
  )

  // status of the menu - either "open" or "closed"
  const [containerStatus, setContainerStatus] = useState<string>()

  // index of the project being displayed - KEEP THIS AND REMOVE activeProject ???
  const [activeIndex, setActiveIndex] = useState<number>(
    parseInt(getSessionStorageOrDefault('activeIndex', 0))
  )

  // functions that track height and width of the window for responsive components
  const initWindowHeight = () => {
    return window.innerHeight
  }
  const initWindowWidth = () => {
    return window.innerWidth
  }

  // functions that return the height and width of the window for responsive components - both return -1 if the window is not defined
  const getWindowHeight = () => {
    if (windowHeight && windowHeight > 0) return windowHeight
    return -1
  }
  const getWindowWidth = () => {
    if (windowWidth && windowWidth > 0) return windowWidth
    return -1
  }

  // function to be added to the onResize event listener
  const resizeWindow = debounce(() => {
    setWindowHeight(window.innerHeight)
    setWindowWidth(window.innerWidth)
  }, 500)

  const openContainer = () => setContainerStatus('open')

  const closeContainer = () => setContainerStatus('closed')

  const showMenuDelay = async (): Promise<boolean> => {
    setTimeout(() => {
      sessionStorage.setItem('showMenu', 'true')
      setShowMenu(true)
    }, ANIMATION_TIMING - 200)
    await new Promise((resolve) => setTimeout(resolve, ANIMATION_TIMING))
    return new Promise((resolve) => resolve(true))
  }

  const handleCloseMenu = () => {
    sessionStorage.setItem('showMenu', 'false')
    setShowMenu(false)
  }

  const handleActiveIndex = (index: number) => {
    sessionStorage.setItem('activeIndex', JSON.stringify(index))
    setActiveIndex(index)
  }

  const handleNavigateProjects = (direction: number, length: number) => {
    closeContainer()
    if (!length) return
    let newIndex = activeIndex + direction
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setTimeout(() => {
      handleCloseMenu()
      handleActiveIndex(newIndex)
      openContainer()
      const container = document.getElementById('scrollable-container')
      if (container) container.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }, ANIMATION_TIMING)
  }

  const handleProjectClick = (index: number) => {
    closeContainer()
    setTimeout(() => {
      handleCloseMenu()
      openContainer()
      handleActiveIndex(index)
    }, ANIMATION_TIMING)
  }

  const handleRefresh = async () => {
    closeContainer()
    const confirmation = await showMenuDelay()
    if (confirmation) {
      openContainer()
    }
  }

  useEffect(() => {
    setWindowHeight(initWindowHeight())
    setWindowWidth(initWindowWidth())
    window.addEventListener('resize', resizeWindow)
    openContainer()
    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  return (
    <StyledBackground style={{ backgroundImage: `url(${background})` }}>
      <GlobalFonts />
      <StyledProjectsContainer id="projectsContainer">
        <Navigation
          windowWidth={windowWidth || -1}
          handleRefresh={showMenu ? undefined : handleRefresh}
        />
        <StyledMenuContainer
          id={'scrollable-container'}
          data-open={containerStatus === 'open'}
          data-closed={containerStatus === 'closed'}
          $responsive={windowWidth ? windowWidth < 800 : false}
          $setByWindowHeight={windowHeight ? windowHeight < 700 : false}
        >
          <ProjectsRenderer
            activeIndex={activeIndex}
            images={IMAGES}
            handleProjectClick={handleProjectClick}
            openContainer={openContainer}
            getWindowHeight={getWindowHeight}
            getWindowWidth={getWindowWidth}
            showMenu={showMenu}
            handleNavigateProjects={handleNavigateProjects}
          />
        </StyledMenuContainer>
      </StyledProjectsContainer>
    </StyledBackground>
  )
}

export default Projects

/* GLOBAL */
import React, { useState, useEffect } from 'react'

/* PROJECT */
// import Loading from '../reuseable/Loading'
import Navigation from '../Navigation'
// import ProjectPage from './ProjectPage'
// import ProjectsMenu from './ProjectsMenu'

/* SCRIPTS */
import getImages from '../../scripts/images'
import { getSessionStorageOrDefault } from '../../scripts/basic'

/* ASSETS */
import background from '../../assets/3d-background.png'

/* STYLES */
import navStyles from '../../styles/nav.style.module.css'
import {
  GlobalFonts,
  StyledBackground,
  StyledProjectsContainer,
  StyledMenuContainer,
} from './styles'

/* TYPES */
import { Images } from '../Landing/Landing'
import ProjectsWrapper from './ProjectsWrapper'
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

/* CONSTANTS */
const IMAGES: Images = getImages()
const ANIMATION_TIMING = 700

// const Error = () => {
//   return (
//     <div style={{ margin: '50px 0', textAlign: 'center' }}>
//       There was an error loading the projects.
//     </div>
//   )
// }

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
  const resizeWindow = () => {
    setWindowHeight(window.innerHeight)
    setWindowWidth(window.innerWidth)
    // console.log(windowHeight)
    // console.log(windowWidth)
  }

  const openContainer = () => setContainerStatus('open')

  const closeContainer = () => setContainerStatus('closed')

  const showMenuDelay = async (): Promise<boolean> => {
    setTimeout(() => {
      sessionStorage.setItem('showMenu', 'true')
      setShowMenu(true)
    }, ANIMATION_TIMING - 200)
    await new Promise((resolve) => setTimeout(resolve, ANIMATION_TIMING))
    // let returnVal = false
    // openContainer()
    // return new Promise((resolve) => setTimeout(resolve, ANIMATION_TIMING))
    return new Promise((resolve) => resolve(true))
    // return returnVal
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
    // const { activeIndex } = props
    if (!length) return
    let newIndex = activeIndex + direction
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setTimeout(() => {
      handleCloseMenu()
      // setShowMenu(false)
      handleActiveIndex(newIndex)
      // setActiveIndex(newIndex)
      openContainer()
      const container = document.getElementById('scrollable-container')
      if (container) container.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }, ANIMATION_TIMING)
  }

  const handleProjectClick = (index: number) => {
    closeContainer()
    setTimeout(() => {
      handleCloseMenu()
      // setShowMenu(false)
      openContainer()
      // setActiveProject(project)
      handleActiveIndex(index)
      // setActiveIndex(index)
    }, ANIMATION_TIMING)
  }

  const handleRefresh = async () => {
    closeContainer()
    const confirmation = await showMenuDelay()
    if (confirmation) {
      // setShowMenu(true)
      openContainer()
    }
    // setTimeout(() => {
    //   setShowMenu(true)
    //   openContainer()
    // }, ANIMATION_TIMING)
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
          // left="HOME"
          // right="CONTACT"
          windowWidth={windowWidth || -1}
          // menu={menu}
          // setMenu={setMenu}
          handleRefresh={showMenu ? undefined : handleRefresh}
          styles={navStyles}
          // showMenu={showMenu}
        />
        <StyledMenuContainer
          id={'scrollable-container'}
          data-open={containerStatus === 'open'}
          data-closed={containerStatus === 'closed'}
          responsive={windowWidth && windowWidth < 800}
          setByWindowHeight={windowHeight && windowHeight < 700}
        >
          <ProjectsWrapper
            activeIndex={activeIndex}
            // changeActiveIndex={changeActiveIndex}
            // activeProject={activeProject && activeProject}
            images={IMAGES}
            handleProjectClick={handleProjectClick}
            openContainer={openContainer}
            getWindowHeight={getWindowHeight}
            getWindowWidth={getWindowWidth}
            showMenu={showMenu}
            handleNavigateProjects={handleNavigateProjects}
          />
          {/* {renderActiveContent()} */}
        </StyledMenuContainer>
      </StyledProjectsContainer>
    </StyledBackground>
  )
}

export default Projects

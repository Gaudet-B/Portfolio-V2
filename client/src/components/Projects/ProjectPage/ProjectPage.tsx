import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { ProjectPageBody, ProjectPageHeader } from './sections'
import { DemoImg } from './components'
import ContentModal from '../../reuseable/ContentModal'
import { Project } from '../Projects'
import { StyledPageContainer } from './styles'
/* ASSETS */
import draftHero from '../../../assets/draft/draft_hero.png'
import pizzaHero from '../../../assets/pizza/pizza_hero.png'
import mythHero from '../../../assets/myth/myth_hero.png'
import portfolioHero from '../../../assets/portfolio/portfolio_hero.png'
import draftVideo from '../../../assets/draft/draft-demo-gif.gif'
import chataDemoOne from '../../../assets/chata/chata-demo-one.gif'
import chataDemoTwo from '../../../assets/chata/chata-demo-two.gif'
import chataDemoThree from '../../../assets/chata/chata-demo-three.gif'
import pizzaDemoOne from '../../../assets/pizza/pizza-demo-one.gif'
import pizzaDemoTwo from '../../../assets/pizza/pizza-demo-two.gif'
import pizzaDemoThree from '../../../assets/pizza/pizza-demo-three.gif'
// draft v2 demo gifs
import draftV2Demo1 from '../../../assets/draft/v2-demo-01.gif'
import draftV2Demo2 from '../../../assets/draft/v2-demo-02.gif'
import draftV2Demo3 from '../../../assets/draft/v2-demo-03.gif'
import draftV2Demo4 from '../../../assets/draft/v2-demo-04.gif'
import draftV2Demo5 from '../../../assets/draft/v2-demo-05.gif'
// import arrow from '../../../assets/icons/chevron-icon-light.png'

/**
 * @description - ProjectPage component - handles all logic related to
 * project info and renders the header and body of the project page
 */
const ProjectPage = ({
  project,
  prevProject,
  nextProject,
  projectsLength,
  images,
  heros,
  mobile,
  getWindowHeight,
  getWindowWidth,
  handleNavigateProjects,
}: {
  project: Project
  prevProject: string
  nextProject: string
  projectsLength: number
  images: string[] | [][]
  heros: { [key: string]: string }
  mobile: boolean
  getWindowHeight: () => number
  getWindowWidth: () => number
  handleNavigateProjects: (direction: number, length: number) => void
}) => {
  // show DemoGif
  const [show, setShow] = useState(false)

  // returns the proper hero video based on which project is being displayed
  const selectVideo = (projectTitle: string): string | undefined => {
    if (projectTitle === 'MyDraft Partner') return draftVideo
    if (projectTitle === 'P!ZZA') return pizzaDemoOne
    if (projectTitle === 'chata') return chataDemoOne
  }
  // stores the gif in local state
  const [video, setVideo] = useState<string | undefined>(
    selectVideo(project.title)
  )
  // state variable for draft v2 demo gifs
  const [draftV2Demo, setDraftV2Demo] = useState<string>(draftV2Demo1)

  // state variables that handle the carousel image modal
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<typeof React.Children>()

  // timeout IDs stored in array so they can be cancelled
  const [timeouts, setTimeouts] = useState<number[]>([])

  const [activeIndex, setActiveIndex] = useState<number>()
  const [activeTab, setActiveTab] = useState<number | undefined>(0)

  const [showDraftDemo, setShowDraftDemo] = useState<number>(-1)

  // returns the proper hero image based on which project is being displayed
  const selectPhoto = (projectTitle: string): string => {
    if (projectTitle === 'MyDraft Partner') return draftHero
    if (projectTitle === 'P!ZZA') return pizzaHero
    if (projectTitle === 'chata') return mythHero
    if (projectTitle === 'briangaudet.com') return portfolioHero
    return ''
  }
  // stores the image in local state
  const SOURCE: string = selectPhoto(project.title)

  // function that loads pt.2 and pt.3 of the p!zza demo .gif
  const swapPizza = () => {
    const pizzaTwo = setTimeout(() => setVideo(pizzaDemoTwo), 5100)
    const pizzaThree = setTimeout(() => setVideo(pizzaDemoThree), 12100)
    return [pizzaTwo, pizzaThree]
  }

  // function that loads pt.2 of the chata demo .gif
  const swapChata = () => {
    const chataTwo = setTimeout(() => setVideo(chataDemoTwo), 7500)
    const chataThree = setTimeout(() => setVideo(chataDemoThree), 19500)
    return [chataTwo, chataThree]
  }

  //
  const swapDraft = () => {
    const draftTwo = setTimeout(() => setDraftV2Demo(draftV2Demo2), 6000)
    const draftThree = setTimeout(() => setDraftV2Demo(draftV2Demo3), 11000)
    const draftFour = setTimeout(() => setDraftV2Demo(draftV2Demo4), 24000)
    const draftFive = setTimeout(() => setDraftV2Demo(draftV2Demo5), 29000)
    return [draftTwo, draftThree, draftFour, draftFive]
  }

  // cancels all timeouts
  const cancelTimeouts = () => {
    // console.log(timeouts)
    timeouts.forEach((timeout) => clearTimeout(timeout))
  }

  // function that restarts demo .gif if the user decides (usually because it ended)
  const restartDemo = debounce(() => {
    cancelTimeouts()
    if (project.title === 'chata') {
      setTimeout(() => {
        setVideo(chataDemoOne)
        setTimeouts(swapChata())
      }, 200)
    } else if (project.title === 'P!ZZA') {
      setTimeout(() => {
        setVideo(pizzaDemoOne)
        setTimeouts(swapPizza())
      }, 200)
    } else if (project.title === 'MyDraft Partner') {
      setTimeout(() => {
        setDraftV2Demo(draftV2Demo1)
        setTimeouts(swapDraft())
      }, 200)
    }
  }, 500)

  const getHeroImage = (title: string) => {
    let image = heros.vapyr
    if (title === 'Estimatica Redesign') image = heros.estimatica
    if (title === 'Epoch IT Solutions') image = heros.epoch
    if (title === 'Border') image = heros.border
    return image
  }

  const handleModal = (content: any) => {
    setModalContent(content)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setActiveIndex(-1)
    setShowModal(false)
  }

  const handleDraftDemoClick = (index: number) => {
    if (showDraftDemo === index) setShowDraftDemo(-1)
    else setShowDraftDemo(index)
  }

  const handleDemoClick = () => {
    console.log('clicked')
    setShow(!show)
  }

  const getModalContent = (index: number, imgs: string[]): JSX.Element => {
    const contentProps = {
      key: `${imgs[index]}-demo`,
      index: index,
      source: imgs[index],
      project: project.title,
      activeIndex: index,
      activeHeight: getActiveDimensions().height,
      activeWidth: getActiveDimensions().width,
      handleImageBrowse: handleImageBrowse,
      getWindowHeight: getWindowHeight,
      getWindowWidth: getWindowWidth,
      modal: true,
      hideLink: true,
    }
    return <DemoImg {...contentProps} />
  }

  const handleImageBrowse = (idx: number, direction: 'left' | 'right') => {
    console.log(idx, direction)
    const imgs = getImagesToDisplay(images)
    let newIndex
    if (direction === 'left') {
      if (idx === 0) newIndex = imgs.length - 1
      else newIndex = idx - 1
    } else {
      if (idx === imgs.length - 1) newIndex = 0
      else newIndex = idx + 1
    }
    setActiveIndex(newIndex)
    handleModal(getModalContent(newIndex, imgs))
  }

  const handleTabs = (index: number) => {
    setActiveTab(index)
  }

  const getActiveDimensions = (): { height: number; width: number } => {
    const width = getWindowWidth()
    if (project.title === 'P!ZZA') {
      if (width < 600) return { height: 500, width: 300 }
      if (width < 800) return { height: 600, width: 350 }
      if (width < 1000) return { height: 700, width: 450 }
      return { height: 900, width: 600 }
    }
    if (width < 500) return { height: 230, width: width }
    if (width < 600) return { height: 300, width: 500 }
    if (width < 700) return { height: 300, width: 550 }
    if (width < 800) return { height: 350, width: 650 }
    if (width < 900) return { height: 400, width: 750 }
    if (width < 1000) return { height: 450, width: 800 }
    if (width < 1200) return { height: 500, width: 900 }
    return { height: 600, width: 1050 }
  }

  const getImagesToDisplay = (imgs: any[]): string[] => {
    let imagesToReturn: string[] = []
    if (typeof imgs[0] === 'string') imagesToReturn = [...imgs]
    else {
      if (activeTab !== undefined && activeTab > -1) {
        imagesToReturn = [...imgs[activeTab]]
      }
    }
    return imagesToReturn
  }

  // fuction that opens a new window for the P!ZZA interactive demo
  const handlePizza = () => {
    window.open('/p!zza')
  }

  const getTotalTime = (title: string): number => {
    switch (title) {
      case 'P!ZZA':
        return 17200
      case 'chata':
        return 27000
      case 'MyDraft Partner':
        return 70000
      default:
        return 0
    }
  }

  const projectType =
    project.categories.indexOf('Personal Project') > -1
      ? 'Personal Project'
      : 'Professional Experience'

  useEffect(() => {
    if (project.title === 'P!ZZA') {
      cancelTimeouts()
      setVideo(pizzaDemoOne)
      setTimeouts(swapPizza())
    } else if (project.title === 'chata') {
      cancelTimeouts()
      setVideo(chataDemoOne)
      setTimeouts(swapChata())
    } else if (project.title === 'MyDraft Partner') {
      cancelTimeouts()
      setVideo(draftVideo)
      setTimeouts(swapDraft())
    } else {
      cancelTimeouts()
      setVideo(undefined)
    }
  }, [project])

  const draftDemoGifs = [video || SOURCE, draftV2Demo]

  return (
    <>
      {/** @TODO should this modal be rendered by default and hidden until opened? (display: none) */}
      {modalContent && (
        <ContentModal
          active={showModal}
          content={modalContent}
          activeIndex={activeIndex}
          handleClose={handleCloseModal}
          handleImageBrowse={handleImageBrowse}
        />
      )}

      <StyledPageContainer>
        <ProjectPageHeader
          project={project}
          projectType={projectType}
          mobile={mobile}
          getWindowWidth={getWindowWidth}
        />

        <ProjectPageBody
          {...{
            mobile,
            project,
            getHeroImage,
            handlePizza,
            source: SOURCE,
            isPersonal: projectType === 'Personal Project',
            imageProps: {
              images,
              activeTab,
              activeIndex,
              handleTabs,
              handleModal,
              setActiveIndex,
              getModalContent,
              getWindowWidth,
              getWindowHeight,
              getActiveDimensions,
              handleImageBrowse,
              getImagesToDisplay,
            },
            demoProps: {
              source: SOURCE,
              video: video,
              show,
              draftDemoGifs,
              showDraftDemo,
              handleDemoClick,
              getActiveDimensions,
              handleDraftDemoClick,
              getWindowHeight,
              getWindowWidth,
              getTotalTime,
              restartDemo,
            },
            controlsProps: {
              projectsLength,
              prevProject,
              nextProject,
              mobile,
              handleShow: setShow,
              handleNavigateProjects,
            },
          }}
        />
      </StyledPageContainer>
    </>
  )
}

export default ProjectPage

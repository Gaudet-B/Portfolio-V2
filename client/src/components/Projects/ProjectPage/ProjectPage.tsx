/* GLOBAL */
import React, { useState, useEffect } from 'react'
import { debounce } from 'lodash'

/* PROJECT */
import Link from '../../reuseable/Link'
import ContentModal from '../../reuseable/ContentModal'
import CustomImageGallery from './CustomImageGallery'
import DemoImg from './DemoImg'
import DemoBanner from './DemoBanner'
import ProjectRole from './ProjectRole'
import ProjectTech from './ProjectTech'
import ProjectDetails from './ProjectDetails'

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

/* STYLES */
import styles from '../../../styles/carousel.style.module.css'
import {
  StyledPageContainer,
  StyledPageHeader,
  StyledTitle,
  StyledProjectType,
  StyledSummaryContainer,
  StyledProfessionalContainer,
  StyledProjectSummary,
  StyledProfessionalSummary,
  StyledPageBody,
  StyledSeparator,
  StyledGithubLink,
  StyledDemoWrapper,
  StyledDemoContainer,
  StyledDemoTitle,
  StyledInstruction,
  StyledLinkContainer,
  StyledProjectControls,
  StyledControlButton,
  StyledButtonText,
  StyledButtonProjectText,
  StyledGalleryContainer,
  StyledHeroContainer,
  StyledInfoContainer,
  StyledHeroImage,
  StyledDraftDemoContainer,
  StyledProjectLink,
  StyledDetailsGrid,
} from './styles'

/* TYPES */
import { Project } from '../Projects'
import ChevronButton from './ChevronButton'
import ProjectDemo, { NoDemo } from './ProjectDemo'

/**
 * @description - ProjectPage component - handles rendering all projects info
 * @param props - Props
 * @returns JSX.Element
 */
const ProjectPage = (props: {
  project: Project
  prevProject: string
  nextProject: string
  projectsLength: number
  images: string[] | [][]
  heros: { [key: string]: string }
  mobile: boolean
  card: string
  getWindowHeight: () => number
  getWindowWidth: () => number
  handleNavigateProjects: (direction: number, length: number) => void
}) => {
  const { project, images, mobile, card, getWindowHeight, getWindowWidth } =
    props

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
    const pizzaTwo = setTimeout(() => setVideo(pizzaDemoTwo), 6100)
    const pizzaThree = setTimeout(() => setVideo(pizzaDemoThree), 13100)
    return [pizzaTwo, pizzaThree]
  }

  // function that loads pt.2 of the chata demo .gif
  const swapChata = () => {
    const chataTwo = setTimeout(() => setVideo(chataDemoTwo), 7500)
    const chataThree = setTimeout(() => setVideo(chataDemoThree), 21100)
    return [chataTwo, chataThree]
  }

  //
  const swapDraft = () => {
    const draftTwo = setTimeout(() => setDraftV2Demo(draftV2Demo2), 6500)
    const draftThree = setTimeout(() => setDraftV2Demo(draftV2Demo3), 11500)
    const draftFour = setTimeout(() => setDraftV2Demo(draftV2Demo4), 24500)
    const draftFive = setTimeout(() => setDraftV2Demo(draftV2Demo5), 29500)
    return [draftTwo, draftThree, draftFour, draftFive]
  }

  // cancels all timeouts
  const cancelTimeouts = () => {
    console.log(timeouts)
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
    let image = props.heros.vapyr
    if (title === 'Estimatica Redesign') image = props.heros.estimatica
    if (title === 'Epoch IT Solutions') image = props.heros.epoch
    if (title === 'Border') image = props.heros.border
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

  /** @TODO need to split this out into multiple functions and pass the right one to child components */
  const handleDemoClick = (index: string | number) => {
    setShow(!show)
    if (typeof index === 'number') {
      if (showDraftDemo === index) setShowDraftDemo(-1)
      else setShowDraftDemo(index)
    }
  }

  // const handleDraftDemoClick = (index: number) => {
  //   setShow(!show)
  //   if (showDraftDemo === index) setShowDraftDemo(-1)
  //   else setShowDraftDemo(index)
  // }

  const handleTabs = (index: number) => {
    setActiveTab(index)
  }

  const renderProjectSummary = (type: string) => {
    const summary = project.summary?.slice() || ''
    const splitIndex = summary.indexOf('~')
    if (splitIndex > 0) {
      const firstHalf = summary.slice(0, splitIndex)
      const secondHalf = summary.slice(splitIndex + 1)
      return (
        <StyledProfessionalContainer marginBottom={type === 'personal'}>
          <StyledProfessionalSummary>{firstHalf}</StyledProfessionalSummary>
          <StyledProfessionalSummary>{secondHalf}</StyledProfessionalSummary>
        </StyledProfessionalContainer>
      )
    }
    return (
      <StyledSummaryContainer>
        <StyledProjectSummary>{project.summary || ''}</StyledProjectSummary>
      </StyledSummaryContainer>
    )
  }

  const renderProjectDetails = () => {
    return (
      <ProjectDetails
        details={project.details}
        title={project.title}
        responsive={mobile}
        redesign={project.title === 'MyDraft Partner'}
      />
    )
  }

  // const renderNoDemo = () => {
  //   return (
  //     <StyledInstruction noPointer>
  //       demo currently not available
  //     </StyledInstruction>
  //   )
  // }

  // const renderDemoLink = (
  //   callback: (any: any) => void,
  //   action: string,
  //   args?: any
  // ) => {
  //   const handleClick = () => {
  //     if (args) callback(args)
  //     else callback('show')
  //   }
  //   return (
  //     <StyledInstruction onClick={callback}>
  //       click to <strong>{action}</strong> demo
  //     </StyledInstruction>
  //   )
  // }

  // const renderDemoLinks = () => {
  //   if (project.title === 'MyDraft Partner') {
  //     return (
  //       <>
  //         {!show ? (
  //           <StyledLinkContainer open={show}>
  //             {renderDemoLink(handleDemoClick, 'open')}
  //             {renderDemoLink(handleDemoClick, 'open')}
  //           </StyledLinkContainer>
  //         ) : (
  //           <StyledLinkContainer open={show}>
  //             {renderDemoLink(handleDemoClick, 'close')}
  //           </StyledLinkContainer>
  //         )}
  //       </>
  //     )
  //   } else {
  //     return (
  //       <StyledLinkContainer open={show}>
  //         {!show
  //           ? renderDemoLink(handleDemoClick, 'open')
  //           : renderDemoLink(handleDemoClick, 'close')}
  //       </StyledLinkContainer>
  //     )
  //   }
  // }

  // const renderProjectdemo = () => {
  //   const renderDemoContent = () => {
  //     if (project.title === 'MyDraft Partner') {
  //       const draftDemoGifs = [video || SOURCE, draftV2Demo]
  //       return (
  //         <StyledDraftDemoContainer>
  //           {draftDemoGifs.map((gif, index) => {
  //             return (
  //               <DemoImg
  //                 index={index}
  //                 source={gif}
  //                 project={project.title}
  //                 activeIndex={showDraftDemo}
  //                 activeHeight={
  //                   index === showDraftDemo
  //                     ? getActiveDimensions().height
  //                     : undefined
  //                 }
  //                 activeWidth={
  //                   index === showDraftDemo
  //                     ? getActiveDimensions().width
  //                     : undefined
  //                 }
  //                 onClick={() => handleDemoClick(index)}
  //                 getWindowHeight={getWindowHeight}
  //                 getWindowWidth={getWindowWidth}
  //                 demo
  //                 noMask
  //                 hideDemo={showDraftDemo !== index && show}
  //               />
  //             )
  //           })}
  //         </StyledDraftDemoContainer>
  //       )
  //     }
  //     return (
  //       <DemoImg
  //         index={!show ? 1 : 0}
  //         source={video || SOURCE}
  //         project={project.title}
  //         activeIndex={0}
  //         activeHeight={show ? getActiveDimensions().height : undefined}
  //         activeWidth={
  //           show && project.title === 'chata'
  //             ? getActiveDimensions().width + 100
  //             : !show
  //             ? undefined
  //             : getActiveDimensions().width
  //         }
  //         onClick={handleDemoClick}
  //         getWindowHeight={getWindowHeight}
  //         getWindowWidth={getWindowWidth}
  //         demo
  //         noMask
  //       />
  //     )
  //   }
  //   return (
  //     <>
  //       {renderDemoLinks()}
  //       {renderDemoContent()}
  //       {project.title === 'chata' ||
  //       project.title === 'P!ZZA' ||
  //       project.title === 'MyDraft Partner' ? (
  //         <StyledLinkContainer open={show}>
  //           {renderDemoLink(restartDemo, 'restart')}
  //         </StyledLinkContainer>
  //       ) : null}
  //     </>
  //   )
  // }

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

  // fuction that opens a new window for the p!zza interactive demo
  const handlePizza = () => {
    window.open('/p!zza')
  }

  const renderImageGallery = () => {
    const imagesToDisplay: string[] = getImagesToDisplay(images)
    return (
      <StyledGalleryContainer>
        <CustomImageGallery
          project={project}
          images={imagesToDisplay}
          styles={styles}
          getWindowHeight={getWindowHeight}
          getWindowWidth={getWindowWidth}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          handleModal={handleModal}
          getActiveDimensions={getActiveDimensions}
          redesign={project.title === 'MyDraft Partner'}
          activeTab={activeTab}
          handleTabs={handleTabs}
          responsive={mobile}
        />
        <StyledDetailsGrid responsive={mobile}>
          <ProjectRole role={project.myRole} mobile={mobile} />
          <ProjectTech
            tech={project.technologies}
            mobile={mobile}
            redesign={project.title === 'MyDraft Partner'}
          />
        </StyledDetailsGrid>
      </StyledGalleryContainer>
    )
  }

  const renderHeroImage = () => {
    return (
      <StyledHeroContainer responsive={mobile}>
        <StyledHeroImage responsive={mobile}>
          <DemoImg
            index={-1}
            source={getHeroImage(project.title)}
            project={project.title}
            activeIndex={-1}
            activeHeight={getActiveDimensions().height / 3}
            activeWidth={getActiveDimensions().width / 3}
            getWindowHeight={getWindowHeight}
            getWindowWidth={getWindowWidth}
            hideScrollbar
          />
        </StyledHeroImage>
        <StyledInfoContainer redesign responsive={mobile}>
          <ProjectRole role={project.myRole} mobile={mobile} professional />
          <ProjectTech tech={project.technologies} mobile={mobile} />
          {project.externalLink && !mobile ? (
            <>
              <div></div>
              <StyledProjectLink>
                <a href={project.externalLink} target={'_blank'}>
                  {project.externalLink}
                </a>
              </StyledProjectLink>
            </>
          ) : null}
        </StyledInfoContainer>
        {project.externalLink && mobile ? (
          <StyledProjectLink>
            <a href={project.externalLink} target={'_blank'}>
              {project.externalLink}
            </a>
          </StyledProjectLink>
        ) : null}
      </StyledHeroContainer>
    )
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
          handleClose={handleCloseModal}
        />
      )}

      <StyledPageContainer>
        <StyledPageHeader>
          <StyledTitle responsive={mobile}>{project.title}</StyledTitle>

          <StyledProjectType responsive={mobile}>
            {projectType}
          </StyledProjectType>

          {projectType === 'Personal Project'
            ? renderProjectSummary('personal')
            : null}
        </StyledPageHeader>
        <StyledPageBody>
          {project.title === 'P!ZZA' ? (
            <DemoBanner
              handleClick={handlePizza}
              text={'this project has an interactive demo!'}
            />
          ) : null}

          {projectType === 'Personal Project'
            ? renderImageGallery()
            : renderHeroImage()}

          <StyledSeparator />

          {projectType === 'Personal Project'
            ? renderProjectDetails()
            : renderProjectSummary('professional')}

          <StyledSeparator />

          {projectType === 'Personal Project' ? (
            <>
              <Link to={project.github} popOut>
                <StyledGithubLink>Github Repo</StyledGithubLink>
              </Link>
              <StyledDemoWrapper>
                <StyledDemoContainer
                  /** @NOTE - the 'expand' animation isn't smooth, regular transform handles better */
                  animation={'contract'}
                  id={`demo-${card}`}
                >
                  <StyledDemoTitle>Demo</StyledDemoTitle>

                  {project.title === 'briangaudet.com' ? (
                    <NoDemo />
                  ) : (
                    <ProjectDemo
                      project={project}
                      draftDemoGifs={draftDemoGifs}
                      showDraftDemo={showDraftDemo}
                      getActiveDimensions={getActiveDimensions}
                      handleDemoClick={handleDemoClick}
                      getWindowHeight={getWindowHeight}
                      getWindowWidth={getWindowWidth}
                      show={show}
                    />
                  )}
                </StyledDemoContainer>
              </StyledDemoWrapper>
            </>
          ) : null}

          <StyledProjectControls>
            <StyledControlButton
              onClick={() => {
                setShow(false)
                props.handleNavigateProjects(-1, props.projectsLength)
              }}
            >
              <ChevronButton
                direction={'left'}
                noMargin
                customHeight={mobile ? 40 : 62}
                customWidth={mobile ? 24 : 45}
                reverseHover
              />
              <StyledButtonText>
                <span>previous</span>
                <span>project</span>
                {mobile ? null : (
                  <StyledButtonProjectText>
                    {`{ ${props.prevProject} }`}
                  </StyledButtonProjectText>
                )}
              </StyledButtonText>
            </StyledControlButton>
            <StyledControlButton
              onClick={() => {
                setShow(false)
                props.handleNavigateProjects(1, props.projectsLength)
              }}
              positiveX
            >
              <StyledButtonText>
                <span>next</span>
                <span>project</span>
                {mobile ? null : (
                  <StyledButtonProjectText>
                    {`{ ${props.nextProject} }`}
                  </StyledButtonProjectText>
                )}
              </StyledButtonText>
              <ChevronButton
                direction={'right'}
                noMargin
                customHeight={mobile ? 40 : 62}
                customWidth={mobile ? 24 : 45}
                reverseHover
              />
            </StyledControlButton>
          </StyledProjectControls>
        </StyledPageBody>
      </StyledPageContainer>
    </>
  )
}

export default ProjectPage

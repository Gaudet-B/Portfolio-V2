import { Project } from '../../Projects'
import DemoImg from '../DemoImg'
import {
  StyledDraftDemoContainer,
  StyledInstruction,
  StyledLinkContainer,
} from '../styles'

export const NoDemo = () => {
  return (
    <StyledInstruction $noPointer>
      demo currently not available
    </StyledInstruction>
  )
}

export const DemoLink = ({
  callback,
  action,
}: {
  callback?: () => void
  action: string
}) => {
  const handleClick = () => callback?.()
  return (
    <StyledInstruction onClick={handleClick}>
      click to <strong>{action}</strong> demo
    </StyledInstruction>
  )
}

export const DemoLinks = ({
  handleDemoClick,
  show,
}: {
  handleDemoClick: () => void
  show: boolean
}) => {
  return (
    <StyledLinkContainer $open={show}>
      {!show ? (
        <DemoLink callback={handleDemoClick} action={'open'} />
      ) : (
        <DemoLink callback={handleDemoClick} action={'close'} />
      )}
    </StyledLinkContainer>
  )
}

export const ProjectDemo = ({
  project,
  demoGif,
  draftDemoGifs,
  showDraftDemo,
  handleDemoClick,
  getActiveDimensions,
  handleDraftDemoClick,
  restartDemo,
  getWindowHeight,
  getWindowWidth,
  show,
  totalTime = 0,
}: {
  project: Project
  demoGif: string
  draftDemoGifs?: Array<string>
  showDraftDemo: number
  handleDemoClick: () => void
  getActiveDimensions: () => { height: number; width: number }
  handleDraftDemoClick: (index: number) => void
  restartDemo: () => void
  getWindowHeight: () => number
  getWindowWidth: () => number
  show: boolean
  totalTime?: number
}) => {
  const imgDimensions = {
    mobile: {
      height: 120,
      width: 120,
    },
    desktop: {
      height: 200,
      width: 200,
    },
  }
  const containerDimensions = {
    mobile: {
      height: 100,
      width: 100,
    },
    desktop: {
      height: 150,
      width: 150,
    },
  }
  return (
    <>
      {project.title === 'MyDraft Partner' ? (
        <StyledDraftDemoContainer>
          {draftDemoGifs &&
            draftDemoGifs.map((gif, index) => {
              if (showDraftDemo === -1 || showDraftDemo === index)
                return (
                  <div>
                    <DemoLinks
                      handleDemoClick={() => handleDraftDemoClick(index)}
                      show={showDraftDemo === index}
                    />
                    <DemoImg
                      index={index}
                      source={gif}
                      project={project.title}
                      activeIndex={showDraftDemo}
                      activeHeight={
                        index === showDraftDemo
                          ? getActiveDimensions().height
                          : undefined
                      }
                      activeWidth={
                        index === showDraftDemo
                          ? getActiveDimensions().width
                          : undefined
                      }
                      onClick={() => handleDraftDemoClick(index)}
                      getWindowHeight={getWindowHeight}
                      getWindowWidth={getWindowWidth}
                      demo
                      noMask
                      hideDemo={showDraftDemo >= 0 && showDraftDemo !== index}
                      hideLink={index === 0}
                      totalTime={totalTime}
                      restartLink
                      restartDemo={restartDemo}
                      imgDimensions={imgDimensions}
                      containerDimensions={containerDimensions}
                    />
                  </div>
                )
            })}
        </StyledDraftDemoContainer>
      ) : (
        <>
          <DemoLinks handleDemoClick={handleDemoClick} show={show} />
          <div style={{ height: '25px' }}></div>
          <DemoImg
            index={0}
            source={demoGif}
            project={project.title}
            activeIndex={0}
            activeHeight={show ? getActiveDimensions().height : undefined}
            activeWidth={
              show && project.title === 'chata'
                ? getActiveDimensions().width + 100
                : !show
                ? undefined
                : getActiveDimensions().width
            }
            onClick={() => handleDemoClick()}
            getWindowHeight={getWindowHeight}
            getWindowWidth={getWindowWidth}
            demo
            noMask
            totalTime={totalTime}
            restartLink={project.title === 'chata' || project.title === 'P!ZZA'}
            restartDemo={restartDemo}
            imgDimensions={imgDimensions}
            containerDimensions={containerDimensions}
          />
        </>
      )}
    </>
  )
}

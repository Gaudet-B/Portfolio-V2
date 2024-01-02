import { Project } from '../../Projects'
import DemoImg from '../DemoImg'
import {
  StyledDraftDemoContainer,
  StyledInstruction,
  StyledLinkContainer,
} from '../styles'

export const NoDemo = () => {
  return (
    <StyledInstruction noPointer>
      demo currently not available
    </StyledInstruction>
  )
}

const DemoLink = ({
  callback,
  action,
  args,
}: {
  callback: (any: any) => void
  action?: string
  args?: any
}) => {
  const handleClick = () => {
    if (args) callback(args)
    else callback(action || 'show')
  }
  return (
    <StyledInstruction onClick={handleClick}>
      click to <strong>{action}</strong> demo
    </StyledInstruction>
  )
}

const DemoLinks = ({
  project,
  handleDemoClick,
  show,
}: {
  project: Project
  handleDemoClick: (index: string | number) => void
  show: boolean
}) => {
  if (project.title === 'MyDraft Partner') {
    return (
      <>
        {!show ? (
          <StyledLinkContainer open={show}>
            <DemoLink callback={handleDemoClick} action={'open'} />
            {/* {renderDemoLink(handleDemoClick, 'open')} */}
            <DemoLink callback={handleDemoClick} action={'open'} />
            {/* {renderDemoLink(handleDemoClick, 'open')} */}
          </StyledLinkContainer>
        ) : (
          <StyledLinkContainer open={show}>
            <DemoLink callback={handleDemoClick} action={'close'} />
            {/* {renderDemoLink(handleDemoClick, 'close')} */}
          </StyledLinkContainer>
        )}
      </>
    )
  } else {
    return (
      <StyledLinkContainer open={show}>
        {!show ? (
          <DemoLink callback={handleDemoClick} action={'open'} />
        ) : (
          // ? renderDemoLink(handleDemoClick, 'open')
          <DemoLink callback={handleDemoClick} action={'close'} />
        )}
        {/* : renderDemoLink(handleDemoClick, 'close')} */}
      </StyledLinkContainer>
    )
  }
}

const ProjectDemo = ({
  project,
  draftDemoGifs,
  showDraftDemo,
  getActiveDimensions,
  handleDemoClick,
  getWindowHeight,
  getWindowWidth,
  show,
}: {
  project: Project
  draftDemoGifs: Array<any>
  showDraftDemo: number
  getActiveDimensions: () => { height: number; width: number }
  handleDemoClick: (index: string | number) => void
  getWindowHeight: () => number
  getWindowWidth: () => number
  show: boolean
}) => {
  return (
    <>
      <DemoLinks
        project={project}
        handleDemoClick={handleDemoClick}
        show={show}
      />
      {/* {renderDemoLinks()} */}
      {/* {renderDemoContent()} */}
      {project.title === 'MyDraft Partner' ? (
        <StyledDraftDemoContainer>
          {draftDemoGifs.map((gif, index) => {
            return (
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
                onClick={() => handleDemoClick(index)}
                getWindowHeight={getWindowHeight}
                getWindowWidth={getWindowWidth}
                demo
                noMask
                hideDemo={showDraftDemo !== index && show}
              />
            )
          })}
        </StyledDraftDemoContainer>
      ) : (
        <DemoImg
          index={!show ? 1 : 0}
          source={draftDemoGifs[0]}
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
          onClick={handleDemoClick}
          getWindowHeight={getWindowHeight}
          getWindowWidth={getWindowWidth}
          demo
          noMask
        />
      )}
      {project.title === 'chata' ||
      project.title === 'P!ZZA' ||
      project.title === 'MyDraft Partner' ? (
        <StyledLinkContainer open={show}>
          <DemoLink callback={handleDemoClick} action={'restart'} />
          {/* {renderDemoLink(restartDemo, 'restart')} */}
        </StyledLinkContainer>
      ) : null}
    </>
  )
}

export default ProjectDemo

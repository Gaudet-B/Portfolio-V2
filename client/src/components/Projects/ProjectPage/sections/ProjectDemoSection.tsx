import { Project } from '../../Projects'
import { GithubLink, NoDemo, ProjectDemo } from '../components'
import {
  StyledDemoContainer,
  StyledDemoTitle,
  StyledDemoWrapper,
} from '../styles'

export const ProjectDemoSection = ({
  project,
  source,
  video,
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
}: {
  project: Project
  source: string
  video?: string
  show: boolean
  draftDemoGifs?: string[]
  showDraftDemo: number
  handleDemoClick: () => void
  getActiveDimensions: () => { height: number; width: number }
  handleDraftDemoClick: (index: number) => void
  getWindowHeight: () => number
  getWindowWidth: () => number
  getTotalTime: (title: string) => number
  restartDemo: () => void
}) => {
  return (
    <>
      <GithubLink link={project.github} />
      <StyledDemoWrapper>
        {/** @note - the 'expand' animation isn't smooth, regular transform handles better */}
        <StyledDemoContainer $animation={'contract'}>
          <StyledDemoTitle>Demo</StyledDemoTitle>

          {project.title === 'briangaudet.com' ? (
            <NoDemo />
          ) : (
            <ProjectDemo
              project={project}
              demoGif={video || source}
              draftDemoGifs={draftDemoGifs}
              showDraftDemo={showDraftDemo}
              handleDemoClick={handleDemoClick}
              getActiveDimensions={getActiveDimensions}
              handleDraftDemoClick={handleDraftDemoClick}
              restartDemo={restartDemo}
              getWindowWidth={getWindowWidth}
              show={show}
              totalTime={getTotalTime(project.title)}
            />
          )}
        </StyledDemoContainer>
      </StyledDemoWrapper>
    </>
  )
}

import { ChevronButton } from '../components'
import {
  StyledButtonProjectText,
  StyledButtonText,
  StyledControlButton,
  StyledProjectControls,
} from '../styles'

export const ProjectControls = ({
  projectsLength,
  prevProject,
  nextProject,
  mobile,
  handleShow,
  handleNavigateProjects,
}: {
  projectsLength: number
  prevProject: string
  nextProject: string
  mobile: boolean
  handleShow: (show: boolean) => void
  handleNavigateProjects: (direction: number, projectsLength: number) => void
}) => {
  return (
    <StyledProjectControls>
      <StyledControlButton
        onClick={() => {
          handleShow(false)
          handleNavigateProjects(-1, projectsLength)
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
              {`{ ${prevProject} }`}
            </StyledButtonProjectText>
          )}
        </StyledButtonText>
      </StyledControlButton>
      <StyledControlButton
        onClick={() => {
          handleShow(false)
          handleNavigateProjects(1, projectsLength)
        }}
        $positiveX
      >
        <StyledButtonText>
          <span>next</span>
          <span>project</span>
          {mobile ? null : (
            <StyledButtonProjectText>
              {`{ ${nextProject} }`}
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
  )
}

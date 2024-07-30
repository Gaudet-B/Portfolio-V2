/* GLOBAL */
import { useState, useEffect } from 'react'
import { debounce } from 'lodash'

/* PROJECT */
import Loading from '../../../reuseable/Loading'

/* STYLES */
import {
  StyledProjectCardContainer,
  StyledCardOverlay,
  StyledCardMask,
  StyledCardText,
  StyledCardTitle,
  StyledCardlink,
} from './styles'

/* TYPES */
import { Project } from '../../Projects'
import { HeroImages } from '../../../../scripts/getImages'

/**
 * @description - Project Card component - renders the menu card for each project
 * @param props - Props
 * @returns JSX.Element
 */
const ProjectCard = (props: {
  // handleProjectClick: (project: Project, index: number) => void
  handleProjectClick: (index: number) => void
  key: string
  index: number
  project: Project
  images: HeroImages
}) => {
  const { project, index, handleProjectClick, images } = props
  const {
    pizza,
    draft,
    chat,
    portfolio,
    estimatica,
    vapyr,
    border,
    epoch,
    viasat,
    mettel,
  } = images

  const getSource = (project: string) => {
    switch (project) {
      case 'P!ZZA':
        return pizza
      case 'MyDraft Partner':
        return draft
      case 'chata':
        return chat
      case 'Estimatica Redesign':
        return estimatica
      case 'Vapyr Analytics':
        return vapyr
      case 'Border':
        return border
      case 'Epoch IT Solutions':
        return epoch
      case 'Viasat':
        return viasat
      case 'MetTel':
        return mettel
      default:
        return portfolio
    }
  }

  const SOURCE = getSource(project.title)
  const LOADING = !project ? true : false

  const [isActive, setIsActive] = useState(false)

  const debouncedMouseOver = debounce(() => {
    setIsActive(true)
  }, 300)

  const debouncedMouseOut = debounce(() => {
    setIsActive(false)
  }, 300)

  const handleOver = () => {
    debouncedMouseOut.cancel()
    debouncedMouseOver()
  }

  const handleOut = () => {
    debouncedMouseOver.cancel()
    debouncedMouseOut()
  }

  const handleClick = () => handleProjectClick(index)

  useEffect(() => {
    return debouncedMouseOver.cancel()
  }, [debouncedMouseOver])

  return (
    <StyledProjectCardContainer
      onMouseOver={!LOADING ? handleOver : undefined}
      onMouseOut={!LOADING ? handleOut : undefined}
      onClick={!LOADING ? handleClick : undefined}
      style={{ backgroundImage: `url(${SOURCE})` }}
    >
      {LOADING ? (
        <Loading size={'small'} />
      ) : (
        <StyledCardOverlay>
          <StyledCardMask
            onMouseOver={handleOver}
            onMouseOut={handleOut}
            $active={isActive}
          >
            <StyledCardText $active={isActive}>
              {project.categories.indexOf('Personal Project') >= 0
                ? 'Personal Project'
                : 'Professional Experience'}
            </StyledCardText>
            <StyledCardTitle $active={isActive}>
              {project.title}
            </StyledCardTitle>
            <StyledCardlink $active={isActive}>
              click for details
            </StyledCardlink>
          </StyledCardMask>
        </StyledCardOverlay>
      )}
    </StyledProjectCardContainer>
  )
}

export default ProjectCard

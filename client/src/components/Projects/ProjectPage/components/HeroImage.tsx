import { Project } from '../../Projects'
import { DemoImg } from './DemoImg'
import { StyledHeroImage } from '../styles'

export const HeroImage = ({
  mobile,
  project,
  getHeroImage,
  getActiveDimensions,
  // getWindowHeight,
  getWindowWidth,
}: {
  mobile: boolean
  project: Project
  getHeroImage: (title: string) => string
  getActiveDimensions: () => { height: number; width: number }
  // getWindowHeight: () => number
  getWindowWidth: () => number
}) => {
  const activeHeight = mobile
    ? getActiveDimensions().height / 2
    : getActiveDimensions().height / 3
  const activeWidth = mobile
    ? getActiveDimensions().width / 2
    : getActiveDimensions().width / 3
  return (
    <StyledHeroImage
      $responsive={mobile}
      $hasWhiteBackground={project.title === 'Viasat'}
    >
      <DemoImg
        index={-1}
        source={getHeroImage(project.title)}
        project={project.title}
        activeIndex={-1}
        // activeHeight={getActiveDimensions().height / 3}
        // activeWidth={getActiveDimensions().width / 3}
        activeHeight={activeHeight}
        activeWidth={activeWidth}
        getWindowWidth={getWindowWidth}
        hideScrollbar
        noMask
        hideLink
      />
    </StyledHeroImage>
  )
}

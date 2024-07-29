import { HeroImages } from '../../../../scripts/getImages'
import { Project } from '../../Projects'
import ProjectCard from '../ProjectCard'
import { StyledProjectsList, StyledListItem, StyledListTitle } from './styles'

const _splitProjects = (projects: Array<Project>) => {
  const personal = projects.filter(
    (project) => project.categories.indexOf('Personal Project') > -1
  )
  const professional = projects.filter(
    (project) => project.categories.indexOf('Professional Experience') > -1
  )
  return { personal, professional }
}

const ProjectsList = (props: {
  projects: Array<Project>
  images: HeroImages
  categories: Array<
    'MERN' | 'React' | 'Java' | 'Javascript' | 'Python' | 'Bootstrap' | 'All'
  >
  developerRole: 'Frontend' | 'Backend' | 'Full Stack' | 'All'
  projectType: 'Personal Project' | 'Professional Experience' | 'All'
  handleProjectClick: (index: number) => void
}) => {
  const {
    projects,
    images,
    categories,
    developerRole,
    projectType,
    handleProjectClick,
  } = props
  const checkProjectTags = (project: Project) => {
    let result = true
    for (const tag of categories) {
      if (project.categories.indexOf(tag) === -1 && categories[0] != 'All')
        result = false
    }
    if (
      project.categories.indexOf(developerRole) === -1 &&
      developerRole != 'All'
    )
      result = false
    if (project.categories.indexOf(projectType) === -1 && projectType != 'All')
      result = false
    return result
  }

  return (
    <StyledProjectsList>
      {projects &&
        projects.map((project, index) => {
          if (checkProjectTags(project)) {
            return (
              <StyledListItem key={`project-card-${index}`}>
                <ProjectCard
                  handleProjectClick={handleProjectClick}
                  key={`project-card-${index}`}
                  index={index}
                  project={project}
                  images={images}
                />
              </StyledListItem>
            )
          }
        })}
    </StyledProjectsList>
  )
}

export default ProjectsList

export const MobileProjectsList = (props: {
  projects: Array<Project>
  handleProjectClick: (index: number) => void
  images: HeroImages
}) => {
  const { projects, handleProjectClick, images } = props
  const { personal, professional } = _splitProjects(projects)
  return (
    <StyledProjectsList>
      <StyledListTitle>Professional Experience:</StyledListTitle>
      {professional.map((project, index) => (
        <StyledListItem key={`project-card-${index}`}>
          <ProjectCard
            handleProjectClick={handleProjectClick}
            key={`project-card-${index}`}
            index={projects.indexOf(project)}
            project={project}
            images={images}
          />
        </StyledListItem>
      ))}
      <StyledListTitle>Personal Projects:</StyledListTitle>
      {personal.map((project, index) => (
        <StyledListItem key={`project-card-${index}`}>
          <ProjectCard
            handleProjectClick={handleProjectClick}
            key={`project-card-${index}`}
            index={projects.indexOf(project)}
            project={project}
            images={images}
          />
        </StyledListItem>
      ))}
    </StyledProjectsList>
  )
}

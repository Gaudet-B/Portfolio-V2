/* GLOBAL */
import { useState, useEffect } from 'react'

/* PROJECT */
import FiltersLists from './FiltersLists'
import ProjectCard from './ProjectCard'

/* STYLES */
import styles from '../../../styles/project.menu.style.module.css'
import {
  StyledMenuWrapper,
  StyledMenuTitle,
  StyledMainMenu,
  StyledProjectsListContainer,
  StyledProjectsList,
} from './styles'

/* TYPES */
import { Project } from '../Projects'

/**
 * @description - Projects Menu component - renders the projects menu and handles which project is displayed
 * @param props - Props
 * @returns JSX.Element
 */
const ProjectsMenu = (props: {
  projects: Array<Project>
  handleProjectClick: (index: number) => void
  images: {
    [key: string]: string
  }
}) => {
  const { projects, handleProjectClick, images } = props

  const [projectType, setProjectType] = useState('All')
  const [developerRole, setDeveloperRole] = useState('All')
  const [categories, setCategories] = useState(['All'])
  const [showTags, setShowTags] = useState(false)
  const [chevronDirection, setChevronDirection] = useState('down')

  const projectTypes = ['Personal Project', 'Professional Experience']
  const developerRoles = ['Frontend', 'Backend', 'Full Stack']
  const categoryFilters = [
    'MERN',
    'React',
    'Java',
    'Javascript',
    'Python',
    'Bootstrap',
    'All',
  ]
  /** @NOTE - these are extra/unused */
  // ['Desktop', 'Mobile', ]

  const handleProjectType = (filter: string) => setProjectType(filter)

  const handleDeveloperRole = (filter: string) => setDeveloperRole(filter)

  const handleCategorySelect = (filter: string) => {
    console.log(`filter => ${filter}`)
    if (filter === 'All') {
      setCategories(['All'])
      return
    }
    if (categories.indexOf(filter) === 0 && categories.length === 1) {
      console.log(categories.length)
      setCategories(['All'])
      return
    }
    let newArray = categories[0] === 'All' ? [] : [...categories]
    if (categories.indexOf(filter) > -1) {
      const index = categories.indexOf(filter)
      newArray.splice(index, 1)
      console.log(newArray)
    } else {
      newArray.push(filter)
    }
    setCategories(newArray)
  }

  const handleFilterClick = () => {
    setShowTags(!showTags)
    if (chevronDirection === 'down') {
      setChevronDirection('up')
    } else {
      setChevronDirection('down')
    }
  }

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

  const renderProjectCard = (project: Project, index: number) => {
    return (
      <li className={styles.projectListItem} key={`project-card-${index}`}>
        <ProjectCard
          handleProjectClick={handleProjectClick}
          key={`project-card-${index}`}
          index={index}
          project={project}
          images={images}
        />
      </li>
    )
  }

  return (
    <StyledMenuWrapper>
      <StyledMenuTitle>My Work</StyledMenuTitle>
      <StyledMainMenu>
        <FiltersLists
          projectTypes={projectTypes}
          projectType={projectType}
          handleProjectType={handleProjectType}
          setProjectType={setProjectType}
          developerRole={developerRole}
          developerRoles={developerRoles}
          handleDeveloperRole={handleDeveloperRole}
          setDeveloperRole={setDeveloperRole}
          categories={categories}
          categoryFilters={categoryFilters}
          showTags={showTags}
          handleFilterClick={handleFilterClick}
          handleCategorySelect={handleCategorySelect}
          chevronDirection={chevronDirection}
          styles={styles}
        />
        <StyledProjectsListContainer>
          <StyledProjectsList>
            {projects &&
              projects.map((project, index) => {
                if (checkProjectTags(project)) {
                  return renderProjectCard(project, index)
                }
              })}
          </StyledProjectsList>
        </StyledProjectsListContainer>
      </StyledMainMenu>
    </StyledMenuWrapper>
  )
}
export default ProjectsMenu

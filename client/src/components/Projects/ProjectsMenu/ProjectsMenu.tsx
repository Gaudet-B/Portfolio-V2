/* GLOBAL */
import { useState, useEffect } from 'react'

/* PROJECT */
import FiltersLists from './FiltersLists'

/* STYLES */
import styles from '../../../styles/project.menu.style.module.css'
import {
  StyledMenuWrapper,
  StyledMenuTitle,
  StyledMainMenu,
  StyledProjectsListContainer,
} from './styles'

/* TYPES */
import { Project } from '../Projects'
import ProjectsList, { MobileProjectsList } from './ProjectsList'
import { HeroImages } from '../../../scripts/getImages'

export const PROJECT_TYPES = [
  'Personal Project',
  'Professional Experience',
] as const
export const DEVELOPER_ROLES = ['Frontend', 'Backend', 'Full Stack'] as const
export const CATEGORY_FILTERS = [
  'MERN',
  'React',
  'Java',
  'Javascript',
  'Python',
  'Bootstrap',
  'All',
] as const

/**
 * @description - Projects Menu component - renders the projects menu and handles which project is displayed
 * @param props - Props
 * @returns JSX.Element
 */
const ProjectsMenu = (props: {
  projects: Array<Project>
  handleProjectClick: (index: number) => void
  images: HeroImages
  mobile: boolean
}) => {
  const { projects, handleProjectClick, images } = props

  const [projectType, setProjectType] = useState<
    (typeof PROJECT_TYPES)[number] | 'All'
  >('All')
  const [developerRole, setDeveloperRole] = useState<
    (typeof DEVELOPER_ROLES)[number] | 'All'
  >('All')
  const [categories, setCategories] = useState<
    Array<(typeof CATEGORY_FILTERS)[number]>
  >(['All'])
  const [showTags, setShowTags] = useState(false)
  const [chevronDirection, setChevronDirection] = useState('down')

  /** @NOTE - these are extra/unused */
  // ['Desktop', 'Mobile', ]

  const handleProjectType = (filter: (typeof PROJECT_TYPES)[number] | 'All') =>
    setProjectType(filter)

  const handleDeveloperRole = (
    filter: (typeof DEVELOPER_ROLES)[number] | 'All'
  ) => setDeveloperRole(filter)

  const handleCategorySelect = (filter: (typeof CATEGORY_FILTERS)[number]) => {
    if (filter === 'All') {
      setCategories(['All'])
      return
    }
    if (categories.indexOf(filter) === 0 && categories.length === 1) {
      setCategories(['All'])
      return
    }
    let newArray = categories[0] === 'All' ? [] : [...categories]
    if (categories.indexOf(filter) > -1) {
      const index = categories.indexOf(filter)
      newArray.splice(index, 1)
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

  useEffect(() => {
    if (props.mobile) {
      setCategories(['All'])
      setProjectType('All')
      setDeveloperRole('All')
    }
    // return () => {}
  }, [props.mobile])

  return (
    <StyledMenuWrapper>
      <StyledMenuTitle>My Work</StyledMenuTitle>
      <StyledMainMenu>
        {props.mobile ? null : (
          <FiltersLists
            projectTypes={PROJECT_TYPES}
            projectType={projectType}
            handleProjectType={handleProjectType}
            setProjectType={setProjectType}
            developerRole={developerRole}
            developerRoles={DEVELOPER_ROLES}
            handleDeveloperRole={handleDeveloperRole}
            setDeveloperRole={setDeveloperRole}
            categories={categories}
            categoryFilters={CATEGORY_FILTERS}
            showTags={showTags}
            handleFilterClick={handleFilterClick}
            handleCategorySelect={handleCategorySelect}
            chevronDirection={chevronDirection}
            /** @TODO remove styles (replace them first... I think it's close) */
            styles={styles}
            mobile={props.mobile}
          />
        )}
        <StyledProjectsListContainer>
          {props.mobile ? (
            <MobileProjectsList
              projects={projects}
              images={images}
              handleProjectClick={handleProjectClick}
            />
          ) : (
            <ProjectsList
              projects={projects}
              images={images}
              categories={categories}
              developerRole={developerRole}
              projectType={projectType}
              handleProjectClick={handleProjectClick}
            />
          )}
        </StyledProjectsListContainer>
      </StyledMainMenu>
    </StyledMenuWrapper>
  )
}
export default ProjectsMenu

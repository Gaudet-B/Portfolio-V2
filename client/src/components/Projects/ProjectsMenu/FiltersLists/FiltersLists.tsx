import ProjectTypes from '../ProjectTypes'
import CategoryFilters from '../CategoryFilters'
import DeveloperRoles from '../DeveloperRoles'

import { StyledFiltersListContainer, StyledMobileWrapper } from './styles'
import {
  CATEGORY_FILTERS,
  DEVELOPER_ROLES,
  PROJECT_TYPES,
} from '../ProjectsMenu'

type FiltersListsProps = {
  projectTypes: typeof PROJECT_TYPES
  projectType: (typeof PROJECT_TYPES)[number] | 'All'
  handleProjectType: (filter: (typeof PROJECT_TYPES)[number] | 'All') => void
  setProjectType: (type: (typeof PROJECT_TYPES)[number] | 'All') => void
  developerRole: (typeof DEVELOPER_ROLES)[number] | 'All'
  developerRoles: typeof DEVELOPER_ROLES
  handleDeveloperRole: (
    filter: (typeof DEVELOPER_ROLES)[number] | 'All'
  ) => void
  setDeveloperRole: (type: (typeof DEVELOPER_ROLES)[number] | 'All') => void
  categories: Array<(typeof CATEGORY_FILTERS)[number]>
  categoryFilters: typeof CATEGORY_FILTERS
  showTags: boolean
  handleFilterClick: () => void
  handleCategorySelect: (filter: (typeof CATEGORY_FILTERS)[number]) => void
  chevronDirection: string
  styles: CSSModuleClasses
  mobile: boolean
}

const FiltersLists = ({
  projectTypes,
  projectType,
  handleProjectType,
  setProjectType,
  developerRole,
  developerRoles,
  handleDeveloperRole,
  setDeveloperRole,
  categories,
  categoryFilters,
  showTags,
  handleFilterClick,
  handleCategorySelect,
  chevronDirection,
  styles,
  mobile,
}: FiltersListsProps) => {
  const renderMobileWrapper = (callback: () => JSX.Element, filter: string) => {
    return (
      <StyledMobileWrapper>
        {filter}
        {callback()}
      </StyledMobileWrapper>
    )
  }

  const renderProjectTypes = () => {
    return (
      <>
        {!projectTypes || projectTypes.length < 1 ? null : (
          <ProjectTypes
            projectTypes={projectTypes}
            projectType={projectType}
            handleProjectType={handleProjectType}
            setProjectType={setProjectType}
            styles={styles}
          />
        )}
      </>
    )
  }

  const renderDeveloperRoles = () => {
    return (
      <>
        {!developerRoles || developerRoles.length < 1 ? null : (
          <DeveloperRoles
            projectType={projectType}
            developerRoles={developerRoles}
            developerRole={developerRole}
            handleDeveloperRole={handleDeveloperRole}
            setDeveloperRole={setDeveloperRole}
            styles={styles}
          />
        )}
      </>
    )
  }

  const renderCategoryFilters = () => {
    return (
      <>
        {!categoryFilters || categoryFilters.length < 1 ? null : (
          <CategoryFilters
            categories={categories}
            categoryFilters={categoryFilters}
            showTags={showTags}
            handleFilterClick={handleFilterClick}
            handleCategorySelect={handleCategorySelect}
            chevronDirection={chevronDirection}
            styles={styles}
          />
        )}
      </>
    )
  }

  return (
    /** @TODO probably best to not use any categories/filters on mobile (if so, maybe handle using a sliding panel or some other "hamburger" menu) */
    <StyledFiltersListContainer>
      {mobile
        ? /** @TODO maybe hide ALL filters, then hide them individually ??? */
          // ? renderMobileWrapper(callback, 'filters')
          renderMobileWrapper(renderProjectTypes, 'project types')
        : renderProjectTypes()}
      {mobile
        ? renderMobileWrapper(renderDeveloperRoles, 'my role')
        : renderCategoryFilters()}
      {mobile
        ? renderMobileWrapper(renderCategoryFilters, 'tech used')
        : renderDeveloperRoles()}
    </StyledFiltersListContainer>
  )
}

export default FiltersLists

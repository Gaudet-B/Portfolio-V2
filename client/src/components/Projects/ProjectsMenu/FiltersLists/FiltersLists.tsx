import ProjectTypes from '../ProjectTypes'
import CategoryFilters from '../CategoryFilters'
import DeveloperRoles from '../DeveloperRoles'

import { StyledFiltersListContainer, StyledMobileWrapper } from './styles'

type FiltersListsProps = {
  projectTypes: Array<string>
  projectType: string
  handleProjectType: (filter: string) => void
  setProjectType: (type: string) => void
  developerRole: string
  developerRoles: Array<string>
  handleDeveloperRole: (filter: string) => void
  setDeveloperRole: (type: string) => void
  categories: Array<string>
  categoryFilters: Array<string>
  showTags: boolean
  handleFilterClick: () => void
  handleCategorySelect: (filter: string) => void
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

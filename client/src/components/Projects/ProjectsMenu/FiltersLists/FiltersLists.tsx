
import ProjectTypes from '../ProjectTypes'
import CategoryFilters from '../CategoryFilters'
import DeveloperRoles from '../DeveloperRoles'

interface FiltersListsProps {
    projectTypes: Array<string>,
    projectType: string,
    handleProjectType: (filter: string) => void,
    setProjectType: (type: string) => void,
    developerRole: string,
    developerRoles: Array<string>,
    handleDeveloperRole: (filter: string) => void,
    setDeveloperRole: (type: string) => void,
    categories: Array<string>,
    categoryFilters: Array<string>,
    showTags: boolean,
    handleFilterClick: () => void,
    handleCategorySelect: (filter: string) => void,
    chevronDirection: string,
    styles: CSSModuleClasses,
}

const FiltersLists = (props: FiltersListsProps) => {

    const { 
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
    } = props

    return (
        <div className={styles.filtersListContainer} >
            {(!projectTypes || projectTypes.length < 1) ? null : 
                <ProjectTypes 
                    projectTypes={projectTypes} 
                    projectType={projectType} 
                    handleProjectType={handleProjectType} 
                    setProjectType={setProjectType} 
                    styles={styles}
                />
            }
            {(!categoryFilters || categoryFilters.length < 1) ? null : 
                <CategoryFilters 
                    categories={categories} 
                    categoryFilters={categoryFilters}
                    showTags={showTags}
                    handleFilterClick={handleFilterClick}
                    handleCategorySelect={handleCategorySelect}
                    chevronDirection={chevronDirection}
                    styles={styles}
                />
            }
            {(!developerRoles || developerRoles.length < 1) ? null :
                <DeveloperRoles 
                    projectType={projectType} 
                    developerRoles={developerRoles} 
                    developerRole={developerRole} 
                    handleDeveloperRole={handleDeveloperRole} 
                    setDeveloperRole={setDeveloperRole} 
                    styles={styles}
                />
            }
        </div>
    )
}

export default FiltersLists
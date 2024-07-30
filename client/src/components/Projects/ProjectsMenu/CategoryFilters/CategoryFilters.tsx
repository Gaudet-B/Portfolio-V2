import Button from '../../../reuseable/Button'
import { CATEGORY_FILTERS } from '../ProjectsMenu'

import { StyledFilterItem, StyledFilterList } from './styles'

const CategoryFilters = (props: {
  categories: Array<(typeof CATEGORY_FILTERS)[number]>
  categoryFilters: typeof CATEGORY_FILTERS
  showTags: boolean
  handleFilterClick: () => void
  handleCategorySelect: (filter: (typeof CATEGORY_FILTERS)[number]) => void
  chevronDirection: string
  styles: CSSModuleClasses
}) => {
  const {
    categories,
    categoryFilters,
    showTags,
    handleFilterClick,
    handleCategorySelect,
    chevronDirection,
    styles,
  } = props

  const selected = categories[0] != 'All' ? categories.length : undefined
  const tagsText = selected ? `Tech (${selected})` : 'Tech'

  return (
    <div className={styles.categoryFiltersContainer}>
      <div
        className={
          showTags
            ? `${styles.tabContainer} ${styles.tabContainerActive}`
            : styles.tabContainer
        }
      >
        <Button
          onClick={handleFilterClick}
          text={tagsText}
          size={'medium'}
          color={'dark'}
          arrowDirection={chevronDirection}
          textWidth={'50px'}
        />
      </div>
      <ul
        className={
          !showTags
            ? styles.categoryFilters
            : `${styles.categoryFilters} ${styles.categoryFiltersActive}`
        }
      >
        {categoryFilters.map((filter, index) => {
          return (
            <StyledFilterItem
              show={showTags}
              active={categories.indexOf(filter) > -1 && showTags}
              onClick={() => handleCategorySelect(filter)}
              id={`filter-${filter}`}
              key={`${filter}-${index + 5}`}
            >
              {filter}
            </StyledFilterItem>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryFilters

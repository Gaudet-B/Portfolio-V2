import Button from '../../../reuseable/Button'
import { PROJECT_TYPES } from '../ProjectsMenu'
import { StyledTypeList } from './styles'

interface ProjectTypesProps {
  projectTypes: typeof PROJECT_TYPES
  projectType: (typeof PROJECT_TYPES)[number] | 'All'
  handleProjectType: (filter: (typeof PROJECT_TYPES)[number] | 'All') => void
  setProjectType: (type: (typeof PROJECT_TYPES)[number] | 'All') => void
  styles: CSSModuleClasses
}

const ProjectTypes = (props: ProjectTypesProps) => {
  const {
    projectTypes,
    projectType,
    handleProjectType,
    setProjectType,
    styles,
  } = props

  return (
    <StyledTypeList>
      {projectTypes.map((filter, index) => {
        return (
          <li
            id={`project-type-${index}`}
            className={
              filter === projectType
                ? `${styles.radioGroup} ${styles.active}`
                : styles.radioGroup
            }
            onClick={() => handleProjectType(filter)}
            key={`${filter}-${index}`}
          >
            <div
              className={styles.radioButtonContainer}
              style={{ marginRight: '6px' }}
            >
              <div
                className={
                  filter === projectType
                    ? `${styles.radioButton} ${styles.active}`
                    : styles.radioButton
                }
              ></div>
            </div>
            <span
              className={
                filter === projectType
                  ? `${styles.radioLabel} ${styles.active}`
                  : styles.radioLabel
              }
            >
              {filter}
            </span>
          </li>
        )
      })}
      <div className={styles.buttonWrapper}>
        <Button
          text={'clear'}
          size={'extraSmall'}
          color={'dark'}
          disabled={projectType === 'All'}
          onClick={() => setProjectType('All')}
        />
      </div>
    </StyledTypeList>
  )
}

export default ProjectTypes

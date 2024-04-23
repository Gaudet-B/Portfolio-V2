import Button from '../../../reuseable/Button'
import { DEVELOPER_ROLES } from '../ProjectsMenu'
import { StyledRoleList } from './styles'

const DeveloperRoles = (props: {
  projectType: string
  developerRoles: typeof DEVELOPER_ROLES
  developerRole: (typeof DEVELOPER_ROLES)[number] | 'All'
  handleDeveloperRole: (
    filter: (typeof DEVELOPER_ROLES)[number] | 'All'
  ) => void
  setDeveloperRole: (type: (typeof DEVELOPER_ROLES)[number] | 'All') => void
  styles: CSSModuleClasses
}) => {
  const {
    projectType,
    developerRoles,
    developerRole,
    handleDeveloperRole,
    setDeveloperRole,
    styles,
  } = props

  return (
    <StyledRoleList className={styles.developerRoles}>
      {developerRoles.map((filter, index) => {
        return (
          <li
            id={`dev-role-${index}`}
            className={
              filter === projectType
                ? `${styles.developerRole} ${styles.active}`
                : styles.radioGroup
            }
            onClick={() => handleDeveloperRole(filter)}
            key={`${filter}-${index}`}
          >
            <span
              className={
                filter === developerRole
                  ? `${styles.radioLabel} ${styles.active}`
                  : styles.radioLabel
              }
            >
              {filter}
            </span>
            <div
              className={styles.radioButtonContainer}
              style={{ marginLeft: '6px' }}
            >
              <div
                className={
                  filter === developerRole
                    ? `${styles.radioButton} ${styles.active}`
                    : styles.radioButton
                }
              ></div>
            </div>
          </li>
        )
      })}
      <div className={styles.buttonWrapper}>
        <Button
          text={'clear'}
          size={'extraSmall'}
          disabled={developerRole === 'All'}
          color={'dark'}
          onClick={() => setDeveloperRole('All')}
        />
      </div>
    </StyledRoleList>
  )
}

export default DeveloperRoles

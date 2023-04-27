import Button from '../../../reuseable/Button'

const DeveloperRoles = (props: {
  projectType: string
  developerRoles: string[]
  developerRole: string
  handleDeveloperRole: (filter: string) => void
  setDeveloperRole: (type: string) => void
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
    <ul className={styles.developerRoles}>
      {developerRoles.map((filter: string, index: number) => {
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
    </ul>
  )
}

export default DeveloperRoles

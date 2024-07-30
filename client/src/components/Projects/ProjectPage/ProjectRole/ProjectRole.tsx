import { StyledRoleContainer, StyledRoleKey, StyledRoleValue } from './styles'

const ProjectRole = (props: {
  role: string
  direction: string
  professional?: boolean
}) => {
  return (
    <>
      <StyledRoleKey>
        {props.professional ? 'Role / Position:' : 'My Role(s):'}
      </StyledRoleKey>
      <StyledRoleValue>{props.role}</StyledRoleValue>
    </>
  )
}

export default ProjectRole

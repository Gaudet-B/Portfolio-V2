import { StyledRoleContainer, StyledRoleKey, StyledRoleValue } from './styles'

const ProjectRole = (props: {
  role: string
  mobile: boolean
  professional?: boolean
}) => {
  return (
    <>
      <StyledRoleKey responsive={props.mobile}>
        {props.professional ? 'My Role:' : 'My Role(s):'}
      </StyledRoleKey>
      <StyledRoleValue responsive={props.mobile}>{props.role}</StyledRoleValue>
    </>
  )
}

export default ProjectRole

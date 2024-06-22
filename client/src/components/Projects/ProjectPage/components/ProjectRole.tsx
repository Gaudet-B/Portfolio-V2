import { StyledRoleContainer, StyledRoleKey, StyledRoleValue } from './styles'

export const ProjectRole = (props: {
  role: string
  mobile: boolean
  professional?: boolean
}) => {
  return (
    <>
      <StyledRoleKey $responsive={props.mobile}>
        {props.professional ? 'My Role:' : 'My Role(s):'}
      </StyledRoleKey>
      <StyledRoleValue>{props.role}</StyledRoleValue>
    </>
  )
}

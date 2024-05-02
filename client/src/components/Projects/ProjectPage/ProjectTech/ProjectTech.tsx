import { StyledTechContainer, StyledTechKey, StyledTechValue } from './styles'

const ProjectTech = (props: {
  tech: string
  mobile: boolean
  redesign?: boolean
}) => {
  if (props.redesign) {
    const tech = props.tech?.slice()
    const splitIndex = tech.indexOf('~')
    if (splitIndex > 0) {
      const firstTech = tech.slice(0, splitIndex)
      const secondTech = tech.slice(splitIndex + 1)
      return (
        <>
          {/* <StyledTechContainer direction={props.direction}> */}
          <StyledTechKey responsive={props.mobile}>
            Technologies Used:
          </StyledTechKey>
          <StyledTechValue responsive={props.mobile}>
            {firstTech}
          </StyledTechValue>
          <StyledTechKey responsive={props.mobile}>
            Frontend Redesign:
          </StyledTechKey>
          <StyledTechValue responsive={props.mobile}>
            {secondTech}
          </StyledTechValue>
          {/* </StyledTechContainer> */}
        </>
      )
    }
    // } else {
    //   return (
    //     <>
    //       {/* <StyledTechContainer direction={props.direction}> */}
    //       <StyledTechKey>Technologies Used:</StyledTechKey>
    //       <StyledTechValue>{props.tech}</StyledTechValue>
    //       {/* </StyledTechContainer> */}
    //     </>
    //   )
    // }
  }
  return (
    <>
      <StyledTechKey responsive={props.mobile}>
        Technologies Used:
      </StyledTechKey>
      <StyledTechValue responsive={props.mobile}>{props.tech}</StyledTechValue>
    </>
  )
}

export default ProjectTech

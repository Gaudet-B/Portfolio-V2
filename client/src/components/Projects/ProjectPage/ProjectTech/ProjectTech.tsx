import { StyledTechContainer, StyledTechKey, StyledTechValue } from './styles'

const ProjectTech = (props: {
  tech: string
  direction: string
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
          <StyledTechKey>Technologies Used:</StyledTechKey>
          <StyledTechValue>{firstTech}</StyledTechValue>
          <StyledTechKey>Frontend Redesign:</StyledTechKey>
          <StyledTechValue>{secondTech}</StyledTechValue>
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
      <StyledTechKey>Technologies Used:</StyledTechKey>
      <StyledTechValue>{props.tech}</StyledTechValue>
    </>
  )
}

export default ProjectTech

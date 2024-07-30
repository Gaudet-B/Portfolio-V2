import {
  StyledDetailsContainer,
  StyledDetailsKey,
  StyledDetailsList,
  StyledDetailItem,
  StyledSingleDetail,
} from './styles'
const ProjectDetails = (props: {
  details: string[]
  title: string
  responsive: boolean
  redesign?: boolean
}) => {
  const renderRedesignDetails = (details: string[]) => {
    return (
      <StyledDetailsList responsive={props.responsive}>
        {details.map((detail, idx) => {
          return <StyledDetailItem key={idx}>{detail}</StyledDetailItem>
        })}
      </StyledDetailsList>
    )
  }

  const renderDetails = (details: string[]) => {
    return details.length > 1 ? (
      <StyledDetailsList responsive={props.responsive}>
        {details.map((detail, idx) => {
          if (props.title === 'briangaudet.com' && idx === 0) {
            let short = detail.slice(0, 112)
            return <StyledDetailItem key={idx}>{short}</StyledDetailItem>
          } else {
            return <StyledDetailItem key={idx}>{detail}</StyledDetailItem>
          }
        })}
      </StyledDetailsList>
    ) : (
      // if only one detail, display as text instead of bulleted list
      <div>
        <br />
        <StyledSingleDetail>{details}</StyledSingleDetail>
        <br />
      </div>
    )
  }

  return (
    <StyledDetailsContainer>
      <StyledDetailsKey>Application Details:</StyledDetailsKey>
      {props.redesign ? renderRedesignDetails(props.details.slice(0, 5)) : null}
      {props.redesign ? <StyledDetailsKey>Redesign:</StyledDetailsKey> : null}
      {props.redesign ? renderRedesignDetails(props.details.slice(5)) : null}
      {props.redesign ? null : renderDetails(props.details)}
    </StyledDetailsContainer>
  )
}

export default ProjectDetails

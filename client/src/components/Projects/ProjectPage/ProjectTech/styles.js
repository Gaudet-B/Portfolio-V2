import styled from 'styled-components'

export const StyledTechContainer = styled.h3`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 12px;
  justify-content: space-around;
  text-align: ${(props) =>
    props.direction === 'column' ? 'start' : undefined};
  font-size: 14pt;
`
// font-weight: 600;
// margin: 1em auto;
// min-width: 300px;
// max-width: 600px;

export const StyledTechKey = styled.span`
  padding: 12px 0;
  text-align: end;
  font-size: 14pt;
  font-weight: 500;
`
// text-decoration: underline;

export const StyledTechValue = styled.span`
  padding: 12px 0;
  text-align: start;
  font-size: 14pt;
  text-align: start;
`
// max-width: 60%;

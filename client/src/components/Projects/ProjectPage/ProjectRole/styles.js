import styled from 'styled-components'

export const StyledRoleContainer = styled.h3`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  gap: 12px;
  font-size: 14pt;
  text-align: ${(props) =>
    props.direction === 'column' ? 'start' : undefined};
`
// font-weight: 600;
// margin: 1em auto;
// min-width: 300px;
// max-width: 600px;
// gap: ${(props) => (props.direction === 'column' ? '12px' : undefined)};

export const StyledRoleKey = styled.span`
  padding: 12px 0;
  text-align: end;
  font-size: 14pt;
  white-space: nowrap;
  font-weight: 500;
`
// text-decoration: underline;
// margin-right: 2rem;
// width: fit-content;

export const StyledRoleValue = styled.span`
  padding: 12px 0;
  text-align: start;
  font-size: 14pt;
`
// width: fit-content;

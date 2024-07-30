import styled from 'styled-components'

export const StyledDetailsContainer = styled.div``

export const StyledDetailsKey = styled.span`
  font-size: 16pt;
  margin-top: 10px;
  margin-bottom: 5px;
  text-decoration: underline;
`

export const StyledDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: ${(props) => (props.responsive ? '75%' : '825px')};
  font-size: ${(props) => (props.responsive ? '11pt' : undefined)};
  padding: ${(props) => (props.responsive ? '0px 6px 0px 20px' : undefined)};
  margin: 2rem auto;
  text-align: left;
`

export const StyledDetailItem = styled.li`
  margin: '10px 0px';
`

export const StyledSingleDetail = styled.span`
  width: 'fit-content';
  margin: 'auto';
`

import styled from 'styled-components'

export const StyledTypeList = styled.div`
  flex: 1;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  text-align: start;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`

import styled from 'styled-components'

export const StyledRoleList = styled.div`
  flex: 1;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  text-align: end;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`

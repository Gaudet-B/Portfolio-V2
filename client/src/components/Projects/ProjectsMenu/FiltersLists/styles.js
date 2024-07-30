import styled from 'styled-components'

export const StyledFiltersListContainer = styled.div`
  width: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2em;
  margin-top: 1em;
  font-size: 16px;
  border-radius: 3px;
  z-index: 2;
  background-color: transparent;

  @media (max-width: 800px) {
    flex-direction: column;
    & > div:nth-child(1) {
      order: 1;
    }
    & > div:nth-child(2) {
      order: 3;
    }
    & > div:nth-child(3) {
      order: 2;
    }
    /* display: grid; */
    /* gap: 12px; */
    /* grid-template-columns: 1fr; */
    /* grid-template-rows: auto auto; */
    /* gap: 10px; */
  }
`

export const StyledMobileWrapper = styled.div``

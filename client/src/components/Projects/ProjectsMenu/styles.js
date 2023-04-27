import styled from 'styled-components'

export const StyledMenuWrapper = styled.div`
  text-align: center;
`

export const StyledMenuTitle = styled.div`
  font-size: 36pt;
  padding: 32px 0;
  text-shadow: 1px 1px 1px rgba(245, 245, 245, 0.3);
  background-color: rgb(38, 38, 38);
  z-index: 1;
`

export const StyledMainMenu = styled.div`
  min-width: fit-content;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    to right,
    rgba(26, 26, 26, 0.6) 0%,
    rgba(26, 26, 26, 0.8) 10%,
    rgba(26, 26, 26, 0.9) 30%,
    rgba(26, 26, 26, 0.9) 70%,
    rgba(26, 26, 26, 0.8) 90%,
    rgba(26, 26, 26, 0.6) 100%
  );
`

export const StyledProjectsListContainer = styled.div`
  width: 100%;
  min-height: 200px;
  max-height: calc(100% - 123px);
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 40px;
`

export const StyledProjectsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
`

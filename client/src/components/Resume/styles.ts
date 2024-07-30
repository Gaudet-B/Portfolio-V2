import styled from 'styled-components'
import styleGuide from '../StyleGuide/StyleGuide'

export const StyledBackground = styled.div`
  background-color: rgba(25, 25, 25, 1);
  padding-bottom: 2rem;
`

export const StyledResumeContainer = styled.div`
  -ms-overflow-style: none !important;
  scrollbar-width: 0px !important;
  max-height: 80vh;
  overflow: scroll;
  background-color: ${styleGuide.colors.GrayShadow};
  &::-webkit-scrollbar {
    display: none;
  }
`

import styled, { keyframes } from 'styled-components'
import styleGuide from '../../StyleGuide/StyleGuide'

/** @NOTE - currently not using this as regular transform handles more smoothly */
const expand = keyframes`
    from {height: 25px;}
    to {height: 750px;} 
`

const contract = keyframes`
    from {height: 750px;}
    to {height: 25px;}
`

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${styleGuide.colors.SpaceBlack};
  overflow-x: hidden;
  text-align: center;
`

export const StyledPageHeader = styled.header`
  margin: 4em 0 0 0;
  width: 70%;
  max-width: 800px;
`

export const StyledTitle = styled.h1`
  font-size: 4em;
  font-weight: bold;
  margin: 18px 0px 14px 0px;
  letter-spacing: 0.4rem;
`

export const StyledProjectType = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0rem;
  color: rgba(0, 143, 17, 0.7);
`

export const StyledSummaryContainer = styled.div`
  dsiplay: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
`

export const StyledProfessionalContainer = styled.div`
  margin-bottom: ${(props) => (props.marginBottom ? '2rem' : undefined)};
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`

export const StyledProjectSummary = styled.span`
  font-size: 1.25rem;
  margin: 0px 5px 20px;
  max-width: 80%;
  line-height: 1.25;
`

export const StyledProfessionalSummary = styled.span`
  font-size: 1rem;
  margin: 0px 5px 20px;
`

export const StyledPageBody = styled.div`
  height: inherit;
  min-height: fit-content;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  background-color: ${styleGuide.colors.SpaceBlack};
  width: 100%;
`

export const StyledSeparator = styled.div`
  height: 0px;
  border: 1px solid ${styleGuide.colors.LabelGreen};
  border-radius: 30%;
  background-color: ${styleGuide.colors.LabelGreen};
  width: 80%;
  margin: 3em auto;
`

export const StyledGithubLink = styled.span`
  color: rgb(7, 204, 30);
  font-family: helvetica;
  font-size: 16pt;
  border-radius: 50%;
  margin: 1rem auto 2rem auto;
`

export const StyledDemoWrapper = styled.div`
  width: 100%;
  background-color: #262626;
  padding: 35px 0px;
  height: fit-content;
  margin: 1rem auto;
`

export const StyledDemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 25px;
  animation: ${(props) =>
      props.animation === 'expand'
        ? expand
        : props.animation === 'contract'
        ? contract
        : undefined}
    0.5s ease-in-out;
`

export const StyledDemoTitle = styled.span`
  font-size: 24pt;
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 1rem;
`

export const StyledInstruction = styled.span`
  font-family: helvetica;
  font-size: 13pt;
  margin-bottom: 2rem;
  cursor: ${(props) => (props.noPointer ? 'not-allowed' : 'pointer')};
  > strong {
    color: ${styleGuide.colors.LabelGreen};
  }
`

export const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;
`

export const StyledProjectControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding 1rem 2rem;
`

export const StyledControlButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 1.5rem;
  background-color: transparent;
  border: none;
  border-radius: 5px 6px;
  font-family: 'Anonymous Pro';
  padding: 0.5rem 1rem;
  color: ${styleGuide.colors.WhiteSmoke};
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: ${(props) =>
      props.positiveX
        ? 'translate3d(2px, -2px, 0)'
        : 'translate3d(-2px, -2px, 0)'};
    border: 1px solid rgba(245, 245, 245, 0.3);
    box-shadow: ${(props) =>
      props.positiveX
        ? `-1px 2px 0 ${styleGuide.colors.GhostGray}`
        : `1px 2px 0 ${styleGuide.colors.GhostGray}`};
    transition: 0.4s ease-in;
  }
`

export const StyledButtonText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: fit-content;
`

export const StyledButtonProjectText = styled.span`
  margin-top: 5px;
  font-weight: bold;
`

export const StyledGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: evenly;
  gap: 12px;
`

export const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 2rem 0;
  background-color: ${styleGuide.colors.MatteGray};
`

export const StyledInfoContainer = styled.div`
  display: ${(props) => (props.redesign ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.redesign ? undefined : 'column')};
  grid-template-columns: ${(props) => (props.redesign ? '1fr 2fr' : undefined)};
  justify-content: space-evenly;
  align-items: ${(props) => (props.redesign ? 'start' : 'center')};
  font-weight: ${(props) => (props.redesign ? 'bold' : undefined)};
  gap: 12px;
`
// grid-template-rows: ${(props) => (props.redesign ? '1fr 2fr' : undefined)};
// font-size: 18pt;
// text-align: ${(props) => (props.redesign ? 'start' : 'center')};

export const StyledHeroImage = styled.div`
  width: 35%;
`

export const StyledDraftDemoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 24px;
`
export const StyledProjectLink = styled.div`
  display: flex;
  justify-content: start;
  padding: 12px 0;
  & > a {
    font-size: ${styleGuide.fonts.sizes.medium};
    color: ${styleGuide.colors.LabelGreen};
  }
`

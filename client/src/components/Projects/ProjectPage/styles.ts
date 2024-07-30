import styled, { keyframes } from 'styled-components'
import styleGuide from '../../StyleGuide/StyleGuide'

/** @TODO RE-DO FONT SIZES IN THIS FILE USING STYLE GUIDE */

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

export const StyledTitle = styled.h1<{ $responsive: boolean }>`
  font-size: ${({ $responsive }) => ($responsive ? '2em' : '4em')};
  font-weight: bold;
  margin: 18px 0px 14px 0px;
  letter-spacing: 0.4rem;
`

export const StyledProjectType = styled.h2<{ $responsive: boolean }>`
  font-size: ${({ $responsive }) => ($responsive ? '1.5rem' : '2rem')};
  font-weight: bold;
  margin: 2rem 0rem;
  color: rgba(0, 143, 17, 0.7);
`

export const StyledProjectHeroContainer = styled.div<{ $mobile: boolean }>`
  display: flex;
  flex-direction: ${({ $mobile }) => ($mobile ? 'column' : 'row')};
  justify-content: space-evenly;
  gap: ${({ $mobile }) => ($mobile ? '24px' : undefined)};
  padding: 0 2em;
`

export const StyledDetailsGrid = styled.div<{ $responsive: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;
  transform: ${({ $responsive }) => ($responsive ? '' : 'translateX(-30px)')};
  padding: ${({ $responsive }) => ($responsive ? '12px' : '0')};
`

export const StyledSummaryContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 5%; */
`

export const StyledProfessionalContainer = styled.div<{
  $bottomMargin: boolean
}>`
  margin-bottom: ${({ $bottomMargin }) => ($bottomMargin ? '2rem' : undefined)};
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`

export const StyledProjectSummary = styled.span`
  font-size: 1.25rem;
  /* font-size: ${styleGuide.fonts.sizes.small}; */
  /* margin: 0px 5px 20px; */
  max-width: 90%;
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

export const StyledImgContainer = styled.div`
  /* flex: 1; */
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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

export const StyledDemoContainer = styled.div<{
  $animation: 'expand' | 'contract'
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 25px;
  animation: ${({ $animation }) =>
      $animation === 'expand'
        ? expand
        : $animation === 'contract'
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

export const StyledInstruction = styled.span<{ $noPointer?: boolean }>`
  font-family: helvetica;
  font-size: 13pt;
  cursor: ${({ $noPointer }) => ($noPointer ? 'not-allowed' : 'pointer')};
  > strong {
    color: ${styleGuide.colors.LabelGreen};
  }
`

export const StyledLinkContainer = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5rem;
  padding: ${({ $open }) => ($open ? '1rem 0' : undefined)};
`

export const StyledProjectControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding 1rem 2rem;
`

export const StyledControlButton = styled.button<{ $positiveX?: boolean }>`
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
    transform: ${({ $positiveX }) =>
      $positiveX ? 'translate3d(2px, -2px, 0)' : 'translate3d(-2px, -2px, 0)'};
    border: 1px solid rgba(245, 245, 245, 0.3);
    box-shadow: ${({ $positiveX }) =>
      $positiveX
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

export const StyledHeroContainer = styled.div<{ $responsive: boolean }>`
  display: flex;
  flex-direction: ${({ $responsive }) => ($responsive ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: ${({ $responsive }) => ($responsive ? '2rem 0' : '2rem')};
  background-color: ${styleGuide.colors.MatteGray};
`

export const StyledInfoContainer = styled.div<{
  $redesign: boolean
  $responsive: boolean
}>`
  display: ${({ $redesign }) => ($redesign ? 'grid' : 'flex')};
  flex-direction: ${({ $redesign }) => ($redesign ? undefined : 'column')};
  grid-template-columns: ${({ $redesign }) =>
    $redesign ? '1fr 2fr' : undefined};
  justify-content: space-evenly;
  align-items: ${({ $redesign }) => ($redesign ? 'start' : 'center')};
  font-weight: ${({ $redesign }) => ($redesign ? 'bold' : undefined)};
  gap: 12px;
  padding: ${({ $responsive }) => ($responsive ? '12px' : '0')};
`
/** @TODO is this max-width necessary??? */
export const StyledHeroImage = styled.div<{
  $responsive: boolean
  $hasWhiteBackground: boolean
}>`
  /* max-width: ${({ $responsive }) => ($responsive ? '50%' : '35%')}; */
  display: flex;
  align-items: center;
  border-radius: ${({ $hasWhiteBackground }) =>
    $hasWhiteBackground ? '3px' : undefined};
  background-color: ${({ $hasWhiteBackground }) =>
    $hasWhiteBackground ? styleGuide.colors.WhiteSmoke : undefined};
  & > div {
    & > div {
      border: ${({ $hasWhiteBackground }) =>
        $hasWhiteBackground
          ? 'none'
          : `0.5px solid ${styleGuide.colors.SpaceBlack}`};
    }
  }
`

export const StyledDraftDemoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 0;
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

export const StyledDetailsContainer = styled.div``

export const StyledDetailsKey = styled.span`
  font-size: 16pt;
  margin-top: 10px;
  margin-bottom: 5px;
  text-decoration: underline;
`

export const StyledDetailsList = styled.ul<{ $responsive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: ${({ $responsive }) => ($responsive ? '75%' : '825px')};
  font-size: ${({ $responsive }) => ($responsive ? '11pt' : undefined)};
  padding: ${({ $responsive }) =>
    $responsive ? '0px 6px 0px 20px' : undefined};
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

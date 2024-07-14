import styled, { keyframes } from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide'

const { colors, fonts } = styleGuide
const ANIMATION_DELAY = 0.3

const getHoverHeight = ({
  $hoverHeight,
  $portrait,
}: {
  $hoverHeight?: number
  $portrait: boolean
}) => {
  return $portrait ? $hoverHeight : undefined
}

const getHoverWidth = ({
  $hoverWidth,
  $portrait,
}: {
  $hoverWidth?: number
  $portrait: boolean
}) => {
  return $portrait ? undefined : $hoverWidth
}

const getTransformY = (height: number | undefined) => {
  if (height === undefined) return 0
  if (height === 240) return 40
  if (height === 340) return -10
  return -20
}

const fadeIn = keyframes`
    0% { opacity: 0; }
    90% { opacity: 0; }
    100% { opacity: 1; }
`

const glow = keyframes`
    0% { box-shadow: 0 0 5px 5px transparent; }
    50% { box-shadow: 0 0 10px 0px rgba(0, 173, 17, 1); }
    100% { box-shadow: 0 0 5px 5px transparent; }
`

export const StyledRoleContainer = styled.h3<{ $direction: string }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: space-between;
  gap: 12px;
  font-size: 14pt;
  text-align: ${({ $direction }) =>
    $direction === 'column' ? 'start' : undefined};
`

export const StyledRoleKey = styled.span<{ $responsive: boolean }>`
  padding: 12px 0;
  text-align: end;
  font-size: 18px;
  white-space: ${({ $responsive }) => ($responsive ? undefined : 'nowrap')};
  font-weight: 500;
`

export const StyledRoleValue = styled.span`
  padding: 12px 0;
  text-align: start;
  font-size: 18px;
`

export const StyledTechContainer = styled.h3<{ $direction: string }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 12px;
  justify-content: space-around;
  text-align: ${({ $direction }) =>
    $direction === 'column' ? 'start' : undefined};
  font-size: 14pt;
`

export const StyledTechKey = styled.span<{ $responsive: boolean }>`
  padding: ${({ $responsive }) => ($responsive ? '12px' : '12px 0')};
  text-align: end;
  font-size: 18px;
  font-weight: 500;
`

export const StyledTechValue = styled.span<{ $responsive: boolean }>`
  padding: ${({ $responsive }) => ($responsive ? '12px' : '12px 0')};
  text-align: start;
  font-size: 18px;
  text-align: start;
`

export const StyledChevronContainer = styled.div<{
  $direction: string
  $noMargin?: boolean
}>`
  margin-left: ${({ $direction }) =>
    $direction === 'left' ? '-50px' : undefined};
  margin-right: ${({ $direction }) =>
    $direction === 'right' ? '-50px' : undefined};
  transform: rotateZ(
    ${({ $direction }) => ($direction === 'left' ? 0 : 180)}deg
  );
  height: fit-content;
  width: fit-content;
  margin: ${({ $noMargin }) => ($noMargin ? '0' : undefined)};
`

export const StyledChevron = styled.img<{
  $height: number
  $width: number
  $reverseHover?: boolean
}>`
  height: ${({ $height }) => ($height ? undefined : 'inherit')};
  width: ${({ $width }) => ($width ? undefined : 'inherit')};

  &:hover {
    transition: 0.2s ease-in;
    opacity: ${({ $reverseHover }) => ($reverseHover ? '1' : '0.5')};
  }
`

export const StyledGalleryContainer = styled.div`
  width: 100%;
  padding: 35px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.MatteGray};
`

export const StyledGalleryHeader = styled.h3`
  color: ${colors.WhiteSmoke};
  font-size: ${fonts.sizes.extraLarge};
  margin: 12px 0;
  text-shadow: 3px 3px 0px ${colors.SpaceBlack};
  letter-spacing: 5px;
`

export const StyledImageGrid = styled.div<{ $portrait: boolean }>`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: ${({ $portrait }) => ($portrait ? 'self-start' : 'center')};
  flex-wrap: wrap;
  gap: ${({ $portrait }) => ($portrait ? '12px' : '2px')};
  row-gap: ${({ $portrait }) => ($portrait ? '0' : '12px')};
`

export const StyledGalleryTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
`

export const StyledGalleryTab = styled.div`
  color: ${colors.GhostGray};
  font-size: ${fonts.sizes.small};
  text-shadow: 3px 3px 0px ${colors.SpaceBlack};
  letter-spacing: 5px;
  cursor: pointer;
  &:hover {
    color: ${colors.WhiteSmoke};
  }
  &[data-active='true'] {
    color: ${colors.WhiteSmoke};
    transform: scale(1.1);
  }
`

export const StyledTabSeparator = styled.span`
  color: ${colors.GhostGray};
  font-size: ${fonts.sizes.large};
  margin: 0 8px 0 6px;
`

export const StyledDemoImg = styled.div<{
  $hideDemo?: boolean
  $height?: number
  $width?: number
  $portrait?: boolean
}>`
  height: ${({ $height }) => $height}px;
  width: ${({ $width }) => $width}px;
  display: ${({ $hideDemo }) => ($hideDemo ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &[data-active='true'] {
    height: fit-content;
    width: fit-content;
  }
  transform: ${({ $portrait, $height }) =>
    $portrait ? `translateY(${getTransformY($height)}px)` : undefined};
`

export const StyledThumbnailContainer = styled.div<{
  $activeHeight?: number
  $activeWidth?: number
  $hoverHeight?: number
  $hoverWidth?: number
  $height?: number
  $width?: number
  $portrait: boolean
  $hideScrollbar?: boolean
}>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  transition: 0.5s ease-out;
  border: 0.5px solid ${styleGuide.colors.SpaceBlack};
  border-radius: 3px;
  overflow: hidden;
  &[data-active='true'] {
    height: ${({ $activeHeight }) => $activeHeight}px;
    width: ${({ $activeWidth }) => $activeWidth}px;
    &[data-active='true'] {
      max-height: 90vh;
      overflow-y: scroll;
      overflow-x: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        width: ${({ $hideScrollbar }) => ($hideScrollbar ? '0px' : '8px')};
      }
      &::-webkit-scrollbar-button:single-button:vertical:decrement {
        background-color: ${styleGuide.colors.SpaceBlack};
        display: block;
        border-style: solid;
        height: 4px;
        width: ${({ $hideScrollbar }) => ($hideScrollbar ? '0px' : '8px')};
        border-width: 0 4px 4px 4px;
        border-color: transparent transparent ${styleGuide.colors.MatrixGreen}
          transparent;
      }
      &::-webkit-scrollbar-button:single-button:vertical:increment {
        background-color: ${colors.SpaceBlack};
        display: block;
        border-style: solid;
        height: 8px;
        width: ${({ $hideScrollbar }) => ($hideScrollbar ? '0px' : '8px')};
        border-width: 4px 4px 0 4px;
        border-color: ${colors.MatrixGreen} transparent transparent transparent;
      }
      &::-webkit-scrollbar-track {
        background-color: ${colors.MatteGray};
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${colors.MatrixGreen};
      }
    }
  }
  &:hover {
    transition: ${({ $activeHeight }) =>
      !$activeHeight
        ? `${ANIMATION_DELAY}s ease-in ${ANIMATION_DELAY}s`
        : undefined};
    height: ${({ $activeHeight, $hoverHeight, $portrait }) =>
      !$activeHeight
        ? getHoverHeight({ $hoverHeight, $portrait })
        : undefined}px;
    width: ${({ $activeHeight, $hoverWidth, $portrait }) =>
      !$activeHeight ? getHoverWidth({ $hoverWidth, $portrait }) : undefined}px;
    > div {
      > div {
        > div {
          opacity: 0;
        }
      }
    }
  }
`

export const StyledImageContainer = styled.div`
  height: inherit;
  width: inherit;
  border-radius: 3px;
`

export const StyledImage = styled.div<{ $modal: boolean }>`
  width: inherit;
  height: inherit;
  border-radius: 2px;
  background-size: ${({ $modal }) => ($modal ? 'contain' : 'cover')};
  background-repeat: ${({ $modal }) => ($modal ? 'no-repeat' : undefined)};
  background-position: center;
  cursor: pointer;
`

export const StyledMask = styled.div<{
  $cropped?: boolean
  $showRestartLink?: boolean
}>`
  opacity: 1;
  height: 100%;
  width: 100%;
  background-color: rgb(26, 26, 26, 0.6);
  background-size: ${({ $cropped }) => ($cropped ? 'contain' : 'cover')};
  background-position: center;
  &:hover {
    transition: ${ANIMATION_DELAY}s ease-in;
    opacity: ${({ $showRestartLink }) => ($showRestartLink ? '1' : '0')};
  }
  &[data-active='true'] {
    opacity: 0;
  }
`

export const StyledImageControls = styled.div`
  top: 50%;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  display: flex;
  felx-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: fit-content;
  &[data-active='true'] {
    position: absolute;
    animation: ${fadeIn} ${ANIMATION_DELAY}s ease-in;
    opacity: 1;
  }
`

export const StyledLinkContainer = styled.div<{ $hideLink: boolean }>`
  width: inherit;
  text-align: center;
  display: ${({ $hideLink }) => ($hideLink ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  z-index: 5;
  opacity: 0;
  &[data-active='true'] {
    position: relative;
    bottom: 54%;
    opacity: 1;
  }
  & span {
    font-size: ${fonts.sizes.large};
  }
`

export const StyledBanner = styled.div`
  padding: 8px 16px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 173, 17, 0.1) 25%,
    rgba(0, 173, 17, 0.45) 49%,
    rgba(0, 173, 17, 0.45) 51%,
    rgba(0, 173, 17, 0.1) 75%,
    transparent 100%
  );
  width: fit-content;
  margin: 0 auto 3rem auto;
  border-radius: 10px;
  cursor: pointer;
  animation: ${glow} 3s infinite ease;
  &:hover {
    background-color: rgba(0, 173, 17, 0.8);
    animation: none;
    transition: 0.3s ease-in background-color;
  }
`

export const StyledBannerText = styled.span`
  font-weight: bold;
  font-size: 16pt;
  text-shadow: 1px 1px 1px ${styleGuide.colors.SpaceBlack};
`

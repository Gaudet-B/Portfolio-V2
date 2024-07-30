import styled, { keyframes } from 'styled-components'
import styleGuide from '../../StyleGuide/StyleGuide'

const spinner = keyframes`
  0% {transform: translate3d(-50%, -50%, 0) rotate(0deg);}
  90% {transform: translate3d(-50%, -50%, 0) rotate(365deg);}
  100% {transform: translate3d(-50%, -50%, 0) rotate(360deg);}
`

const reverseSpinner = keyframes`
  0% {transform: translate3d(-50%, -50%, 0) rotate(0deg);}
  100% {transform: translate3d(-50%, -50%, 0) rotate(-360deg);}
`

export const StyledLoadingContainer = styled.div`
  height: inherit;
  width: inherit;
  color: ${styleGuide.colors.WhiteSmoke};
`

export const StyledSpinner = styled.div<{ $size: string }>`
  animation: ${spinner} 2.5s ease infinite;
  border: solid ${({ $size }) => ($size == 'small' ? '2px' : '5px')} transparent;
  border-bottom-color: #cfd0d1;
  border-left-color: #cfd0d1;
  border-top-color: #cfd0d1;
  border-radius: 50%;
  height: ${({ $size }) => ($size === 'small' ? '40px' : '100px')};
  width: ${({ $size }) => ($size === 'small' ? '40px' : '100px')};
  position: relative;
  top: 50%;
  left: 50%;
`

export const StyledSpinnerReverse = styled.div<{ $size: string }>`
  animation: ${reverseSpinner} 3.5s linear infinite;
  border: solid ${({ $size }) => ($size === 'small' ? '1px' : '4px')}
    transparent;
  border-bottom-color: #cfd0d1;
  border-right-color: #cfd0d1;
  border-top-color: #cfd0d1;
  border-radius: 50%;
  height: ${({ $size }) => ($size === 'small' ? '24px' : '74px')};
  width: ${({ $size }) => ($size === 'small' ? '24px' : '74px')};
  position: relative;
  top: 50%;
  left: 50%;
`

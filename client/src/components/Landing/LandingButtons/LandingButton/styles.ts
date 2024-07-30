import styled, { keyframes } from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide'

const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

export const StyledMask = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 20%;
  margin: 0px;
  padding: 0px;
`

export const StyledButton = styled.div<{ $img: string; $mobile: boolean }>`
  border: 6px double ${styleGuide.colors.Black};
  border-radius: 20%;
  animation: ${fadeIn} 3s;
  background-image: url('${({ $img }) => $img || undefined}');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-color: ${styleGuide.colors.WhiteSmoke};
  width: 200px;
  height: 200px;
  margin: 0px;
  padding: 0px;
  transform: ${({ $mobile }) =>
    $mobile
      ? undefined
      : 'perspective(750px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9)'};
  box-shadow: 0 70px 40px -20px rgba(245, 245, 245, 0.1);
  background-color: ${styleGuide.colors.WhiteSmoke};
  animation: ${fadeIn} 3s;
  height: 150px;
  width: 150px;
  border: 2px solid ${styleGuide.colors.WhiteSmoke};
  border-radius: 20%;
  margin: 0 auto;
  transition: 0.6s ease-in-out transform;
  &:hover {
    transform: translate3d(0px, 0px, -250px);
    box-shadow: 0 70px 40px -20px rgba(94, 163, 99, 0.3);
  }
`

export const StyledLabel = styled.div<{ $mobile: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${styleGuide.colors.LabelGreen};
  font-size: 18pt;
  padding-top: 12px;
  margin-bottom: ${({ $mobile }) => ($mobile ? '12px' : undefined)};
  animation: ${fadeIn} 3s;
  > p {
    margin: 0px;
    padding: 0px;
    font-size: 1.25em;
  }
`

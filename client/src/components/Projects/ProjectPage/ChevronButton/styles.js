import styled from 'styled-components'
// import styleGuide from '../../../StyleGuide/StyleGuide'

export const StyledChevronContainer = styled.div`
  margin-left: ${(props) => (props.direction === 'left' ? '-50px' : undefined)};
  margin-right: ${(props) =>
    props.direction === 'right' ? '-50px' : undefined};
  transform: rotateZ(${(props) => (props.direction === 'left' ? 0 : 180)}deg);
  height: fit-content;
  width: fit-content;
  margin: ${(props) => (props.noMargin ? '0' : undefined)};
`

export const StyledChevron = styled.img`
  height: ${(props) => (props.height ? undefined : 'inherit')};
  width: ${(props) => (props.width ? undefined : 'inherit')};

  &:hover {
    transition: 0.2s ease-in;
    opacity: ${(props) => (props.reverseHover ? '1' : '0.5')};
  }
`

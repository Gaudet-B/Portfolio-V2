import styled from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide'

export const StyledFilterItem = styled.li`
    transform: scale(${props => props.active ? 1.1 : 1});
    transition: .1s ease-out transform;
    cursor: pointer;
    list-style: none;
    margin: 0 12px;
    color: ${props => props.active ? styleGuide.colors.MatrixGreen : props.show && !props.active ? styleGuide.colors.WhiteSmoke : 'transparent'};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    font-size: ${styleGuide.fonts.sizes.small};
`;

export const StyledFilterList = styled.ul`
    display: ${props => props.show ? 'flex' : 'none'};
`;
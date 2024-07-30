import styled, { keyframes } from 'styled-components'
import styleGuide from '../../../StyleGuide/StyleGuide';


const glow = keyframes`
    0% { box-shadow: 0 0 5px 5px transparent; }
    50% { box-shadow: 0 0 10px 0px rgba(0, 173, 17, 1); }
    100% { box-shadow: 0 0 5px 5px transparent; }
`;

export const StyledBanner = styled.div`
    padding: 8px 16px;
    background: linear-gradient(to right, transparent 0%, rgba(0, 173, 17, .1) 25%, rgba(0, 173, 17, .45) 49%, rgba(0, 173, 17, .45) 51%, rgba(0, 173, 17, .1) 75%, transparent 100%);
    width: fit-content;
    margin: 0 auto 3rem auto;
    border-radius: 10px;
    cursor: pointer;
    animation: ${glow} 3s infinite ease;
    &:hover {
        background-color: rgba(0, 173, 17, .8);
        animation: none;
        transition: .3s ease-in background-color;
    }
`;

export const StyledBannerText = styled.span`
    font-weight: bold;
    font-size: 16pt;
    text-shadow: 1px 1px 1px ${styleGuide.colors.SpaceBlack};
`;
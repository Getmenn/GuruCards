import React from 'react';
import styled from 'styled-components';
import loaderGif from '../../assets/loaderGif.gif'
import { ILoader } from '../../types/dats';


const StyledLoader = styled.div<ILoader>`
    position: absolute;
    top: ${props => props.active ? '50%': 'unset'};
    left: ${props => props.active ? '50%' : 'unset'};
    z-index: ${props => props.active ? '3' : 'unset'};;
`

const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.5);
    z-index: 2;
`

const Loader: React.FC<ILoader> = ({ active }) => {
    
    return (
        <>
            <StyledLoader active={active}>
                <img src={loaderGif} alt="loader" />
            </StyledLoader>
            {active && <StyledOverlay />}
        </>
        
    );
};

export {Loader};
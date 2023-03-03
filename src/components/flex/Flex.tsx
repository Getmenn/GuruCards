import styled from "styled-components"
import { IFlex } from "../../types/dats"

const StyledFlex = styled.div<IFlex>`
    display: flex;
    flex-direction: ${props => props.derection || 'column'};
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || 'unset'};
    height: ${props => props.height || 'unset'};
    flex-wrap: ${props => props.wrap || 'unset'};

    ${props => props.card &&`
        position: relative;
        box-shadow: 2px 3px 11px #00000040;
        border-radius: 8px;
        width: 224px;
        height: 368px;
        padding: 12px;
        margin-top:24px;

        @media (max-width: 370px) {
            width: 201px;
            height: 352px;
        }

    `}

    ${props => props.cardWrapper &&`
        justify-content: space-between;

        @media (max-width: 450px) {
            justify-content: center;
        }
    `}

    ${props => props.widthTitle &&`

        @media (max-width: 450px) {
            margin: 0;
            align-items: center;
            width: 100%
        }
    `}



    ${props => props.seen &&`
        background: #FFF6A5;
    `}

    ${props => props.iconsOnImage &&`
        position: absolute;
        left: 188px;
        top: 166px;
        height: 60px;

        @media (max-width: 370px) {
            left: 168px;
            top: 154px;
        }       
    `}

    ${props => props.iconsUnderImage &&`
        position: absolute;
        left: 156px;
        top: 262px;
        width: 51px;

        @media (max-width: 370px) {
            left: 132px;
            top: 241px;
        }     
    `}

    ${props => props.imageBox &&`
        position: relative;
        margin-left: -12px;
        width: 224px;
        height: 260px;
        margin-top: -6px;

        @media (max-width: 370px) {
            margin: -8px 0px 0px -23px
        }

    `}

    

    

    
`

const Flex: React.FC<IFlex> = (props) => {
    return <StyledFlex {...props} />
}

export {Flex}
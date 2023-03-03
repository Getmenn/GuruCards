import styled from "styled-components"

interface TitleI{
    children: React.ReactNode;
    weight?: string;
    size?: string;
    height?: string;
    color?: string;
    decoration?: string;
    decorationText?: boolean;
    nameCard?: boolean;
    gray?: boolean;
    margin?: string;
}

const StyledTitle = styled.h1<TitleI>`
    font-weight: ${props => props.weight || '700'};
    font-size: ${props => props.size || '22px'};
    line-height: ${props => props.height || '25px'};
    color:  ${props => props.color || '#2C2C2C'};
    margin: ${props => props.margin || '0'};

    ${props => props.decorationText && `
        text-decoration: line-through;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #5A5A5A;
        margin: 0px;
        letter-spacing: 0.8px;

        @media (max-width: 370px) {
            font-size: 12px;
        }
    `}

    ${props => props.nameCard && `
        font-weight: 500;
        font-size: 14px;
        line-height: 28px; 
        color: #2C2C2C;
        margin: 0px;
        letter-spacing: 0.4px;

        @media (max-width: 370px) {
            font-size: 12px;
        }
    `}

    ${props => props.gray && `
        font-weight: 400;
        font-size: 12px;
        color: #8F8F8F;
        margin: 0px;
        line-height: 28px;

        @media (max-width: 370px) {
            font-size: 10px;
        }
    `}
`

const Title: React.FC<TitleI> = (props) => {
    
    return <StyledTitle {...props}/> 
}

export {Title}
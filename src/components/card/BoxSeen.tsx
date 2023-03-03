import styled, {css} from "styled-components"



const StyledBoxSeen = styled.div`
    position: absolute;
    left: 65px;
    top: 12px;
    width: 94px;
    height: 24px;
    background: rgba(44, 44, 44, 0.74);
    border-radius: 8px;  
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

const BoxSeen: React.FC = () => {
    return <StyledBoxSeen>Просмотрено</StyledBoxSeen>
}

export {BoxSeen}
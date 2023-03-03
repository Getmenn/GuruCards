import { Body } from "./components/Body"
import styled from "styled-components"

const App: React.FC = () => {

    const AppWrapper = styled.div`
        width:100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
    `


    return (
        <AppWrapper >
            <Body />
        </AppWrapper>
    )
}

export {App}
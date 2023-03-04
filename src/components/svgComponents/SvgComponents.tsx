import styled from "styled-components"
import { ReactComponent as Car } from "../../assets/icons/car.svg"
import { ReactComponent as Compare } from "../../assets/icons/compare.svg"
import { ReactComponent as Exclude } from "../../assets/icons/exclude.svg"
import { ReactComponent as Heart } from "../../assets/icons/heart.svg"
import { SvgI } from "../../types/dats"

const StyledCar = styled(Car)<SvgI>`
    cursor: pointer;
    *{
        fill: ${props => props.seen ? '#00A0AB' : '#C7C7C7'};
    }
    &:hover{
        *{
            fill: green;
        }
    }
`
const StyledCompare = styled(Compare)`
    cursor: pointer;
    z-index: 1;
    &:hover{
        *{
            fill: green;
        }
    }
`
const StyledExclude = styled(Exclude)<SvgI>`
    cursor: pointer;
    *{
        fill: ${props => props.seen ? '#00A0AB' : '#C7C7C7'};
    }
        &:hover{
            *{
                fill: green;
            }
        }
`
const StyledHeart = styled(Heart)`
    cursor: pointer;
    z-index: 1;
        &:hover{
            *{
                fill: green;
            }
        }
`


const CarE: React.FC<SvgI> = ({seen}) => {
    return <StyledCar seen={seen}/>
}

const CompareE: React.FC = () => {
    return <StyledCompare />
}

const ExcludeE: React.FC<SvgI> = ({seen}) => {
    return <StyledExclude seen={seen} />
}

const HeartE: React.FC = () => {
    return <StyledHeart />
}

export {CarE, CompareE, ExcludeE, HeartE}
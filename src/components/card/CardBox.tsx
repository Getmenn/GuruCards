import { useEffect, useState } from "react"
import styled from "styled-components"

import { Flex } from "../flex/Flex"
import { Title } from "./Title"
import { BoxSeen } from "./BoxSeen"
import Loader from "../loader/LoadingOverlay"
import { CarE, CompareE, ExcludeE, HeartE } from "../svgComponents/SvgComponents"

import { ICardBox } from "../../types/dats"
import { imageApi } from "../../API/imageApi"


const Image = styled.img`
    border-radius: 8px 8px 0px 0px;
    width: 224px;
    height: 260px;

    @media (max-width: 370px) {
        width: 200px;
        height: 240px;
    }
`

const ImageSvg = styled.div`
    cursor: pointer;
    display: inline-block;
    width: 24px;
    height: 24px;

    background-repeat: no-repeat;
    background-size: contain;
    color: blue;
`

const CardBox: React.FC<ICardBox> = ({ date, locality, oldPrice, price, seen, title, id}) => {
    
    const [smalLocality, setSmalLocality] = useState<string>('');
    const [image, setImage] = useState<Uint8Array | null>(null);
    const [loading, setLoading] = useState<boolean>(true)

    const dateNum = String(new Date(date * 1000).toLocaleString('ru-RU'));
    
    useEffect(() => {
        if (locality.length > 13) {
            setSmalLocality(locality.substring(0, 13))
        } else {
            setSmalLocality(locality)
        }
        hendleGetImage()
    }, [title])

    const hendleGetImage = async (): Promise<void> => { 
        setImage(new Uint8Array(await imageApi.getImage()))
        setLoading(false)
    }    

    return (
        <>
            <Flex card align="flex-start" seen={seen}>
                {seen && <BoxSeen />}
                <Flex imageBox>
                    {image 
                        ? <Image src={URL.createObjectURL(new Blob([image], { type: 'image/jpeg' }))} alt="exampleImage" />
                        : <Loader />
                    }
                </Flex>
                <Flex iconsOnImage justify="space-between">
                    <CompareE />
                    <HeartE  />
                </Flex>
                <Flex iconsUnderImage derection="row" justify="space-between" margin="3px 0 0px 1px">
                    <CarE seen/>
                    <ExcludeE seen />
                </Flex>
                <Title decorationText>{oldPrice}</Title>
                <Title>{price}</Title>
                <Title nameCard>{title}</Title>
                <Flex derection="row" width='100%' justify="space-between">
                    <Title gray>{smalLocality}</Title>
                    <Title gray>{dateNum}</Title>
                </Flex>
            </Flex>
            
        </>
    )
}

export {CardBox}
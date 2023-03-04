import { useEffect, useState } from "react"
import {  Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Flex } from "../flex/Flex"
import { Title } from "./Title"
import { BoxSeen } from "./BoxSeen"
import { Loader } from "../loader/LoadingOverlay"
import { CarE, CompareE, ExcludeE, HeartE } from "../svgComponents/SvgComponents"
import { Image } from "../styled/styled";

import { ICardBox } from "../../types/dats"
import { imageApi } from "../../API/imageApi"




const CardBox: React.FC<ICardBox> = ({ date, locality, oldPrice, price, seen, title }) => {
    
    const [smalLocality, setSmalLocality] = useState<string>('');
    const [image, setImage] = useState<ArrayBuffer[] | null>(null);

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
        const imagesData: ArrayBuffer[] = await imageApi.getImage();
        const imagesArrayBufferPromises = imagesData.map(async (picture: ArrayBuffer) => {
            const response = await fetch(URL.createObjectURL(new Blob([picture], { type: 'image/jpeg' })));
            const arrayBuffer = await response.arrayBuffer();
            return arrayBuffer;
        });
        const imagesArrayBuffer = await Promise.all(imagesArrayBufferPromises);
        setImage(imagesArrayBuffer);
    }    

    return (
        <>
            <Flex card align="flex-start" seen={seen}>
                {seen ? <BoxSeen /> : undefined}
                <Flex imageBox>
                    {image 
                        ? 
                        <Swiper
                            pagination={true}
                            modules={[Pagination]}
                            className="mySwiper"
                            style={{ width: '224px', height: '260px' }}
                        >
                            {image.map(picture => (
                                <SwiperSlide key={Math.random()}><Image src={URL.createObjectURL(new Blob([picture], { type: 'image/jpeg' }))} alt="exampleImage" /></SwiperSlide>
                            ))}
                        </Swiper>
                        : <Loader />
                    }
                </Flex>
                <Flex iconsOnImage justify="space-between">
                    <CompareE />
                    <HeartE  />
                </Flex>
                <Flex iconsUnderImage derection="row" justify="space-between" margin="3px 0 0px 1px">
                    <CarE seen={seen} />
                    <ExcludeE seen={seen} />
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
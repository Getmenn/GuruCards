import { useEffect, useState } from "react"
import { cardApi } from "../API/cardApi"
import { IProduct } from "../types/dats"
import { CardBox } from "./card/CardBox"
import { Title } from "./card/Title"
import { Flex } from "./flex/Flex"
import { Loader } from "./loader/LoadingOverlay"

import arrow from "../assets/icons/arrow.svg"
import { StyledSpan } from "./styled/styled"


const Body: React.FC = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        hendleGetProducts()
        
    }, [])
    
    const hendleGetProducts = async (): Promise<void> => {
        setLoading(true)
        const result = await cardApi.getCart()
        setProducts([...products, ...result])
        setLoading(false)
    }
    
    return (
        <Flex width="968px" align="flex-start" >
            {loading && <Loader active={loading} />}
            {loading !== true &&
                <Flex align='flex-start' margin="0 0 0 34px" widthTitle>
                    <Title>Похожие объявления</Title>
                </Flex>
            }
            <Flex cardWrapper derection="row" wrap='wrap' margin="-18px 0 0 0" >
                 {products.map((product, i) =>
                     <CardBox
                        key={product.id}
                        date={product.date}
                        locality={product.locality}
                        oldPrice={product.oldPrice}
                        price={product.price}
                        seen={product.seen}
                        title={product.title}
                        id={product.id}
                     /> 
                )} 
            </Flex>
            {loading !== true &&
                <Flex margin="16px 0 0 0" width="100%" align="flex-end" derection="row" justify="flex-end">
                    <StyledSpan onClick={() => hendleGetProducts()}>
                        Показать еще 
                    </StyledSpan>
                    <img src={arrow} alt="arrow"/>
                </Flex>
            }
        </Flex>
    )
}

export {Body}
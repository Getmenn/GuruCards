export interface IProduct{
    date: number;
    id: string;
    locality: string;
    price: string;
    oldPrice: string;
    seen: boolean;
    title: string;
}

export interface ICardBox extends IProduct {
    key: string;
}

export interface IFlex{
    children: React.ReactNode;
    derection?: string;
    justify?: string;
    align?: string;
    margin?: string;
    card?: boolean;
    width?: string; 
    wrap?: string;
    height?: string;
    seen?: boolean;
    iconsOnImage?: boolean;
    iconsUnderImage?: boolean;
    imageBox?: boolean;
    cardWrapper?: boolean;
    widthTitle?: boolean;
}

export interface SvgI{
    seen: boolean;
}

export interface ILoader{
    active?: boolean;
}

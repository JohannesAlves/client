import { RibbonColors, RibbonSizes } from "../../components/Ribbon/types";

export type GameCardProps = {
    title: string;
    developer: string;
    image: string;
    price: string;
    promotionalPrice?: string;
    isFavorite?: boolean;
    onFav?: () => void;
    ribbon?: string;
    ribbonColor?: RibbonColors;
    ribbonSize?: RibbonSizes;
};

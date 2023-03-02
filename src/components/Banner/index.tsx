import Ribbon from "../../components/Ribbon";
import Button from "../../components/Button";
import * as S from "./styles";
import { BannerProps } from "./types";

export default function Banner({
    img,
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    ribbon,
    ribbonColor = "primary",
    ribbonSize = "normal",
}: BannerProps) {
    return (
        <S.Wrapper>
            {!!ribbon && (
                <Ribbon color={ribbonColor} size={ribbonSize}>
                    {ribbon}
                </Ribbon>
            )}
            <S.Image src={img} role="img" aria-label={title} />

            <S.Caption>
                <S.Title>{title}</S.Title>
                <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
                <Button as="a" href={buttonLink} size="medium">
                    {buttonLabel}
                </Button>
            </S.Caption>
        </S.Wrapper>
    );
}

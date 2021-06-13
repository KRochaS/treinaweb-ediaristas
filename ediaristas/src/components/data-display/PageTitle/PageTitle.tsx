import { PageSubTitleStyled, PageTitleContainer, PageTitleStyled } from './PageTitle.style';


type PageTitleProps = {
    title: string;
    subtitle: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {title}
            </PageTitleStyled>

            <PageSubTitleStyled>
                {subtitle}
            </PageSubTitleStyled>
        </PageTitleContainer>
    )
}
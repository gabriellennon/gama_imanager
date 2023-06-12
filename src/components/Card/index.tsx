import { ArrowCircleRight } from "phosphor-react";
import { ContainerCard, Content } from './styles';

interface ICardProps {
    title: string;
    description: string;
    goTo: string;
}

export const Card = ({ title, description, goTo }: ICardProps) => {
    return (
        <ContainerCard to={goTo}>
            <Content>
                <h5>{title}</h5>
                <p>{description}</p>
            </Content>
            <ArrowCircleRight size={25} color="#134E87" />
        </ContainerCard>
    )
}
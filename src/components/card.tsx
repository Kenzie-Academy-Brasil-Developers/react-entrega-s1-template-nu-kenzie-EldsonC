import { CardStyle } from "../assets/styles/card";

interface CardProps {
    description: string;
    value: number;
    type: string;
}

export function Card({description, value, type}:CardProps) {
    return (
        <CardStyle>
            <div className="left_container">
                <h3 className="title-3">{description}</h3>
                <p className="body">{type}</p>
            </div>

            <div className="right_container">
                <p className="body">R$ {value.toLocaleString('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                })}</p>
            </div>
        </CardStyle>
    );
}
import { CardStyle } from "../assets/styles/card";
import { BtnDelete } from "./btnDelete";

interface CardProps {
    description: string;
    value: string;
    type: string;
}

export function Card({description, value, type}:CardProps) {
    const valueInt = parseInt(value)

    return (
        <CardStyle>
            <div className="left_container">
                <h3 className="title-3">{description}</h3>
                <p className="body">{type}</p>
            </div>

            <div className="right_container">
                <p className="body">{valueInt.toLocaleString('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                })}</p>
                <BtnDelete/>
            </div>
        </CardStyle>
    );
}
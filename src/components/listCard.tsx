import { useEffect, useState } from "react";
import { ListCardStyle } from "../assets/styles/listCard";
import { Card } from "./card";

interface CardProps {
    title: string;
    value: string;
}
export function ListCard() {
    const [ arrayCard, setArraycard ] = useState<CardProps[]>([])

    useEffect(() => {
        const cardData = localStorage.getItem("cardData")
        if (cardData) {
            setArraycard(JSON.parse(cardData))
        }
    }, [])

    return (
        <ListCardStyle>
            <div className="header_list">
                <p className="title-3">Resumo financeiro</p>
            </div>

            <div className="container_cards">
                {arrayCard.map((data:CardProps, key:number) => {
                    return (
                        <Card
                            key={key}
                            description={data.title}
                            value={data.value}
                            type="Entrada"
                        />
                    )
                })}
            </div>
        </ListCardStyle>
    );
}
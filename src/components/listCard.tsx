import { ListCardStyle } from "../assets/styles/listCard";
import { Card } from "./card";

interface CardProps {
    title: string;
    value: string;
    entry: string;
}
export function ListCard({cardArray}: { cardArray: string }) {

    return (
        <ListCardStyle>
            <div className="header_list">
                <p className="title-3">Resumo financeiro</p>
            </div>

            <div className="container_cards">
                {JSON.parse(cardArray).map((data:CardProps, key:number) => {
                    return (
                        <Card
                            key={key}
                            description={data.title}
                            value={data.value}
                            type={data.entry}
                        />
                    )
                })}
            </div>
        </ListCardStyle>
    );
}
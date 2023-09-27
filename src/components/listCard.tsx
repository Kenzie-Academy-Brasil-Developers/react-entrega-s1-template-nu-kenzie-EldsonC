import { ListCardStyle } from "../assets/styles/listCard";
import { Card } from "./card";

export function ListCard() {
    return (
        <ListCardStyle>
            <div className="header_list">
                <p className="title-3">Resumo financeiro</p>
            </div>

            <div className="container_cards">
                <Card
                    description="Salário - Mês Dezembro"
                    value={6660}
                    type="Entrada"
                />

                <Card
                    description="Salário - Mês Dezembro"
                    value={6660}
                    type="Entrada"
                />

                <Card
                    description="Salário - Mês Dezembro"
                    value={6660}
                    type="Entrada"
                />

                <Card
                    description="Salário - Mês Dezembro"
                    value={6660}
                    type="Entrada"
                />
            </div>
        </ListCardStyle>
    );
}
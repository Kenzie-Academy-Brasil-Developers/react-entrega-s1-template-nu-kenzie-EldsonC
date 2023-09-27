import { TotalStyled } from "../assets/styles/total";

export function Total() {
    return (
        <TotalStyled>
            <div className="left_container_total">
                <h3 className="title-3">Valor total:</h3>
                <p className="body">O valor se refere ao saldo</p>
            </div>
            <div className="right_container_total">
                <p className="title-3">R$ 8184,00</p>
            </div>
        </TotalStyled>
    );
}
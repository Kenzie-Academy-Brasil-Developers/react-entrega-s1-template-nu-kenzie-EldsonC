import { useEffect, useState } from "react";
import { TotalStyled } from "../assets/styles/total";

interface Value {
    value: string;
}

export function Total() {
    const [ arrayData, setArrayData ] = useState<Value[]>([])
    let soma: number = 0

    useEffect(() => {
        const dataCard = localStorage.getItem("cardData")
        if (dataCard) {
            setArrayData(JSON.parse(dataCard));
        }
    }, [])
    
    const newArray = arrayData.map((data:Value) => {
        return parseInt(data.value)
    })
    
    soma = newArray.reduce((total, number) => total + number, 0)


    return (
        <TotalStyled>
            <div className="left_container_total">
                <h3 className="title-3">Valor total:</h3>
                <p className="body">O valor se refere ao saldo</p>
            </div>
            <div className="right_container_total">
                <p className="title-3">{soma.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}</p>
            </div>
        </TotalStyled>
    );
}
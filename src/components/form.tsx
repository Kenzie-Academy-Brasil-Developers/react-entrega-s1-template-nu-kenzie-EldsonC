import { useEffect, useState } from "react";
import { FormStyle } from "../assets/styles/form";
import { Button } from "./button";
import { InputComponent } from "./input";
import { SelectComponent } from "./select";

interface CardData {
    title: string;
    value: string;
}

export function Form() {
    const [ description, setDescription ] = useState("")
    const [ values, setValue ] = useState("")
    const [ cardArray, setCardArray ] = useState<CardData[]>([])
    const [ stateBtn, setStateBtn ] = useState(false)

    // const [ entry, setEntry ] = useState("")
    
    useEffect(() => {
        const dataCard = localStorage.getItem("cardData")
        if (dataCard) {
            setCardArray(JSON.parse(dataCard));
        }

        if (description && values != "") {
            setStateBtn(true)
        } else {
            setStateBtn(false)
        }
    }, [description, values])

    
    const addCard = () => {
        const newCardArray = [...cardArray]

        const dataCard: CardData = {
            title: description,
            value: values
        }
        
        newCardArray.push(dataCard)

        setCardArray(newCardArray)

        localStorage.setItem("cardData", JSON.stringify(newCardArray))
    }

    return (
        <FormStyle>
            <label className="body">Descrição</label>
            <InputComponent 
                type="text"
                value={description}
                onChange={setDescription}
                placeholder="Digite aqui sua descrição"
            />
            <label className="label_tip body">Ex: Compra de roupas</label>

            <label className="body">Valor (R$)</label>
            <InputComponent 
                type="text"
                value={values}
                onChange={setValue}
                placeholder="1"
            />

            <label className="body">Tipo de valor</label>
            <SelectComponent/>

            <Button
                active={stateBtn}
                onClick={(e) => {
                    e.preventDefault()
                    addCard()
                }}
                title="Inserir valor"
            />
        </FormStyle>
    );
}
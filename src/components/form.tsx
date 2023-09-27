import { FormStyle } from "../assets/styles/form";
import { Button } from "./button";
import { InputComponent } from "./input";
import { SelectComponent } from "./select";

export function Form() {
    return (
        <FormStyle>
            <label className="body">Descrição</label>
            <InputComponent 
                type="text"
                value=""
                placeholder="Digite aqui sua descrição"
            />
            <label className="label_tip body">Ex: Compra de roupas</label>

            <label className="body">Valor (R$)</label>
            <InputComponent 
                type="number"
                value=""
                placeholder="1"
            />

            <label className="body">Tipo de valor</label>
            <SelectComponent/>

            <Button
                title="Inserir valor"
            />
        </FormStyle>
    );
}
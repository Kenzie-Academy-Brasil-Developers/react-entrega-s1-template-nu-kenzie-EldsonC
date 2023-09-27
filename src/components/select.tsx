import { SelectStyled } from "../assets/styles/select";

export function SelectComponent() {
    return (
        <SelectStyled>
            <select>
                <option value="Entrada">
                    <p>Entrada</p>
                </option>
                <option value="Despesa">
                    <p>Despesa</p>
                </option>

                
            </select>
        </SelectStyled>
    );
}
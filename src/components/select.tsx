import { ChangeEvent } from "react";
import { SelectStyled } from "../assets/styles/select";

interface SelectProps {
    value: string;
    onChange: (value: string) => void;
}

export function SelectComponent({ onChange, value }: SelectProps) {

    const handleSelectOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;

        if (onChange) {
            onChange(newValue)
        }
    }
    return (
        <SelectStyled>
            <select onChange={handleSelectOnChange} value={value}>
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
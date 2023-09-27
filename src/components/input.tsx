import { ChangeEvent } from "react";
import { InputStyle } from "../assets/styles/input";

interface InputProps {
    type: string;
    value?: string;
    onChange?: (value: any) => void;
    placeholder: string;
}

export function InputComponent({type, placeholder, onChange, value}:InputProps) {

    const handleInputOnChange = (e:ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (onChange) {
            onChange(newValue)
        }
    }

    return (
        <InputStyle>
            <input
                type={type} 
                value={value}
                onChange={handleInputOnChange} 
                placeholder={placeholder}
            />
        </InputStyle>
    );
}
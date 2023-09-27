import { InputStyle } from "../assets/styles/input";

interface InputProps {
    type: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder: string;
}

export function InputComponent({type, placeholder}:InputProps) {
    return (
        <InputStyle>
            <input 
                type={type} 
                placeholder={placeholder}
            />
        </InputStyle>
    );
}
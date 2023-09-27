import { ButtonStyle } from "../assets/styles/button";

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

export function Button({title}:ButtonProps) {
    return (
        <ButtonStyle>
            <button className="headline">{title}</button>
        </ButtonStyle>  
    );
}
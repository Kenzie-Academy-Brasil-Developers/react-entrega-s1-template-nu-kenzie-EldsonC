import React from "react"
import { ButtonStyle } from "../assets/styles/button";

interface ButtonProps {
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({title, onClick}:ButtonProps) {
    return (
        <ButtonStyle>
            <button 
                className="headline"
                onClick={onClick}
            >{title}</button>
        </ButtonStyle>  
    );
}
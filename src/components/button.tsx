import React from "react"
import { ButtonStyle } from "../assets/styles/button";

interface ButtonProps {
    active: boolean;
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ active, title, onClick}:ButtonProps) {
    const clickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        return
    }
    return (
        <ButtonStyle>
            <button 
                id="button"
                className={active ? "headline active" : "headline notActive"}
                onClick={active ? onClick : clickAction}
            >{title}</button>
        </ButtonStyle>  
    );
}
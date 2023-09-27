import { Logo } from "../assets/icons/logo";
import { HeaderStyle } from "../assets/styles/header";

export function Header() {
    return (
        <HeaderStyle>
            <div className="container_header">
                <Logo/>
            </div>
        </HeaderStyle>
    );
}
import Logo from ".";
import { StyledLink } from "./style";

export default function LogoLinkToHome() {
    return (
        <StyledLink to="/">
            <Logo />
        </StyledLink>
    );
}

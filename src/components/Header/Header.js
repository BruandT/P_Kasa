import Navigation from "../Navigation/Navigation";
import "./Header.css"

function Header() {
    return (
        <>
            <header>
                <img src="./assets/logo/logo.jpg" alt="Logo Kasa" />
                <Navigation />
            </header>
        </>

    )
}

export default Header;
import headerLogo from "../assets/headerLogo.png";

export default function Nav() {

    function navOnClick() {
        var navClass = document.getElementById("navbar");
        if (navClass.className === "navbar") {
            navClass.className += " responsive";
        } else {
            navClass.className = "navbar";
        }
    }
    return (
        <nav className="navbar" id="navbar">
            <img src={headerLogo} id="navLogo" />
            <ul>
                <a href="#"><li>HOME</li></a>
                <a href="#"><li>ABOUT</li></a>
                <a href="#"><li>MENU</li></a>
                <a href="#"><li>RESERVATIONS</li></a>
                <a href="#"><li>ORDER ONLINE</li></a>
                <a href="#"><li>LOGIN</li></a>
            </ul>
            <a href="javascript:void(0);" className="icon" >
                <i className="fa fa-bars fa-2x" onClick={navOnClick}></i>
            </a>
        </nav>
    )
}
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className='footerSection'>

            <nav className='footerNavContainer'>
                <img src={logo} className='footerLogo' />
                <ul>
                    <h2>Navigation</h2>
                    <a href='#'><li>Home</li></a>
                    <a href='#'><li>About</li></a>
                    <a href='#'><li>Menu</li></a>
                    <a href='#'><li>Reservations</li></a>
                    <a href='#'><li>Order Online</li></a>
                    <a href='#'><li>Login</li></a>
                </ul>
                <ul>
                    <h2>Contact</h2>
                    <a href='#'><li>Address</li></a>
                    <a href='#'><li>Phone Number</li></a>
                    <a href='#'><li>Email</li></a>
                </ul>
                <ul>
                    <h2>Social Media</h2>
                    <a href='#'><li>Instagram</li></a>
                    <a href='#'><li>Twitter</li></a>
                    <a href='#'><li>Facebook</li></a>
                </ul>
            </nav>
        </footer>
    )
}
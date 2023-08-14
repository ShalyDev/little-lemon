import logo from '../logo.png';

export default function Footer() {
    return (
        <footer>
            <img src={logo} />
            <nav>
                <ul>
                    <h2>Navigation</h2>
                    <a><li>Home</li></a>
                    <a><li>About</li></a>
                    <a><li>Menu</li></a>
                    <a><li>Reservations</li></a>
                    <a><li>Order Online</li></a>
                    <a><li>Login</li></a>
                </ul>
                <ul>
                    <h2>Contact</h2>
                    <a><li>Address</li></a>
                    <a><li>Phone Number</li></a>
                    <a><li>Email</li></a>
                </ul>
                <ul>
                    <h2>Social Media</h2>
                    <a><li>Instagram</li></a>
                    <a><li>Twitter</li></a>
                    <a><li>Facebook</li></a>
                </ul>
            </nav>
        </footer>
    )
}
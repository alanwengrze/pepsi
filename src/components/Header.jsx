import logo from '../assets/logo.png';
export function Header() {
    return(
        <nav className="flex justify-between items-center pt-5">
            <img src={logo} alt="Logo Pepsi" className="w-20" />
            <ul className="flex gap-7 text-white">
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
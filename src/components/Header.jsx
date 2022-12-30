import logo from '../assets/logo.png';
export function Header() {
    return(
        <nav className="w-10/12 m-auto flex justify-between items-center pt-5">
            <img src={logo} alt="Logo Pepsi" className="w-20" />
            <ul className="flex gap-7 flex-nowrap text-white max-sm:text-sm">
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
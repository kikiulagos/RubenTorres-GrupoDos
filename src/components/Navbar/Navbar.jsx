import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <>
            <nav>
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/Products">Products</Link>
                    </li>
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/Contact">Contact</Link>
                    </li>
                    <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(45,58,75)] transition duration-300 ease-linear hover:text-[rgb(255,225,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/About">About</Link>
                    </li>              
                </ul>
            </nav>
        </>)
}
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { IoMenu } from "react-icons/io5";
import { MdNightlight } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="nav container border-b border-(--color-stone)/20">
            <NavLink to="/" className="logo">MICHAELSON</NavLink>

            <div className="nav-right">
                {/* Right Controls */}
                <div className="nav-actions">
                    {/* <button onClick={toggleTheme} className="theme-btn">
                        {theme === "light" ? <MdNightlight /> : <MdOutlineWbSunny />}
                    </button> */}

                    <button className="menu-btn" onClick={() => setOpen(!open)}>
                        <IoMenu />
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/collections">Collections</NavLink>
                    {/* <NavLink to="/lookbook">Lookbook</NavLink> */}
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`z-10 mobile-menu ${open ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                    ✕
                </button>
                <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
                <NavLink to="/collections" onClick={() => setOpen(false)}>Collections</NavLink>
                {/* <NavLink to="/lookbook" onClick={() => setOpen(false)}>Lookbook</NavLink> */}
                <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
            </div>
        </nav>
    );
}
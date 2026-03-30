import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import BrandLogo from "../ui/BrandLogo";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav container border-b border-(--color-stone)/20">
            <NavLink to="/" className="logo">
            <img src="/Logo.svg" alt="michaelson-logo" width={65} />
                {/* <BrandLogo size="md" /> */}
            </NavLink>

            <div className="nav-right">
                {/* Right Controls */}
                <div className="nav-actions">
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

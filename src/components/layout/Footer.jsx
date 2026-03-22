import { Link } from "react-router-dom";
import { MdOutlineMail, MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="w-full mb-5 border-b border-(--color-stone)/20" />
            <div className="footer-grid">
                <div>
                    <h3>MICHAELSON</h3>
                    <p>Crafting timeless luxury footwear that bridges British elegance with African heritage.
                        Each pair tells a story of prestige, confidence, and artisanal excellence.</p>
                </div>

                <div>
                    <h4>Navigation</h4>
                    <nav className="footer-nav" aria-label="Footer navigation">
                        <Link to="/about" className="footer-link">About</Link>
                        <Link to="/collections" className="footer-link">Collections</Link>
                    </nav>
                </div>

                <div>
                    <h4>Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="text-(--color-stone)">London, United Kingdom</li>
                        <li className="text-(--color-stone)">Lagos, Nigeria</li>
                        <li>
                            <a href="mailto:info@michaelson.com" className="text-(--color-stone) hover:text-ivory transition-colors">
                                info@michaelson.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:+442012345678" className="text-(--color-stone) hover:text-ivory transition-colors">
                                +44 20 1234 5678
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                    <h4>Social</h4>
                    <div className="social-links">
                        <a
                            href="mailto:info@michaelson.com"
                            className="social-link"
                            aria-label="Email Michaelson"
                        >
                            <MdOutlineMail size={20} />
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=2348146379667&text=Hello%20Michaelson!"
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Michaelson"
                        >
                            <MdOutlineWhatsapp size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/michaelsonfw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Michaelson"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom mt-16 pt-8 border-t border-(--color-stone)/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-(--color-stone)">
                <p>© 2026 Michaelson. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-ivory transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-ivory transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
import { useEffect } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import { LayoutDashboard, Package, Mail, LogOut } from 'lucide-react';

export function AdminLayout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, initialized } = useSelector((state) => state.auth);

    useEffect(() => {
        // Wait for auth to initialize, then check if user is logged in
        if (initialized && !user) {
            navigate('/admin/login');
        }
    }, [user, initialized, navigate]);

    const handleLogout = async () => {
        await dispatch(logoutUser());
        navigate('/admin/login');
    };

    // Show loading state while auth initializes
    if (!initialized) {
        return (
            <div className="min-h-screen bg-(--color-ivory) flex items-center justify-center">
                <div className="text-(--color-navy)">Loading...</div>
            </div>
        );
    }

    // Don't render layout if not authenticated
    if (!user) {
        return null;
    }

    const navLinks = [
        { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { to: '/admin/products', icon: Package, label: 'Products' },
        { to: '/admin/inquiries', icon: Mail, label: 'Inquiries' },
    ];

    return (
        <div className="min-h-screen bg-(--color-ivory)">
            {/* Top Navigation Bar */}
            <header className="bg-(--color-navy) text-(--color-ivory)">
                <div className="mx-auto px-6 md:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Brand */}
                        <div className="flex items-center gap-8">
                            <h1 className="text-xl">Michaelson Admin</h1>

                            {/* Navigation Links */}
                            <nav className="hidden md:flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-2 transition-colors ${isActive
                                                ? 'text-(--color-gold)'
                                                : 'text-(--color-stone) hover:text-(--color-ivory)'
                                            }`
                                        }
                                    >
                                        <link.icon size={18} />
                                        <span className="text-sm uppercase tracking-wider">{link.label}</span>
                                    </NavLink>
                                ))}
                            </nav>
                        </div>

                        {/* User Info & Logout */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:block text-sm text-(--color-stone)">
                                {user?.email}
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 text-(--color-stone) hover:text-(--color-ivory) transition-colors"
                            >
                                <LogOut size={18} />
                                <span className="text-sm uppercase tracking-wider hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="md:hidden flex items-center gap-1 pb-3 border-t border-(--color-ivory)/10 pt-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-3 py-2 text-xs transition-colors ${isActive
                                        ? 'text-(--color-gold)'
                                        : 'text-(--color-stone) hover:text-(--color-ivory)'
                                    }`
                                }
                            >
                                <link.icon size={16} />
                                <span className="uppercase tracking-wider">{link.label}</span>
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="mx-auto px-6 md:px-8 py-8 md:py-12">
                <Outlet />
            </main>
        </div>
    );
}

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginUser, clearError } from '../../features/auth/authSlice';
import { Eye, EyeOff, Lock } from 'lucide-react';

export function AdminLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/admin/dashboard');
    }
  }, [user, navigate]);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen bg-(--color-ivory) flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-(--color-gold)" />
          </div>
          <h1 className="text-4xl text-(--color-navy) mb-2">Michaelson</h1>
          <p className="text-(--color-taupe) uppercase tracking-[0.2em] text-xs">Admin Portal</p>
        </div>

        {/* Login Form */}
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl text-(--color-navy) mb-8 text-center">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-(--color-oxblood)/10 border border-(--color-oxblood)/30 text-(--color-oxblood) px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-(--color-gold) transition-colors"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-(--color-gold) transition-colors pr-12"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-(--color-taupe) hover:text-midnight-navy transition-colors"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-(--color-navy) text-(--color-ivory) hover:bg-(--color-gold) hover:text-midnight-navy transition-all uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-(--color-taupe) text-sm">
              Authorized access only
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-8">
          <p className="text-(--color-taupe) text-xs">
            © 2026 Michaelson. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

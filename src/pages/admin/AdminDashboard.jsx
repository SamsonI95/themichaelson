import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { fetchProducts } from '../../features/products/productsSlice';
import { fetchInquiries } from '../../features/inquiries/inquiriesSlice';
import { Package, Mail, TrendingUp, Eye } from 'lucide-react';

export function AdminDashboard() {
  const dispatch = useDispatch();
  const { items: products } = useSelector((state) => state.products);
  const { items: inquiries } = useSelector((state) => state.inquiries);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchInquiries());
  }, [dispatch]);

  const unreadInquiries = inquiries.filter(inquiry => !inquiry.read).length;

  const stats = [
    {
      label: 'Total Products',
      value: products.length,
      icon: Package,
      link: '/admin/products',
      color: 'text-(--color-gold)',
    },
    {
      label: 'Total Inquiries',
      value: inquiries.length,
      icon: Mail,
      link: '/admin/inquiries',
      color: 'text-(--color-navy)',
    },
    {
      label: 'Unread Inquiries',
      value: unreadInquiries,
      icon: Eye,
      link: '/admin/inquiries',
      color: 'text-(--color-oxblood)',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl text-(--color-navy) mb-2">Dashboard</h1>
        <p className="text-soft-taupe">Welcome back. Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            to={stat.link}
            className="bg-white p-8 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-start justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className="text-4xl text-(--color-navy) mb-2">{stat.value}</div>
            <div className="text-sm uppercase tracking-wider text-soft-taupe group-hover:text-(--color-gold) transition-colors">
              {stat.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-8">
        <h2 className="text-2xl text-(--color-navy) mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/admin/products/new"
            className="px-6 py-4 border border-(--color-navy)/20 hover:border-(--color-gold) hover:bg-(--color-gold)/5 transition-all text-center"
          >
            <div className="text-sm uppercase tracking-wider text-(--color-navy)">
              Add New Product
            </div>
          </Link>
          <Link
            to="/admin/inquiries"
            className="px-6 py-4 border border-(--color-navy)/20 hover:border-(--color-gold) hover:bg-(--color-gold)/5 transition-all text-center"
          >
            <div className="text-sm uppercase tracking-wider text-(--color-navy)">
              View Inquiries
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Inquiries Preview */}
      {inquiries.length > 0 && (
        <div className="mt-8 bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-(--color-navy)">Recent Inquiries</h2>
            <Link 
              to="/admin/inquiries"
              className="text-sm uppercase tracking-wider text-(--color-gold) hover:text-(--color-navy) transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {inquiries.slice(0, 3).map((inquiry) => (
              <div 
                key={inquiry.id}
                className="flex items-start justify-between py-4 border-b border-(--color-navy)/10 last:border-0"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-(--color-navy)">{inquiry.name}</h3>
                    {!inquiry.read && (
                      <span className="px-2 py-0.5 bg-(--color-oxblood) text-white text-xs uppercase tracking-wider">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-soft-taupe text-sm">{inquiry.email}</p>
                  <p className="text-(--color-navy)/70 text-sm mt-2 line-clamp-2">{inquiry.message}</p>
                </div>
                <div className="text-xs text-soft-taupe ml-4">
                  {inquiry.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

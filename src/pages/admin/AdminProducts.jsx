import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { fetchProducts, deleteProduct } from '../../features/products/productsSlice';
import { Plus, Pencil, Trash2, Package } from 'lucide-react';

export function AdminProducts() {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteProduct(id));
    setDeleteConfirm(null);
  };

  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-(--color-taupe)">Loading products...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl text-(--color-navy) mb-2">Products</h1>
          <p className="text-(--color-taupe)">Manage your product catalog</p>
        </div>
        <Link
          to="/admin/products/new"
          className="flex items-center gap-2 px-6 py-3 bg-(--color-navy) text-(--color-ivory) hover:bg-(-color-gold) hover:text-(--color-navy) transition-all uppercase tracking-wider text-sm"
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {error && (
        <div className="bg-oxblood/10 border border-oxblood/30 text-oxblood px-4 py-3 mb-6 text-sm">
          {error}
        </div>
      )}

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="bg-white p-12 text-center">
          <Package className="w-16 h-16 text-(--color-taupe) mx-auto mb-4" />
          <h3 className="text-xl text-(--color-navy) mb-2">No products yet</h3>
          <p className="text-(--color-taupe) mb-6">Get started by adding your first product</p>
          <Link
            to="/admin/products/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-(--color-navy) text-(--color-ivory) hover:bg-(-color-gold) hover:text-(--color-navy) transition-all uppercase tracking-wider text-sm"
          >
            <Plus size={18} />
            Add Product
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white group">
              {/* Product Image */}
              <div className="aspect-4/3 bg-warm-stone/20 overflow-hidden">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="w-12 h-12 text-(--color-taupe)" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-(--color-taupe)">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl text-(--color-navy) mb-2">{product.name}</h3>
                <p className="text-(--color-taupe) text-sm mb-4 line-clamp-2">{product.description}</p>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-(--color-navy)/10">
                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-(--color-navy)/20 hover:border-(-color-gold) hover:bg-(-color-gold)/5 transition-all text-sm uppercase tracking-wider text-(--color-navy)"
                  >
                    <Pencil size={16} />
                    Edit
                  </Link>
                  {deleteConfirm === product.id ? (
                    <>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="flex-1 px-4 py-2 bg-oxblood text-white hover:bg-oxblood/90 transition-all text-sm uppercase tracking-wider"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="px-4 py-2 border border-(--color-navy)/20 hover:bg-warm-stone/10 transition-all text-sm uppercase tracking-wider text-(--color-navy)"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(product.id)}
                      className="px-4 py-2 border border-(--color-navy)/20 hover:border-oxblood hover:bg-oxblood/5 transition-all text-oxblood"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

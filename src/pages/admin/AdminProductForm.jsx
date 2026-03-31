import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { addProduct, updateProduct, fetchProducts } from '../../features/products/productsSlice';
import { Upload, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';

export function AdminProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { items: products, loading } = useSelector((state) => state.products);
  
  const isEditMode = Boolean(id);
  const existingProduct = isEditMode ? products.find(p => p.id === id) : null;

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    materials: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEditMode && products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, isEditMode, products.length]);

  useEffect(() => {
    if (existingProduct) {
      setFormData({
        name: existingProduct.name || '',
        description: existingProduct.description || '',
        category: existingProduct.category || '',
        price: existingProduct.price || '',
        materials: existingProduct.materials || '',
      });
      if (existingProduct.imageUrl) {
        setImagePreview(existingProduct.imageUrl);
      }
    }
  }, [existingProduct]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size must be less than 5MB');
        return;
      }

      setImageFile(file);
      setError('');
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
  };

  const showFormError = (message) => {
    setError(message);
    toast.error(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name.trim()) {
      showFormError('Product name is required');
      return;
    }
    if (!formData.category.trim()) {
      showFormError('Category is required');
      return;
    }
    if (!formData.price.trim()) {
      showFormError('Price is required');
      return;
    }
    if (!isEditMode && !imageFile) {
      showFormError('Product image is required');
      return;
    }

    try {
      if (isEditMode) {
        await dispatch(updateProduct({
          id,
          productData: formData,
          imageFile: imageFile || null,
          existingImageUrl: existingProduct?.imageUrl || '',
          existingImagePublicId: existingProduct?.imagePublicId || '',
        })).unwrap();
        toast.success(`${formData.name} updated successfully.`);
      } else {
        await dispatch(addProduct({
          productData: formData,
          imageFile,
        })).unwrap();
        toast.success(`${formData.name} added to the catalog.`);
      }
      navigate('/admin/products');
    } catch (err) {
      const message = err || 'Failed to save product';
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link 
          to="/admin/products"
          className="inline-flex items-center gap-2 text-(--color-taupe) hover:text-(--color-navy) transition-colors mb-4"
        >
          <ArrowLeft size={18} />
          <span className="text-sm uppercase tracking-wider">Back to Products</span>
        </Link>
        <h1 className="text-4xl text-(--color-navy) mb-2">
          {isEditMode ? 'Edit Product' : 'Add New Product'}
        </h1>
        <p className="text-(--color-taupe)">
          {isEditMode ? 'Update product information' : 'Add a new product to your catalog'}
        </p>
      </div>

      {/* Form */}
      <div className="bg-white p-8 md:p-12 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <div className="bg-(--color-oxblood)/10 border border-(--color-oxblood)/30 text-(--color-oxblood) px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {/* Product Name */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2"
            >
              Product Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-muted-gold transition-colors"
              placeholder="e.g., Classic Oxford Brogue"
              disabled={loading}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label 
              htmlFor="category" 
              className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2"
            >
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-muted-gold transition-colors"
              disabled={loading}
              required
            >
              <option value="">Select a category</option>
              <option value="oxfords">Oxfords</option>
              <option value="derbys">Derbys</option>
              <option value="loafers">Loafers</option>
              <option value="boots">Boots</option>
              <option value="brogues">Brogues</option>
              <option value="sneakers">Sneakers</option>
              <option value="flats">Flats</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label 
              htmlFor="description" 
              className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-muted-gold transition-colors resize-none"
              placeholder="Describe the product, its features, materials, and craftsmanship..."
              disabled={loading}
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2"
            >
              Price *
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-muted-gold transition-colors"
              placeholder="e.g., From GBP 925"
              disabled={loading}
              required
            />
          </div>

          {/* Materials */}
          <div>
            <label
              htmlFor="materials"
              className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2"
            >
              Materials
            </label>
            <input
              type="text"
              id="materials"
              name="materials"
              value={formData.materials}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-(--color-navy)/20 bg-white text-(--color-navy) focus:outline-none focus:border-muted-gold transition-colors"
              placeholder="e.g., Museum Calf, Bespoke Hardware"
              disabled={loading}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm uppercase tracking-wider text-(--color-navy) mb-2">
              Product Image {!isEditMode && '*'}
            </label>
            
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-64 object-cover border border-(--color-navy)/20"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 p-2 bg-(--color-oxblood) text-white hover:bg-(--color-oxblood)/90 transition-colors"
                  disabled={loading}
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <label className="block w-full h-64 border-2 border-dashed border-(--color-navy)/20 hover:border-muted-gold transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full text-(--color-taupe)">
                  <Upload className="w-12 h-12 mb-4" />
                  <span className="text-sm uppercase tracking-wider">Click to upload image</span>
                  <span className="text-xs mt-2">PNG, JPG up to 5MB</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  disabled={loading}
                />
              </label>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="cursor-pointer flex-1 px-8 py-4 bg-(--color-navy) text-(--color-ivory) hover:bg-(--color-gold) hover:text-(--color-navy) transition-all uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Saving...' : isEditMode ? 'Update Product' : 'Add Product'}
            </button>
            <Link
              to="/admin/products"
              className="px-8 py-4 border border-(--color-navy)/20 hover:bg-warm-stone/10 transition-all uppercase tracking-wider text-sm text-(-navy)"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

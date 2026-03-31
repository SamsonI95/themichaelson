import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Mail, Package } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { fetchProducts } from '../features/products/productsSlice';

const Collection = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <>
      <section className="py-12 bg-(--color-ivory)">
        <div className="mx-auto px-6 lg:px-18">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-6">Collections</p>
              <h1 className="text-5xl md:text-7xl text-(--color-navy) mb-8 leading-tight">
                Timeless Footwear, Crafted to Perfection
              </h1>
              <p className="text-(--color-taupe) text-xl md:text-2xl leading-relaxed">
                Each collection represents the pinnacle of luxury shoemaking, meticulously handcrafted
                by master artisans using the world's finest materials.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-(--color-stone)/10">
        <div className="mx-auto px-6 lg:px-18">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {[...Array(4)].map((_, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="group">
                    <div className="relative aspect-4/5 overflow-hidden bg-(--color-navy) mb-6">
                      <div className="w-full h-full shimmer"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="h-8 bg-gray-300 rounded animate-pulse w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded animate-pulse w-16"></div>
                      </div>
                      <div className="h-4 bg-gray-300 rounded animate-pulse w-full"></div>
                      <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
                      <div className="h-10 bg-gray-300 rounded animate-pulse w-32"></div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="bg-white p-12 text-center">
              <Package className="mx-auto mb-4 h-16 w-16 text-(--color-taupe)" />
              <h3 className="mb-2 text-xl text-(--color-navy)">No products available</h3>
              <p className="text-(--color-taupe)">
                Products added from the admin dashboard will appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {products.map((item, index) => (
                <FadeIn key={item.id} delay={index * 0.1}>
                  <div className="group">
                    <div className="relative aspect-4/5 overflow-hidden bg-(--color-navy) mb-6">
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Package className="h-12 w-12 text-(--color-ivory)/60" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-3xl text-(--color-navy)">{item.name}</h3>
                        {item.price && (
                          <span className="text-sm text-(--color-taupe) whitespace-nowrap">{item.price}</span>
                        )}
                      </div>

                      {item.description && (
                        <p className="text-(--color-taupe) leading-relaxed">{item.description}</p>
                      )}

                      {item.materials && (
                        <p className="text-sm text-(--color-gold) uppercase tracking-wider">{item.materials}</p>
                      )}

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 mt-4 px-6 py-3 border border-(--color-navy) text-(--color-navy) hover:bg-(--color-navy) hover:text-(--color-ivory) transition-all group/btn"
                      >
                        <Mail size={16} />
                        <span className="uppercase tracking-wider text-sm">Inquire</span>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-(--color-navy) text-(--color-ivory)">
        <div className="mx-auto px-6 lg:px-18">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-6">Bespoke Service</p>
              <h2 className="text-4xl md:text-5xl text-(--color-gold) mb-8 leading-tight">
                Create Something Uniquely Yours
              </h2>
              <p className="text-(--color-stone) text-lg md:text-xl leading-relaxed mb-10">
                Our bespoke service offers a completely personalized experience. From material selection to
                final fitting, work directly with our master craftsmen to create footwear that is exclusively
                yours, tailored to your exact specifications, measurements, and style preferences.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-(--color-gold) text-(--color-gold) hover:bg-(--color-gold) hover:text-(--color-navy) transition-all"
              >
                <span className="uppercase tracking-wider text-sm">Begin Your Bespoke Journey</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-(--color-ivory)">
        <div className="mx-auto px-6 lg:px-18">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-4">Care Guide</p>
              <h2 className="text-4xl md:text-5xl text-(--color-navy) max-w-3xl mx-auto leading-tight">
                Preserving Excellence
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <FadeIn delay={0.2}>
              <div>
                <div className="w-16 h-16 mb-6 rounded-full bg-(--color-gold)/20 flex items-center justify-center">
                  <span className="text-2xl">Care</span>
                </div>
                <h3 className="text-xl text-(--color-navy) mb-3">Regular Conditioning</h3>
                <p className="text-(--color-taupe) leading-relaxed">
                  Use premium leather conditioner every 3-4 weeks to maintain suppleness and prevent cracking.
                  We recommend products specifically designed for fine calfskin.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <div className="w-16 h-16 mb-6 rounded-full bg-(--color-gold)/20 flex items-center justify-center">
                  <span className="text-2xl">Store</span>
                </div>
                <h3 className="text-xl text-(--color-navy) mb-3">Proper Storage</h3>
                <p className="text-(--color-taupe) leading-relaxed">
                  Always use cedar shoe trees when not wearing your Michaelson shoes. Store in a cool,
                  dry place away from direct sunlight to preserve the leather's natural oils.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div>
                <div className="w-16 h-16 mb-6 rounded-full bg-(--color-gold)/20 flex items-center justify-center">
                  <span className="text-2xl">Restore</span>
                </div>
                <h3 className="text-xl text-(--color-navy) mb-3">Professional Care</h3>
                <p className="text-(--color-taupe) leading-relaxed">
                  For deep cleaning, resoling, or restoration, we offer complimentary professional care services
                  for all Michaelson footwear at our London and Lagos ateliers.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;

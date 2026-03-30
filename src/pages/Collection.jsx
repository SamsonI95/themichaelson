import React from 'react'
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router';
import { Mail } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'The Monk',
    description: 'A bold expression of refinement, defined by its signature buckle and sleek, structured silhouette. Designed for those who appreciate quiet authority and timeless distinction.',
    price: 'From £925',
    image: '/IMG_6686.jpg',
    materials: 'Museum Calf, Bespoke Hardware',
  },
  {
    id: 2,
    name: 'The Chelsea',
    description: 'A seamless blend of modern minimalism and classic form. The elasticated side panels and clean lines create a versatile boot that transitions effortlessly from day to evening wear.',
    price: 'From £995',
    image: '/IMG_9327.jpg',
    materials: 'Suede & Calfskin, Leather Sole',
  },
  {
    id: 3,
    name: 'The BirkenStock',
    description: 'A relaxed yet elevated silhouette, reimagined with premium materials and precise craftsmanship. Designed for comfort without compromising on understated luxury.',
    price: 'From £895',
    image: '/IMG_9500.jpg',
    materials: 'Italian Calfskin, Oak Bark Sole',
  },
  {
    id: 4,
    name: 'The Half-Shoe',
    description: 'A refined slip-on designed for ease and elegance. Its low profile and clean finish make it an essential for the modern wardrobe, balancing comfort with polished simplicity.',
    price: 'From £795',
    image: '/IMG_6240.jpg',
    materials: 'French Box Calf, Leather Sole',
  },
  {
    id: 5,
    name: 'The Slipper',
    description: 'A sophisticated take on casual luxury, crafted with soft structure and fine detailing. Ideal for relaxed settings while maintaining a distinguished, tailored appearance.',
    price: 'From £875',
    image: '/IMG_2003.jpeg',
    materials: 'Scotch Grain Leather, Storm Welt',
  },
  // {
  //   id: 6,
  //   name: 'The Derby',
  //   description: 'Versatile elegance for every occasion',
  //   price: 'From £850',
  //   image: 'https://images.unsplash.com/photo-1759793501020-75fbf108d705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXJieSUyMHNob2VzJTIwYnJvd24lMjBsZWF0aGVyJTIwcHJlbWl1bXxlbnwxfHx8fDE3NzM3NjQ2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  //   materials: 'Vegetable-Tanned Calfskin, Cork Footbed',
  // },
];

const Collection = () => {
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
                Each collection represents the pinnacle of luxury shoemaking—meticulously handcrafted
                by master artisans using the world's finest materials.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 md:py-32 bg-(--color-stone)/10">
        <div className="mx-auto px-6 lg:px-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {collections.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="group">
                  <div className="relative aspect-4/5 overflow-hidden bg-(--color-navy) mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-3xl text-(--color-navy)">{item.name}</h3>
                      <span className="text-sm text-(--color-taupe) whitespace-nowrap">{item.price}</span>
                    </div>

                    <p className="text-(--color-taupe) leading-relaxed">{item.description}</p>

                    <p className="text-sm text-(--color-gold) uppercase tracking-wider">{item.materials}</p>

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
        </div>
      </section>

      {/* Bespoke Section */}
      <section className="py-24 md:py-32 bg-(--color-navy) text---color-ivory">
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
                yours—tailored to your exact specifications, measurements, and style preferences.
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

      {/* Care & Maintenance */}
      <section className="py-24 md:py-32 bg---color-ivory">
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
                  <span className="text-2xl">🧴</span>
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
                  <span className="text-2xl">🌙</span>
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
                  <span className="text-2xl">✨</span>
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
  )
}

export default Collection

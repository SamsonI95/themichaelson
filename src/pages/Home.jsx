import { FadeIn } from '@/components/FadeIn'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const heroImages = [
    '/images/shoes/shoe3.jpg',
    '/images/shoes/Michaelson-Sandal.jpg'
]

const Home = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const tid = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroImages.length);
        }, 6000); // every 6s
        return () => clearInterval(tid);
    }, []);

    return (
        <div className="pt-15 lg:pt-18" style={{ fontFamily: 'var(--font-alternate)' }}>
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0">
                    {heroImages.map((img, i) => (
                        <motion.img
                            key={img}
                            src={img}
                            alt="Luxury Michaelson Shoes"
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === i ? 1 : 0 }}
                            transition={{ duration: 1.5, ease: 'easeInOut' }}
                        />
                    ))}

                    {/* <div className="absolute inset-0 bg-linear-to-b from-midnight-navy/50 via-transparent to-midnight-navy/80" /> */}
                </div>

                <div className="relative h-full max-w-6xl px-6 lg:px-18 flex items-center">
                    <div className="max-w-3xl gap-5">
                        <FadeIn>
                            <p className="text-(--color-ivory) text-xs md:text-sm uppercase tracking-[0.2em] mb-6">
                                London • Akure
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl text-(--color-ivory) mb-6 leading-[0.95]">
                                Timeless Elegance,<br />Rooted in Heritage
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <p className="text-(--color-stone) text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                                Michaelson crafts luxury footwear that bridges British elegance with confident African heritage.
                                Each pair is a testament to prestige, craftsmanship, and timeless style.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/collections"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-(--color-ivory) text-midnight-navy hover:bg-(--color-gold) hover:text-(--color-ivory) transition-all group"
                                >
                                    <span className="uppercase tracking-wider text-sm">Explore Collections</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-(--color-ivory) text-(--color-ivory) hover:bg-(--color-gold) hover:text-(--color-ivory) transition-all"
                                >
                                    <span className="uppercase tracking-wider text-sm">Our Story</span>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            <section className="py-24 lg:pt-32 lg:pb-8 bg-(--color-ivory)">
                <div className="mx-auto px-6 lg:px-18">
                    <FadeIn>
                        <div className="mx-auto text-center">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6">Our Philosophy</p>
                            <h2 className="text-4xl md:text-6xl text-midnight-navy mb-8 leading-tight">
                                Where British Refinement Meets African Confidence
                            </h2>
                            <p className="text-soft-taupe text-lg md:text-xl leading-relaxed">
                                At Michaelson, we believe that luxury is not merely in the materials, but in the story each piece tells.
                                Our footwear represents a bridge between cultures, a fusion of meticulous British craftsmanship
                                and the bold, confident spirit of African heritage. Every stitch, every cut, every finish speaks to a legacy
                                of excellence that transcends borders.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
            <section className="py-24 lg:pt-8 lg:pb-32 bg-warm-stone/20">
                <div className="mx-auto px-6 lg:px-18">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-4">Collections</p>
                            <h2 className="text-4xl md:text-5xl text-midnight-navy">Featured Styles</h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <FadeIn delay={0.2}>
                            <Link to="/collections" className="group block">
                                <div className="relative overflow-hidden bg-deep-charcoal mb-6">
                                    <img
                                        src="/images/shoes/Michaelson-Sandal.jpg"
                                        alt="Oxford Collection"
                                        className="w-full h-82.5 object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-2xl md:text-3xl text-midnight-navy mb-2">The Michaelson-Sandal</h3>
                                <p className="text-soft-taupe mb-4">Classic British elegance reimagined for the modern gentleman.</p>
                                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-muted-gold group-hover:gap-3 transition-all">
                                    Explore Collection <ArrowRight size={16} />
                                </span>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <Link to="/collections" className="group block">
                                <div className="relative overflow-hidden bg-deep-charcoal mb-6">
                                    <img
                                        src="/images/shoes/half-shoe-collection-cover.jpg"
                                        alt="Half Shoe Collection"
                                        className="w-full h-82.5 object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-2xl md:text-3xl text-midnight-navy mb-2">Half Shoe Collection</h3>
                                <p className="text-soft-taupe mb-4">Modern designs with a classic touch.</p>
                                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-muted-gold group-hover:gap-3 transition-all">
                                    Explore Collection <ArrowRight size={16} />
                                </span>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

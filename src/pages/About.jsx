import React from 'react'
import { FadeIn } from '../components/FadeIn';
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
            <section className="py-12 bg-ivory">
                <div className="mx-auto px-6 lg:px-18">
                    <FadeIn>
                        <div className="max-w-4xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-6">About Michaelson</p>
                            <h1 className="text-5xl md:text-7xl text-(--color-navy) mb-8 leading-tight">
                                A Legacy of Excellence, Rooted in Two Worlds
                            </h1>
                            <p className="text-(--color-taupe) text-xl md:text-2xl leading-relaxed">
                                Michaelson is more than a footwear brand—it is a testament to the power of heritage,
                                craftsmanship, and the belief that true luxury transcends borders.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-(--color-navy) text-(--color-ivory)">
                <div className="mx-auto px-6 lg:px-18">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                        <FadeIn className="md:col-span-5">
                            <div className="relative aspect-3/4 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1665495005618-6f55e5f77a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGNvbmZpZGVudCUyMGFmcmljYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzczNzY0NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="md:col-span-7 flex flex-col justify-center">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-6">Our Story</p>
                                <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
                                    Founded on Vision, Built on Heritage
                                </h2>

                                <div className="space-y-6 text-(--color-taupe) text-lg leading-relaxed">
                                    <p>
                                        Michaelson was born from a singular vision: to create footwear that honors the rich heritage
                                        of Nigerian craftsmanship while embracing the refined elegance of British luxury. Our founder,
                                        having grown up between Lagos and London, witnessed firsthand the extraordinary artistry present
                                        in both cultures.
                                    </p>

                                    <p>
                                        In Lagos, there was boldness, vibrancy, and an unapologetic confidence in self-expression.
                                        In London, there was restraint, precision, and a commitment to timeless quality. Rather than
                                        choose between these two worlds, we decided to unite them.
                                    </p>

                                    <p>
                                        Today, Michaelson stands as a bridge between continents, a brand that refuses to compromise
                                        on excellence, authenticity, or vision. Every pair of shoes we create carries the DNA of both
                                        cities—bold yet refined, contemporary yet timeless, luxurious yet grounded.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-(--color-stone)/20">
                <div className="mx-auto px-6 lg:px-18">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-4">Philosophy</p>
                            <h2 className="text-4xl md:text-5xl text-(--color-navy) max-w-3xl mx-auto leading-tight">
                                Our Design Values
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <FadeIn delay={0.2}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-(--color-gold) flex items-center justify-center">
                                    <span className="text-3xl text-(--color-gold) font-serif">01</span>
                                </div>
                                <h3 className="text-2xl text-(--color-navy) mb-4">Timeless Design</h3>
                                <p className="text-soft-taupe leading-relaxed">
                                    We reject fleeting trends in favor of designs that will remain elegant decades from now.
                                    Each silhouette is carefully considered to ensure it stands the test of time.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-(--color-gold) flex items-center justify-center">
                                    <span className="text-3xl text-(--color-gold) font-serif">02</span>
                                </div>
                                <h3 className="text-2xl text-(--color-navy) mb-4">Uncompromising Craft</h3>
                                <p className="text-soft-taupe leading-relaxed">
                                    Every pair is handcrafted by master artisans using techniques passed down through generations.
                                    We use only the finest materials, sourced from the world's most prestigious suppliers.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-(--color-gold) flex items-center justify-center">
                                    <span className="text-3xl text-(--color-gold) font-serif">03</span>
                                </div>
                                <h3 className="text-2xl text-(--color-navy) mb-4">Cultural Integrity</h3>
                                <p className="text-soft-taupe leading-relaxed">
                                    Our designs honor both British refinement and African heritage with equal reverence,
                                    creating something entirely new—a fusion that is authentic, confident, and unmistakably Michaelson.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-(--color-ivory)">
                <div className="mx-auto px-6 lg:px-18">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <FadeIn>
                            <div className="relative aspect-4/5 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1772442125267-7640b4b5f2fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b3Jrc2hvcCUyMGFydGlzYW4lMjBzdHVkaW98ZW58MXx8fHwxNzczNzY0NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Craftsmanship"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-6">Our Mission</p>
                                <h2 className="text-4xl md:text-5xl text-(--color-navy) mb-6 leading-tight">
                                    Redefining Luxury for a New Generation
                                </h2>

                                <div className="space-y-6 text-(--color-taupe) text-lg leading-relaxed">
                                    <p>
                                        Our mission is to create footwear that transcends mere fashion. We aim to produce pieces
                                        that become cherished possessions—shoes that improve with age, that tell stories, that become
                                        part of a person's legacy.
                                    </p>

                                    <p>
                                        We believe luxury should be sustainable, ethical, and meaningful. Every pair of Michaelson
                                        shoes is made to last a lifetime, crafted with care for both the wearer and the environment.
                                    </p>

                                    <p>
                                        Most importantly, we are committed to showcasing the incredible talent and artistry present
                                        in African craftsmanship on the global stage, proving that world-class luxury can—and should—
                                        come from anywhere.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-(--color-navy) text-(--color-ivory)">
                <div className="mx-auto px-6 lg:px-18">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-4">Our Values</p>
                            <h2 className="text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
                                What We Stand For
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FadeIn delay={0.2}>
                            <div className="border border-(--color-stone)/20 p-8 md:p-10">
                                <h3 className="text-2xl mb-4">Excellence</h3>
                                <p className="text-(--color-stone) leading-relaxed">
                                    We hold ourselves to the highest standards in every aspect of our work, from material
                                    selection to final finishing. Mediocrity is never an option.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="border border-(--color-stone)/20 p-8 md:p-10">
                                <h3 className="text-2xl mb-4">Authenticity</h3>
                                <p className="text-(--color-stone) leading-relaxed">
                                    We remain true to our heritage and vision, never compromising our identity to chase trends
                                    or appeal to mass markets.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="border border-(--color-stone)/20 p-8 md:p-10">
                                <h3 className="text-2xl mb-4">Sustainability</h3>
                                <p className="text-(--color-stone) leading-relaxed">
                                    We believe true luxury is sustainable. Our shoes are designed to last generations,
                                    minimizing waste and environmental impact.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="border border-(--color-stone)/20 p-8 md:p-10">
                                <h3 className="text-2xl mb-4">Innovation</h3>
                                <p className="text-(--color-stone) leading-relaxed">
                                    While we honor traditional techniques, we continuously seek new ways to improve comfort,
                                    durability, and design without sacrificing our core values.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Positioning */}
            <section className="py-24 md:py-32 bg-(--color-ivory)">
                <div className="mx-auto px-6 lg:px-18">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl text-(--color-navy) mb-8 leading-tight">
                                For Those Who Demand More
                            </h2>
                            <p className="text-(--color-taupe) text-xl leading-relaxed mb-10">
                                Michaelson is for individuals who understand that true luxury is not about logos or status symbols.
                                It's about quality, heritage, and the confidence that comes from wearing something truly exceptional.
                                Our clients are discerning, cultured, and unafraid to stand apart.
                            </p>
                            <div className="h-px w-24 bg-(--color-gold) mx-auto" />
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}

export default About;
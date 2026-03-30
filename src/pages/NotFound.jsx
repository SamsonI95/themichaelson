import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export function NotFound() {
  return (
    <div className="pt-20">
      <section className="min-h-[80vh] flex items-center justify-center bg-(--color-ivory)">
        <div className="mx-auto px-6 md:px-12 py-24">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-gold) mb-6">Error 404</p>
              <h1 className="text-6xl md:text-8xl text-(--color-navy) mb-8 leading-tight">
                Page Not Found
              </h1>
              <p className="text-soft-taupe text-xl md:text-2xl leading-relaxed mb-10">
                The page you're looking for doesn't exist or has been moved. 
                Let us guide you back to something exceptional.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-(--color-navy) text-(--color-ivory) hover:bg-(--color-gold) hover:text-(--color-navy) transition-all group"
              >
                <span className="uppercase tracking-wider text-sm">Return Home</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

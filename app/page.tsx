import Image from 'next/image';
import Link from 'next/link';
import css from './page.module.css';

export default function Home() {
  return (
    <main>
      <section className={css.heroSection}>
        <Image
          src="/images/Hero.webp"
          fill
          priority
          quality={100}
          sizes="100vw"
          alt="Home car hero"
          className={css.imageStyle}
        />

        <div className={css.wrapper}>
          <h1 className={css.title}>Find your perfect rental car</h1>
          <p className={css.text}>Reliable and budget-friendly rentals for any journey</p>
          <Link href="/catalog" className={css.linkButton}>
            View Catalog
          </Link>
        </div>
      </section>
    </main>
  );
}

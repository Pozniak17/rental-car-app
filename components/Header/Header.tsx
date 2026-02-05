import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import css from './Header.module.css';

export const Header = () => {
  // const pathname = usePathname();
  return (
    <header className={css.header}>
      <h1 className={css.logo}>
        Rental
        <span className={css.accent}>Car</span>
      </h1>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/" aria-label="Home" className={css.link}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              aria-label="Catalog"
              // className={`${css.link} ${pathname === '/catalog' ? css.active : ''}`}
              className={css.link}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link href="/favorites" aria-label="Favorites" className={css.link}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

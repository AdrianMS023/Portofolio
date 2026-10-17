import Link from 'next/link';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="#home" className={styles.logo} aria-label="ADRMNS - Home">
        ADR<span className={styles.logoAccent}>MNS</span>
      </Link>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="#home" className={styles.navLink}>HOME</Link>
        <Link href="#about" className={styles.navLink}>ABOUT</Link>
        <Link href="#projects" className={styles.navLink}>PROJECT</Link>
        <Link href="#contact" className={styles.navLink}>CONTACT</Link>
      </nav>
      <Link href="#contact" className={styles.btnContact}>
        CONTACT ME
      </Link>
    </header>
  );
};
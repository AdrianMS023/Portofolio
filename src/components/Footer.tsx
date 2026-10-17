import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
} from 'react-icons/fa';
import { ScrollReveal } from '@/components/ScrollReveal';
import styles from './Footer.module.css';

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/adrian-maulana-saputra',
    href: 'https://www.linkedin.com/in/adrian-maulana-saputra',
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/AdrianMS023',
    href: 'https://github.com/AdrianMS023',
    icon: FaGithub,
    external: true,
  },
  {
    label: 'Email',
    value: 'adrianmaulanas023@gmail.com',
    href: 'mailto:adrianmaulanas023@gmail.com',
    icon: FaEnvelope,
    external: false,
  },
  {
    label: 'Telepon',
    value: '+62 813 1640 1939',
    href: 'tel:+6281316401939',
    icon: FaPhone,
    external: false,
  },
];

export const Footer = () => (
  <ScrollReveal id="contact" className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>LET&apos;S CONNECT</span>
        <h2 className={styles.title}>Mari terhubung.</h2>
        <p className={styles.description}>
          Punya ide atau ingin berkolaborasi? Hubungi saya melalui salah satu
          kanal berikut.
        </p>
      </div>

      <nav className={styles.contactGrid} aria-label="Kontak dan media sosial">
        {CONTACT_LINKS.map(({ label, value, href, icon: Icon, external }) => (
          <a
            key={label}
            className={styles.contactLink}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            <span className={styles.iconWrapper} aria-hidden="true">
              <Icon />
            </span>
            <span className={styles.contactText}>
              <span className={styles.contactLabel}>{label}</span>
              <span className={styles.contactValue}>{value}</span>
            </span>
          </a>
        ))}
      </nav>

      <div className={styles.bottomBar}>
        <a className={styles.brand} href="#home" aria-label="Kembali ke atas">
          ADR<span>MNS</span>
        </a>
        <p>© {new Date().getFullYear()} Adrian Maulana Saputra</p>
        <a className={styles.backToTop} href="#home">
          Kembali ke atas <span aria-hidden="true">↑</span>
        </a>
      </div>
    </div>
  </ScrollReveal>
);

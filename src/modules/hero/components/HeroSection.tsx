import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section id="home" className={styles.heroContainer}>
      <div className={styles.glowBg} />
      <div className={styles.textBackground}>
        <h1 className={styles.titleLine}>ADRIAN</h1>
        <h1 className={styles.titleLine}>MAULANA SAPUTRA</h1>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageMotion}>
          <div className={styles.imageFade}>
            <Image
              src="/images/profile-header.png"
              alt="Adrian Maulana Saputra"
              fill
              priority
              sizes="(max-width: 520px) 100vw, 520px"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
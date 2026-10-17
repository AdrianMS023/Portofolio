import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import styles from '../styles/AboutSection.module.css';

const STATS_DATA = [
  { value: '2+', label: 'TAHUN PENGALAMAN' },
  { value: '15+', label: 'PROYEK SELESAI' },
  { value: '10+', label: 'CLIENT PUAS' },
];

export const AboutSection = () => {
  return (
    <ScrollReveal id="about" className={styles.sectionContainer}>
      <div className={styles.cardContainer}>
        {/* Sisi Kiri: ID Card / Profile Card */}
        <div className={styles.profileCard}>
          <div className={styles.cardHeader}>
            <h3>Adrian Maulana Saputra</h3>
            <p>Frontend Engineer</p>
          </div>

          <div className={styles.cardImageWrapper}>
            <Image
              src="/images/profile-about-me.png"
              alt="Adrian Maulana Saputra"
              fill
              sizes="(max-width: 900px) calc(100vw - 11rem), 292px"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.statusGroup}>
              <span className={styles.statusDot} />
              <div>
                <p className={styles.username}>@adrianm</p>
                <p className={styles.statusText}>Online</p>
              </div>
            </div>
            <Link href="#contact" className={styles.cardBtn}>
              Contact Me
            </Link>
          </div>
        </div>

        {/* Sisi Kanan: Content & Bio */}
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>About Me</h2>
          
          <div className={styles.bioText}>
            <p>
              Saya adalah mahasiswa Teknik Informatika yang memiliki minat besar dalam
              pengembangan website dan aplikasi digital. Saya terbiasa mengembangkan aplikasi
              menggunakan teknologi modern seperti JavaScript, React, dan Next.js.
            </p>
            <p>
              Dalam beberapa proyek, saya berperan sebagai frontend developer yang berfokus membangun
              antarmuka modular (Micro Frontend) yang performatif dan responsif.
            </p>
          </div>

          {/* Stats Bar */}
          <div className={styles.statsGrid}>
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <Link href="#projects" className={styles.primaryBtn}>
              Lihat Project
            </Link>
            <Link href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

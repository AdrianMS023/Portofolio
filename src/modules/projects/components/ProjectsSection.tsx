import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import styles from '../styles/ProjectsSection.module.css';

type Project = {
  title: string;
  description: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: 'Breakzone Intellect Website',
    description: 'Breakzone Intellect is an integrated digital game distribution platform and community hub where you can discover, purchase, and play thousands of titles, ranging from indie releases to AAA games. The platform combines personal game library management, multiplayer features, and interactive forums to deliver a seamless gaming experience within a single ecosystem.',
    image: '/images/web-breakzone.png',
  },
  {
    title: 'Cafe CALF Website',
    description: 'Cafe Calf is a relaxing destination that blends the warmth of premium coffee with the freshness of high-quality dairy. Designed with a cozy, modern, and welcoming atmosphere, Cafe Calf is the ideal place for you to work, gather with loved ones, or simply unwind while enjoying our exceptional selection of beverages and snacks.',
    image: '/images/web-calf.png',
  },
  {
    title: 'Photography Portfolio Website',
    description: 'PixelHarbor is a premium digital storage and portfolio platform specifically designed for photographers and visual artists to securely store, organize, and showcase their high-resolution work. With an elegant and minimalist interface, it serves as a professional gallery where you can curate your best pieces, share albums with clients, and preserve timeless moments in stunning quality.',
    image: '/images/web-photo.png',
  },
  {
    title: 'Wedding Souvenir Website',
    description: 'KenangKarsa is an exclusive and unique souvenir platform designed to complement all your special events. Ranging from wedding favors and corporate gifts to personalized presents, we offer a collection of high-quality products that can be customized to your needs. With a touch of creativity and precise attention to detail, KenangKarsa is here to help you cherish memories and leave an unforgettable impression on every guest.',
    image: '/images/web-souvenir.png',
  },
];

const PROJECT_IMAGE_SIZES =
  '(max-width: 768px) 92vw, (max-width: 900px) 43vw, (max-width: 1200px) 29vw, 282px';

export default function ProjectsSection() {
  return (
    <ScrollReveal id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            My Projects
          </h2>

          <p className={styles.subtitle}>Selected work</p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className={styles.card}
            >
              <div className={styles.glow} />
              <div className={styles.shine} />

              <div
                className={styles.imageWrapper}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={PROJECT_IMAGE_SIZES}
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

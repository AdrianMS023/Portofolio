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
    title: 'Breakzone',
    description: 'A gaming hub for discovering games, software, and creative tools.',
    image: '/images/web-breakzone.png',
  },
  {
    title: 'CALF',
    description: 'A welcoming online home for a coffee and milk bar.',
    image: '/images/web-calf.png',
  },
  {
    title: 'Photography',
    description: 'A monochrome portfolio celebrating landscapes and quiet moments.',
    image: '/images/web-photo.png',
  },
  {
    title: 'Souvenir',
    description: 'A curated collection of handcrafted wedding keepsakes and favors.',
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

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
    description: 'A game distribution platform for discovering, purchasing, and playing indie and AAA titles, with a personal library, multiplayer features, and community forums.',
    image: '/images/web-breakzone.png',
  },
  {
    title: 'Cafe CALF Website',
    description: 'A café website showcasing coffee, dairy-based drinks, and snacks, with a welcoming space for work, gatherings, and relaxation.',
    image: '/images/web-calf.png',
  },
  {
    title: 'Photography Portfolio Website',
    description: 'A portfolio platform for photographers to organize and showcase high-resolution work, create client albums, and preserve their images.',
    image: '/images/web-photo.png',
  },
  {
    title: 'Wedding Souvenir Website',
    description: 'A custom-gift storefront for weddings, corporate events, and other occasions, featuring personalized souvenirs and keepsakes.',
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

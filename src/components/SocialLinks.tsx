import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from './SocialLinks.module.css';

export const SocialLinks = () => {
  return (
    <aside className={styles.socialSidebar}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </aside>
  );
};
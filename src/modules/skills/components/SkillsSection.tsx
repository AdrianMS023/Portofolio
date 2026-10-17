import type { CSSProperties } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';
import arduinoIcon from '../../../../public/icon-skill/arduino-ide.png';
import antigravityIcon from '../../../../public/icon-skill/antigravity.png';
import canvaIcon from '../../../../public/icon-skill/canva.png';
import cppIcon from '../../../../public/icon-skill/c++.png';
import copilotIcon from '../../../../public/icon-skill/copilot.png';
import cssIcon from '../../../../public/icon-skill/css.png';
import figmaIcon from '../../../../public/icon-skill/figma.png';
import geminiIcon from '../../../../public/icon-skill/gemini.png';
import gitIcon from '../../../../public/icon-skill/git.png';
import githubIcon from '../../../../public/icon-skill/github.png';
import gitlabIcon from '../../../../public/icon-skill/gitlab.png';
import htmlIcon from '../../../../public/icon-skill/html5.png';
import javascriptIcon from '../../../../public/icon-skill/javascript.png';
import laravelIcon from '../../../../public/icon-skill/laravel.png';
import microsoftOfficeIcon from '../../../../public/icon-skill/microsoft-office.png';
import mysqlIcon from '../../../../public/icon-skill/mysql.png';
import nextIcon from '../../../../public/icon-skill/nextjs.png';
import nodeJsIcon from '../../../../public/icon-skill/node-js.png';
import oracleIcon from '../../../../public/icon-skill/oracle.png';
import postmanIcon from '../../../../public/icon-skill/postman.png';
import reactIcon from '../../../../public/icon-skill/react.png';
import swaggerIcon from '../../../../public/icon-skill/swagger.png';
import typescriptIcon from '../../../../public/icon-skill/typescript.png';
import vercelIcon from '../../../../public/icon-skill/vercel.png';
import vsCodeIcon from '../../../../public/icon-skill/vsCode.png';
import styles from '../styles/SkillsSection.module.css';

interface SkillItem {
  name: string;
  icon: StaticImageData;
}

const SKILLS_DATA: SkillItem[] = [
  { name: 'React.js', icon: reactIcon },
  { name: 'Next.js', icon: nextIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'Laravel', icon: laravelIcon },
  { name: 'Node.js', icon: nodeJsIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Oracle Database', icon: oracleIcon },
  { name: 'Swagger', icon: swaggerIcon },
  { name: 'Postman', icon: postmanIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'GitLab', icon: gitlabIcon },
  { name: 'GitHub Copilot', icon: copilotIcon },
  { name: 'Google Gemini AI', icon: geminiIcon },
  { name: 'Antigravity', icon: antigravityIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Canva', icon: canvaIcon },
  { name: 'VS Code', icon: vsCodeIcon },
  { name: 'Vercel', icon: vercelIcon },
  { name: 'Arduino IDE', icon: arduinoIcon },
  { name: 'C++', icon: cppIcon },
  { name: 'Microsoft Office', icon: microsoftOfficeIcon },
];

const MOTION_CLASSES = [
  'driftOne',
  'driftTwo',
  'driftThree',
  'driftFour',
] as const;

export const SkillsSection = () => {
  return (
    <ScrollReveal id="skills" className={styles.sectionContainer}>
      <div className={styles.aurora} />

      <div className={styles.header}>
        <h2 className={styles.title}>
          Skills & Tools
        </h2>

        <p className={styles.subtitle}>
          Teknologi dan tools yang saya gunakan untuk membangun
          aplikasi modern, scalable, dan user friendly.
        </p>
      </div>

      <div className={styles.skillsGrid}>
        {SKILLS_DATA.map((skill, index) => {
          const motionClass =
            styles[MOTION_CLASSES[index % MOTION_CLASSES.length]];

          return (
            <article
              key={skill.name}
              className={`${styles.skillCard} ${motionClass}`}
              style={
                {
                  '--delay': `${index * 0.08}s`,
                } as CSSProperties
              }
            >
              <div className={styles.iconWrapper}>
                <Image
                  src={skill.icon}
                  alt=""
                  className={styles.skillIcon}
                  priority={index < 8}
                />
              </div>

              <span className={styles.skillName}>
                {skill.name}
              </span>
            </article>
          );
        })}
      </div>
    </ScrollReveal>
  );
};
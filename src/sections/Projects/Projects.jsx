import styles from './ProjectsStyles.module.css';
import Gallery from '../../assets/Gallery.jpeg';
import AiAssistant from '../../assets/ai-assistant.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Gallery}
          link="https://github.com/anilsethi58/Gallery.git"
          h3="Gallery"
          p="Photo Storage"
        />
        <ProjectCard
          src={AiAssistant}
          link="https://github.com/anilsethi58/GeminiApp.git"
          h3="Gemini Ai"
          p="React Gemini Assistant"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;

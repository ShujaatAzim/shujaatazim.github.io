import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 style={{ color: "var(--clr-primary)" }} className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectCard key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects

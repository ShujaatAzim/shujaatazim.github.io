import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item" style={{ color: "var(--clr-primary)", fontWeight: "bold" }}>
            {item}
          </li>
        ))}
      </ul>
    )}

    <div className="project-links">
      {project.sourceCode && (
        <a href={project.sourceCode} aria-label="source code" className="link link--icon" target="_blank" rel="noreferrer">
          <GitHubIcon /> Code
        </a>
      )}

      {project.live && (
        <a href={project.live} aria-label="live link" className="link link--icon" target="_blank" rel="noreferrer">
          <LaunchIcon /> Try It!
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
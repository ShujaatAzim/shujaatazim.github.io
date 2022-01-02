import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi! My name is <span className="about__name">{name}</span>
        </h1>
      )}

      {role && <h2 className="about__role">I am a {role}!</h2>}
      <p className="about__desc">{description && description.map(desc => `${desc}`).join(" ")}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a href={social.github} aria-label="github" className="link link--icon" target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} aria-label="linkedin" className="link link--icon" target="_blank" rel="noreferrer">
                <LinkedInIcon /> LinkedIn 
              </a>
            )}
            {social.blog && (
              <a href={social.blog} aria-label="blog" className="link link--icon" target="_blank" rel="noreferrer">
                <BookmarksIcon /> Blog
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default About;
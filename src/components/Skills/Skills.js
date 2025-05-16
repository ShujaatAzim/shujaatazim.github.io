import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => {
  // if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 style={{ color: "var(--clr-primary)"}} className='section__title'>Skills</h2>

      <div className='skills__subsections'>
        <div classname='skill__subsection'>
          <h4 style={{ color: "var(--clr-primary)"}} className='subsection__title'>Languages</h4>
          <ul className='skills__list'>
            {skills.languages.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--clr-primary)"}} className='subsection__title'>Frameworks</h4>
          <ul className='skills__list'>
            {skills.frameworks.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--clr-primary)"}} className='subsection__title'>Libraries</h4>
          <ul className='skills__list'>
            {skills.libraries.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--clr-primary)"}} className='subsection__title'>Tools</h4>
          <ul className='skills__list'>
            {skills.tools.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--clr-primary)"}} className='subsection__title'>Platforms</h4>
          <ul className='skills__list'>
            {skills.platforms.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--clr-primary)"}} className='subsection__title'>Testing</h4>
          <ul className='skills__list'>
            {skills.testing.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
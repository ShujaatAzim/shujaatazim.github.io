import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => {

  return (
    <section className='section skills' id='skills'>
      <h2 style={{ color: "var(--clr-primary)"}} className='section__title'>Skills</h2>
      {skills.map((skillCategory) => (
        <div className='skills__subsections'>
          <div classname='skill__subsection'>
            <h4 style={{ color: "var(--clr-primary)"}} className='subsection__title'>{skillCategory.name}</h4>
            <ul className='skills__list'>
              {skillCategory.skills.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
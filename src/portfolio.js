const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shujaatazim.github.io/',
  title: 'SA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shujaat Azim',
  role: 'Full Stack Software Engineer',
  description:
    'I am an enthusiastic full stack software engineer with a background in, and passion for technology, medicine, and finance. I am a seasoned professional with a diverse background in many fields, which enables me to quickly adopt and master new technologies. I am always eager to continue learning and improving!',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/shujaatazim/',
    github: 'https://github.com/ShujaatAzim',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Pokébook',
    description:
      'Finally! A way to track and share your Pokemon Card collection to help you with trading, selling, and showing off!',
    stack: ['React', 'Rails', 'Javascript'],
    sourceCode: 'https://github.com/ShujaatAzim/PokeBook-Frontend',
    livePreview: 'https://pokebook.shujaatazim.com',
  },
  {
    name: 'TweedleDoo',
    description:
      'Not just your simple, everyday to-do list! Create multiple lists, fill them with bite-sized tasks, and watch your productivity soar!',
    stack: ['React', 'Rails', 'Javascript'],
    sourceCode: 'https://github.com/ShujaatAzim/TweedleDoo-Frontend',
    livePreview: 'https://tweedledoo.shujaatazim.com',
  },
  {
    name: 'Projective',
    description:
      'A project management app that breaks down large projects into manageable (and deferable) pieces. Full stack app built just in Rails!',
    stack: ['Rails', 'Ruby'],
    sourceCode: 'https://github.com/ShujaatAzim/Projective',
    livePreview: 'https://projective.shujaatazim.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'Ruby on Rails',
  'Javascript',
  'Ruby',
  'HTML',
  'CSS',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shujaatazim@gmail.com',
}

export { header, about, projects, skills, contact }

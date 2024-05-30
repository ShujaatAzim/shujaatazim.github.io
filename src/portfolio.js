const header = {
  homepage: 'https://shujaatazim.com/',
  title: 'SA.',
}

const about = {
  name: 'Shujaat Azim',
  role: 'Full Stack Developer & Software Engineer',
  description: 
    `I've been a full-stack developer since 2019, though my journey has been anything but straight. 
    My path had me working across many different fields, including medicine, finance, and tech — each one teaching me 
    something different about learning, problem-solving, and adapting. I am genuinely grateful for those 
    experiences, as they have shaped how I now approach challenges as a developer. I bring curiosity, resilience, 
    and a constant drive to keep growing, both in my career and personally.`,
  social: {
    linkedin: 'https://www.linkedin.com/in/shujaatazim/',
    github: 'https://github.com/ShujaatAzim',
    blog: 'https://dev.to/shujaatazim',
    resume: 'ShujaatAzimCV.pdf'
  },
}

const projects = [
  {
    name: 'PokéBook',
    description:
      `A full-stack web app that enables users to effortlessly document, update, share, and showcase their Pokémon Card collections. It also 
      generates a read-only link to your collection with no editing features enabled, providing a safe way to share to others. It has even 
      been used by a few enthusiasts on Reddit, much to their approval!`,
    stack: ['Vite', 'React', 'Rails', 'Javascript', 'Ruby'],
    sourceCode: 'https://github.com/ShujaatAzim/PokeBook-Frontend',
    live: 'https://pokebook.shujaatazim.com',
  },
  {
    name: 'TweedleDoo',
    description:
      `A simple full-stack web app for creating and managing multiple to-do lists with full CRUD functionality. Organize tasks into bite-sized 
      steps within a clean, user-friendly interface. This app highlights my expertise as a full-stack developer using established tools 
      and practices!`,
    stack: ['React', 'Rails', 'Javascript', 'Ruby'],
    sourceCode: 'https://github.com/ShujaatAzim/TweedleDoo-Frontend',
    live: 'https://tweedledoo.shujaatazim.com',
  },
  {
    name: 'City Skyline',
    description:
      `An interactive CSS-based city skyline simulation with toggleable lighting and weather effects. Built entirely 
      with CSS and vanilla JavaScript, and served via a minimalist Vite setup, it highlights my skills in CSS 
      animations and responsive design — often overlooked abilities in the age of AI.`,
    stack: ['CSS', 'HTML', 'Javascript', 'Vite'],
    sourceCode: 'https://github.com/ShujaatAzim/CitySkyline',
    live: 'https://cityskyline.shujaatazim.com',
  },
  {
    name: 'Hacker News Search',
    description:
      `A straightforward, no-frills tool for exploring Hacker News articles and tracking recent searches. Originally built 
      for a coding challenge in under a half hour, this app highlights my ability to navigate APIs and to deliver quality 
      work in a timely fashion.`,
    stack: ['Vite', 'React', 'Javascript', 'API'],
    sourceCode: 'https://github.com/ShujaatAzim/HackerNewsSearch',
    live: 'https://hnsearch.shujaatazim.com',
  },
  {
    name: 'Ruby Tidbits',
    description:
      `A collection of mini logic demonstrations commonly encountered early on in coding careers, such as a palidrome checker 
      and finding the largest prime factor. This lightweight app showcases my expertise with Ruby and the Rails framework. Bonus: 
      it is fully responsive for mobile views!`,
    stack: ['Rails', 'Ruby'],
    sourceCode: 'https://github.com/ShujaatAzim/RubyTidbits',
    live: 'https://tidbits.shujaatazim.com',
  }
]

const enterprise = [
  {
    name: 'The Phoenix site',
    link: ''
  },
  {
    name: 'NewForm Portal',
    link: ''
  },
  {
    name: 'NewForm site',
    link: ''
  }
]

const skills = [
  {
    name: 'Languages',
    skills: [
      'Javascript',
      'Typescript',
      'Ruby',
      'Python',
      'C',
      'HTML',
      'CSS'
    ]
  },
  {
    name: 'Frameworks',
    skills: [
      'Next',
      'React',
      'Vite',
      'Nest',
      'Rails',
      'Vue'
    ],
  },
  {
    name: 'Libraries',
    skills: [
      'D3',
      'Tailwind',
      'Jotai',
      'Recoil'
    ],
  },
  {
    name: 'Tools',
    skills: [
      'Node',
      'Git',
      'Figma',
      'SQLite',
      'PostgreSQL',
      'GraphQL',
      'REST API',
      'Postman',
      'Insomnia'
    ],
  },
  {
    name: 'Platforms',
    skills: [
      'AWS',
      'Hasura',
      'Firebase',
      'Heroku',
      'Dokku'
    ],
  },
  {
    name: 'Testing',
    skills: [
      'Playwright',
      'Jest',
      'RSpec'
    ]
  }
];

const certificates = [
  {
    name: 'Flatiron',
    image: '/FlatironCertImg.png',
    pdf: '/FlatironCertificate.pdf'
  },
  {
    name: 'freeCodeCamp Responsive',
    image: '/fCCResponsiveCertImg.png',
    pdf: '/fCCResponsiveCertificate.pdf'
  }
]

const contact = {
  email: 'shujaatazim@gmail.com',
}

export { header, about, projects, enterprise, skills, certificates, contact }

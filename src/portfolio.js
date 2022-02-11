import PokeBookDemo from './demos/PokeBookDemo.mp4';
import TweedleDooDemo from './demos/TweedleDooDemo.mp4';

const header = {
  homepage: "https://shujaatazim.github.io/",
  title: "SA.",
}

const about = {
  name: "Shujaat Azim",
  role: "Full Stack Software Engineer",
  description: [
    "I am an enthusiastic full stack software engineer with a background in, and passion for technology, medicine, and finance.",
    "I'm a seasoned professional with a diverse background in many fields, which enables me to quickly adopt and master new technologies.",
    "I'm also always eager to continue learning and improving!"
  ],
  resume: "",
  social: {
    linkedin: "https://www.linkedin.com/in/shujaatazim/",
    github: "https://github.com/ShujaatAzim",
    blog: "https://dev.to/shujaatazim",
    resume: "Resume.pdf"
  },
}

const projects = [
  {
    name: "Pokébook",
    description:
      "A full stack webapp that enables a user to easily keep document, update, share, trade, sell, and show off their Pokemon Card collection! No other app does it all!",
    stack: ["React", "Rails", "Javascript"],
    sourceCode: "https://github.com/ShujaatAzim/PokeBook-Frontend",
    livePreview: "https://pokebook.shujaatazim.com",
    demo: PokeBookDemo
  },
  {
    name: "TweedleDoo",
    description:
      "Not just your simple, everyday to-do list! You can create multiple lists with full CRUD funtionality, fill them with bite-sized tasks, and watch productivity soar!",
    stack: ["React", "Rails", "Javascript"],
    sourceCode: "https://github.com/ShujaatAzim/TweedleDoo-Frontend",
    livePreview: "https://tweedledoo.shujaatazim.com",
    demo: TweedleDooDemo
  },
  {
    name: "Projective",
    description:
      "A project management app that can be used to break down large projects into smaller, manageable pieces. A full stack app built in just the Ruby on Rails framework!",
    stack: ["Rails", "Ruby"],
    sourceCode: "https://github.com/ShujaatAzim/Projective",
    livePreview: "https://projective.shujaatazim.com",
    demo: ""
  },
  {
    name: "VueTasks",
    description:
      "A simiple task/to-do list built in Vue.js, serving to demonstrate my skills in a completely different component-based framework! ",
    stack: ["Vue", "Javascript"],
    sourceCode: "https://github.com/ShujaatAzim/VueTasks",
    livePreview: "",
    demo: ""
  },
  {
    name: "D3Graphs",
    description:
      "A graph built with React and visualized with D3! Tracks the price of the wildly popular crypto-currency Bitcoin for the last 30 days!",
    stack: ["React", "Javascript", "D3.js"],
    sourceCode: "https://github.com/ShujaatAzim/D3Graphs",
    livePreview: "https://d3graphs.shujaatazim.com",
    demo: ""
  },
  {
    name: "Original Portfolio Site",
    description:
      "My first portfolio site, built entirely from scratch in React! Originally intended to showcase my skills building a static website, it has since been replaced by this one!",
    stack: ["React", "Javascript"],
    sourceCode: "https://github.com/ShujaatAzim/Portfolio",
    livePreview: "https://www.shujaatazim.com",
    demo: ""
  },
  {
    name: "Taskify",
    description:
      "A simple todo list app built to illustrate my skills in using React with Typescript instead of Javascript, as well as with style libraries that enable drag and drop features!",
    stack: ["Typescript", "React", "Javascript"],
    sourceCode: "https://github.com/ShujaatAzim/Taskify",
    livePreview: "",
    demo: ""
  },
]

const skills = [
  "React",
  "Ruby on Rails",
  "Javascript",
  "Ruby",
  "Vue",
  "HTML",
  "CSS",
  "Redux",
  "SASS",
  "Material UI",
  "Bootstrap",
  "Git",
  "Jest",
  "Node.js",
  "Recoil.js",
  "REST API",
  "Postgres",
  "GraphQL",
  "Firebase",
  "Bulma",
  "AWS",
  "Heroku"
]

const contact = {
  email: "shujaatazim@gmail.com",
}

export { header, about, projects, skills, contact }

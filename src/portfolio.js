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
    resume: "https://docs.google.com/document/d/1gj5C_GX-y_ridapVGhHg_KPkg-GHdtNI/edit?usp=sharing&ouid=110022460300969094248&rtpof=true&sd=true"
  },
}

const projects = [
  {
    name: "Pokébook",
    description:
      "A full stack webapp that is used to help keep track of, share, trade, sell, and show off your Pokemon Card collection!",
    stack: ["React", "Rails", "Javascript"],
    sourceCode: "https://github.com/ShujaatAzim/PokeBook-Frontend",
    livePreview: "https://pokebook.shujaatazim.com",
    demo: PokeBookDemo
  },
  {
    name: "TweedleDoo",
    description:
      "Not just your simple, everyday to-do list! You can create multiple lists, with full CRUD funtionality, and fill them wuth bite-sized tasks!",
    stack: ["React", "Rails", "Javascript"],
    sourceCode: "https://github.com/ShujaatAzim/TweedleDoo-Frontend",
    livePreview: "https://tweedledoo.shujaatazim.com",
    demo: TweedleDooDemo
  },
  {
    name: "Projective",
    description:
      "A project management app that can be used to break down large projects into smaller, manageable pieces. A full stack app built just in Rails!",
    stack: ["Rails", "Ruby"],
    sourceCode: "https://github.com/ShujaatAzim/Projective",
    livePreview: "https://projective.shujaatazim.com",
    demo: ""
  },
  {
    name: "VueTasks",
    description:
      "A simiple task/to-do list built in Vue.js, serving to demonstrate my skills in a different component-based framework!",
    stack: ["Vue", "Javascript"],
    sourceCode: "https://github.com/ShujaatAzim/VueTasks",
    livePreview: "",
    demo: ""
  },
  {
    name: "D3Graphs",
    description:
      "A graph built with React and visualized with D3! Tracks the price of Bitcoin for the last 30 days!",
    stack: ["React", "Javascript", "D3.js"],
    sourceCode: "https://github.com/ShujaatAzim/D3Graphs",
    livePreview: "https://d3graphs.shujaatazim.com",
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

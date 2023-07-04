import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "SQA Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Akij Textile Mills Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Learning",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2020 - Feb 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Learning",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Money Testing Transition API (Post Man)",
    description:
      "The admin will log in to the system, Admin creates an agent and customer, Credit money to the agent from the SYSTEM, The agent will deposit cash to the customer, the Customer withdraws cash from the agent, Customer sends money to any other customer, Agent and customer will check their balance.",
    tags: [
      {
        name: "PostMan",
        color: "blue-text-gradient",
      },
      {
        name: "Newman Report",
        color: "green-text-gradient",
      },
      {
        name: "Postman Doc",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/tauhid102/TRANSACTION-api-postman-testing",
  },
  {
    name: "Load Testing Using JMeter",
    description:
      "In this project, we will use JMeter to perform load testing on an API. The objective is to simulate high user traffic and identify performance bottlenecks.",
    tags: [
      {
        name: "JMeter",
        color: "blue-text-gradient",
      },
      {
        name: "Report",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/tauhid102/Load-Test-Dmoney-Api",
  },
  {
    name: "Daraz Home and Search Bar Manual Testing",
    description:
      "In this project, I am doing manual testing where I have done a test plan, and test cases, and also design a mind map using the Xmind app. I am testing only the home page UI, functionality of the home page, and search bar.",
    tags: [
      {
        name: "Excel Sheet",
        color: "blue-text-gradient",
      },
      {
        name: "Xmind",
        color: "green-text-gradient",
      },
      {
        name: "Test Plan",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://docs.google.com/spreadsheets/d/1VpxsgqcD08hRjHshqfNZjfnyxNZ6h01YRWEuPvGQVgk/edit#gid=0",
  },
];

export { services, technologies, experiences, testimonials, projects };

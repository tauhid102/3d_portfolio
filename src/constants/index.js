import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  redux,
  figma,
  postman,
  selenium,
  cypress,
  jmeter,
  jira,
  java,
  cucumber,
  zephyr,
  carrent,
  jobit,
  tripguide,
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
    title: "API & Load Testing",
    icon: backend,
  },
  {
    title: "Test Automation",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "JMeter",
    icon: jmeter,
  },
  {
    name: "Cucumber",
    icon: cucumber,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Zephyr",
    icon: zephyr,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "SQA Engineer",
    company_name: "RedDot Digital Limited",
    icon: web,
    iconBg: "#383E56",
    date: "Nov 2025 - Present",
    points: [
      "Designed and executed detailed manual test cases based on BRD and Figma requirements for the fintech application.",
      "Performed API testing using Postman, including request validation, response verification, and status code validation.",
      "Created and maintained test scenarios, test cases, and test reports in Excel.",
      "Conducted regression testing, smoke testing, and provided UAT support before production release.",
      "Conducted USSD testing for MFS applications, ensuring seamless functionality across different user flows and network conditions.",
      "Validated backend data through database testing, ensuring data integrity and consistency between UI, API, and database.",
      "Performed end-to-end testing of fintech workflows in MFS (LENDEN), including wallet, merchant, and transaction modules.",
    ],
  },
  {
    title: "QA Engineer",
    company_name: "Easy Automation Lab (Newark, USA)",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "May 2025 - Nov 2025",
    points: [
      "Automated UI testing using Selenium and Cucumber, enhancing regression coverage.",
      "Managed test cases via Zephyr and tracked bugs through Jira.",
      "Collaborated with developers to resolve issues and improve release quality.",
      "Validated backend data using SQL for end-to-end testing.",
      "Wrote detailed test cases with individual steps and expected results, making them easy to convert into automation scripts.",
    ],
  },
  {
    title: "Associate SQA Engineer",
    company_name: "Nascenia",
    icon: backend,
    iconBg: "#383E56",
    date: "Oct 2023 - Apr 2025",
    points: [
      "Executed comprehensive manual testing for Android fintech applications and web platforms, with hands-on experience in the POCKET app.",
      "Developed and executed API test scenarios using Postman, while preparing clear and structured release documentation.",
      "Collaborated closely with developers, product teams, and stakeholders to identify and resolve high-priority defects efficiently.",
      "Ensured the delivery of stable, high-quality, and client-ready software through rigorous testing and validation processes.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Akij Textile Mills Limited (Insaf)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Sep 2023",
    points: [
      "Built responsive web apps using React.js, Redux, and REST APIs.",
      "Developed interactive dashboards with Chart.js for data visualization.",
      "Ensured cross-browser compatibility and mobile-first design.",
    ],
  },
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
    name: "Transactional API Testing",
    description:
      "Designed and executed API test cases for a financial transaction system involving agents and customers. Automated the testing with Postman and generated reports via Newman, reducing manual test effort by 40%.",
    tags: [
      {
        name: "Postman",
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
    name: "Load Testing (JMeter)",
    description:
      "Simulated high-traffic API requests to identify performance bottlenecks, and created load test reports to optimize system efficiency for high-scale transactions.",
    tags: [
      {
        name: "JMeter",
        color: "blue-text-gradient",
      },
      {
        name: "Load Test Report",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/tauhid102/Load-Test-Dmoney-Api",
  },
  {
    name: "Daraz UI & Search Testing",
    description:
      "Conducted manual UI and functionality testing for the Daraz homepage and search. Created test plans, test cases, and mind maps for structured test coverage.",
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

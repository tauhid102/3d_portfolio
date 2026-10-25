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
  appinion,
  reddot,
  nascenia,
  easyautomationlab,
  carrent,
  jobit,
  tripguide,
  orangehrm,
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
    id: "skills",
    title: "Skills",
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
    title: "Database Testing",
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
    title: "Software Engineer (SQA)",
    company_name: "Appinion BD Limited",
    icon: appinion,
    iconBg: "#ffffff",
    date: "Oct 2026 - Present",
    points: [
      "Analyze BRDs and functional specifications to identify testable requirements and quality risks.",
      "Develop test plans, test scenarios, and test cases with traceable requirements coverage.",
      "Execute functional, regression, smoke, and integration test suites.",
      "Develop and maintain Selenium WebDriver automation scripts using Java.",
      "Log, classify, track, and retest defects throughout the defect lifecycle.",
      "Perform defect verification and regression testing after bug fixes.",
      "Collaborate with developers and product owners on requirement clarification and defect triage.",
      "Analyze test execution results, report defect metrics, and improve test coverage.",
    ],
  },
  {
    title: "SQA Engineer",
    company_name: "RedDot Digital Limited",
    icon: reddot,
    iconBg: "#ffffff",
    date: "Nov 2025 - Oct 2026",
    points: [
      "Designed and executed detailed manual test cases based on BRD and Figma requirements for the fintech application.",
      "Performed API testing using Postman, including request validation, response verification, and status code validation.",
      "Created and maintained test scenarios, test cases, and test reports in Excel.",
      "Conducted regression testing, smoke testing, and provided UAT support before production release.",
      "Conducted USSD testing for MFS applications, ensuring seamless functionality across different user flows and network conditions.",
      "Validated backend data by performing database (DB) testing, ensuring data integrity and consistency between UI, API, and database.",
      "Performed end-to-end testing of fintech workflows in MFS (LENDEN), including wallet, merchant, and transaction modules.",
    ],
  },
  {
    title: "QA Engineer",
    company_name: "Easy Automation Lab (Newark, USA)",
    icon: easyautomationlab,
    iconBg: "#f5e6e6",
    date: "May 2025 - Nov 2025",
    points: [
      "Automated UI testing using Selenium and Cucumber, enhancing regression coverage.",
      "Managed test cases via Zephyr and tracked bugs through Jira.",
      "Collaborated with developers to resolve issues and improve release quality.",
      "Validated backend data using SQL for end-to-end testing.",
      "Wrote detailed test cases with individual steps and corresponding expected results, making them easy to convert into automation scripts.",
    ],
  },
  {
    title: "Associate SQA Engineer",
    company_name: "Nascenia",
    icon: nascenia,
    iconBg: "#ffffff",
    date: "Jan 2023 - Apr 2025",
    points: [
      "Executed comprehensive manual testing for Android fintech applications and web platforms, with hands-on experience in the POCKET app.",
      "Developed and executed API test scenarios using Postman, while preparing clear and structured release documentation.",
      "Collaborated closely with developers, product teams, and stakeholders to identify and resolve high-priority defects efficiently.",
      "Ensured the delivery of stable, high-quality, and client-ready software through rigorous testing and validation processes.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Transactional API Testing",
    description:
      "Designed and executed API test cases for a financial transaction system involving agents and customers. Automated testing using Postman and report generation via Newman, reducing manual test effort by 40%.",
    tags: [
      {
        name: "Postman",
        color: "blue-text-gradient",
      },
      {
        name: "Newman",
        color: "green-text-gradient",
      },
      {
        name: "API Testing",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/tauhid102/TRANSACTION-api-postman-testing",
  },
  {
    name: "Daraz UI & Search Testing",
    description:
      "Conducted manual UI and functionality testing for the Daraz homepage & search. Created test plans, test cases, and mind maps for structured test coverage.",
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
        name: "Manual Testing",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://docs.google.com/spreadsheets/d/1VpxsgqcD08hRjHshqfNZjfnyxNZ6h01YRWEuPvGQVgk/edit#gid=0",
  },
  {
    name: "OrangeHRM Test Automation Framework",
    description:
      "Selenium WebDriver, Java, Cucumber BDD, POM. Automated 48+ UI test scenarios for Login, User Management, and Job Configuration. Features reusable utilities, dynamic test data, Extent HTML/PDF reporting, automated screenshot capture, tag-based and headless browser execution, and cross-browser testing.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "Cucumber BDD",
        color: "pink-text-gradient",
      },
    ],
    image: orangehrm,
    source_code_link: "https://github.com/tauhid102/Orange_HRM-selenium-cucumber-bdd-Automation",
  },
];

export { services, technologies, experiences, testimonials, projects };

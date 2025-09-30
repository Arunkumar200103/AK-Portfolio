import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  spring,
  reactjs,
  codingbossImage,
  pubsChatbotImage,
  bookAppImage,
  inventoryImage,
  ecommerceImage,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  msrImage,
  Thiran360AI,
  tapacademy,
  devtown,
  linkedIn,
  github,
  
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [

  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Javascript Developer",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
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
    name: "Angular",
    icon: angular,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },

  {
    name: "Spring Boot",
    icon: spring,
  },
];

const experiences = [
   

  {
    title: "Software Developer",
    company_name: "Thiran360AI",
    company_website: "https://www.thiran360ai.com/", // Update if the official site is different
    icon: Thiran360AI, // Replace with your actual import or icon
    iconBg: "#E6DEDD",
    date: "Oct 2024 - present 2025",
    points: [
      "Developed responsive and reusable UI components using React.js for multiple real-world applications.",
      "Built and integrated RESTful APIs using Spring Boot for full-stack functionality.",
      "Collaborated with team members in Agile sprints, participating in code reviews and UI/UX improvements.",
      "Worked on CodingBoss platform with role-based dashboards and filtering logic in the admin panel.",
      "Improved mobile responsiveness and performance optimization in MSR Automation project.",
      "Created a chatbot UI with step-based flow and integrated backend services to fetch dynamic location-based data in the Pubs Chatbot project.",
    ],
  },
  

  {
    title: "Full Stack Developer Trainee",
    company_name: "Tap Academy",
    company_website: "https://thetapacademy.com/", // Official Tap Academy site
    icon: tapacademy, // Replace with the correct import or image for Tap Academy logo
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Jul 2024",
    points: [
      "Completed a 6-month professional training program focused on full stack development.",
      "Gained hands-on experience in React.js, JavaScript, Spring Boot, MySQL, and RESTful APIs.",
      "Built multiple mini-projects and capstone projects under mentor guidance.",
      "Learned version control with Git and GitHub, and followed Agile development practices.",
      "Improved debugging, problem-solving, and clean coding practices through regular code reviews and challenges.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "DevTown",
    company_website: "https://www.devtown.in/", // Official site
    icon: devtown, // Replace with your actual logo/icon import for DevTown
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Completed a 3-month internship focused on modern web development practices.",
      "Built responsive web pages using HTML5, CSS3, JavaScript, and React.js.",
      "Collaborated in a remote environment with mentors and peers to develop mini-projects.",
      "Learned frontend fundamentals, state management, routing, and API integration.",
      "Participated in weekly code reviews and live sessions to strengthen coding concepts.",
    ],
  },
  
];

const projects = [
  {
    name: "CodingBoss Platform",
    description:
      "A multi-role web platform with dashboards for users, trainers, and vendors. Integrated admin-side trainer filtering, improved user interface, and ensured seamless backend data handling.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: codingbossImage,
    hosted_link: "https://codingboss.in/",
  },
  {
    name: "MSR Automation",
    description:
      "Revamped the MSR web interface for responsive design. Rebuilt components in React.js for better performance and integrated backend APIs for smoother data exchange.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "responsiveui", color: "green-text-gradient" },
      { name: "apiintegration", color: "pink-text-gradient" },
    ],
    image: msrImage,
    hosted_link: "https://www.msrautomation.com/",
  },
  {
    name: "Pubs Chatbot",
    description:
      "An interactive chatbot built with a step-based interface in React.js and integrated Spring Boot APIs to fetch real-time city and place data, helping users find nearby pubs.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "springboot", color: "green-text-gradient" },
      { name: "locationapi", color: "pink-text-gradient" },
    ],
    image: pubsChatbotImage,
    hosted_link: "https://your-demo-link.com/pubschatbot",
  },
  {
    name: "BookApp - REST API",
    description:
      "Built a RESTful API for book management using Spring Boot 3.x and Java 17. Implemented full CRUD operations with efficient response handling. Used H2 in-memory DB and tested endpoints with Postman.",
    tags: [
      { name: "springboot", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "h2database", color: "pink-text-gradient" },
    ],
    image: bookAppImage,
    hosted_link: "https://your-demo-link.com/bookapp",
  },
  {
    name: "Inventory Management System",
    description:
      "Java-based inventory management system with object-oriented principles. Features include product add/update/delete, MySQL integration, and a user-friendly CLI with error handling.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "oop", color: "pink-text-gradient" },
    ],
    image: inventoryImage,
    hosted_link: "https://your-demo-link.com/inventory",
  },
  {
    name: "E-Commerce Product Cart",
    description:
      "Built during Tap Academy training. React.js-based cart system with product listing, cart management, and checkout simulation using Context API.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "contextapi", color: "green-text-gradient" },
      { name: "htmlcss", color: "pink-text-gradient" },
    ],
    image: ecommerceImage,
    hosted_link: "https://your-demo-link.com/ecommerce",
  },
  // {
  //   name: "Portfolio Website",
  //   description:
  //     "Created during DevTown internship. Personal portfolio developed using React.js and styled-components, showcasing skills and project highlights.",
  //   tags: [
  //     { name: "reactjs", color: "blue-text-gradient" },
  //     { name: "styledcomponents", color: "green-text-gradient" },
  //     { name: "githubpages", color: "pink-text-gradient" },
  //   ],
  //   image: portfolioImage,
  //   hosted_link: "https://your-demo-link.com/portfolio",
  // },
];

const personalInfo = {
  name: "Arunkumar",
  fullName: "Arunkumar S",
  email: "arun.skpani@gmail.com", 
  role: "Full Stack Developer",
  about: `I'm a passionate full stack developer with experience in JavaScript,
  React.js, and Spring Boot. I enjoy building scalable web applications 
  with clean UI and efficient backend services. I'm a fast learner, a team 
  player, and committed to delivering high-quality, real-world solutions 
  that drive impact. Let's build something great together!`,
  projectsIntro: `The following projects highlight my practical experience and
  technical skills as a full stack developer. Each project includes key 
  features and tech stacks, demonstrating my ability to handle both 
  frontend and backend development effectively.`,
};


const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1FZxhklcAWKohjhpYWom7QaHg0m1h3GOo/view?usp=drivesdk",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/arunkuma18",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Arunkumar200103",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};

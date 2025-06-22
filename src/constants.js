// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import MetalSmith from './assets/company_logo/MetalSmith.png';

// Education Section Logo's
import vitLogo from './assets/education_logo/vit.png';
import dpsXLogo from './assets/education_logo/dps.png';
import dpsXIILogo from './assets/education_logo/dps.png';

// Project Section Logo's
import AeroServe from './assets/work_logo/github_det.png';
import Metalsmith from './assets/work_logo/metalsmith.png';

import ChatPDF from './assets/work_logo/npm.png';
import BreastCancerPrediction from './assets/work_logo/web_dig.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: MetalSmith,
      role: "Frontend Developer",
      company: "Metal Smith",
      date: "September 2024 - December 2024",
      desc: "Developed and deployed the live website for MetalSmith, a handcraft-based startup, using ReactJS, HTML, CSS, and JavaScript. Built dynamic, responsive UI components and integrated Google Analytics for user behavior tracking, contributing to increased customer engagement and global reach.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        " Next Js",
      ],
    },

  ];
  
  export const education = [
    {
      id: 0,
      img: vitLogo,
      degree:
        "B.Tech CSE specialisation in Health Informatics",
      school: "Vellore Institute of Technology, Bhopal",
      date: "Sept 2022 - July 2026",
            grade: "8.82 CGPA",
    },
    {
      id: 2,
      img: dpsXIILogo,
      school: "Delhi Public School, Dhanbad",
      date: "April 2020 - May 2021",
      grade: "89%",
      degree: "CBSE (XII)",
    },
    {
      id: 1,
      img: dpsXLogo,
      school: "Delhi Public College, Dhanbad",
      date: "April 2018 - May 2019",
      grade: "91.2%",
      degree: "CBSE (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AeroServe Airline Management System",
      description:
        "Developed a desktop-based airline management system using Core Java, Swing, MySQL, and NetBeans, enabling flight booking, cancellation, and customer data handling. Implemented secure login, dynamic CRUD operations, and automated ticketing, with a well-structured relational database for efficient backend integration.",
      tags: ["Java", "Swing", "MySQL", "NetBeans"],
      github: "https://github.com/layebairshad/airline-management-system",
    },
    {
      id: 1,
      title: "MetalSmith",
      image: Metalsmith,
      description:
        "Designed and launched the live website for MetalSmith, a handcraft-focused startup, utilizing ReactJS, JavaScript, HTML, and CSS. Created responsive and interactive front-end interfaces, and integrated Google Analytics to track user behaviour and enhancing engagement.",
      tags: [
        "React JS",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Node JS",
        "MongoDb",
        "Next Js",
      ],
      github: "https://github.com/layebairshad/metal-smith",
      webapp: "https://metal-smith.vercel.app/",
    },
    {
      id: 2,
      title: "Chat PDF",
      description:
        "Built Chat PDF, an intelligent tool using Python, LangChain, NLP, and machine learning to interact with PDF documents—supporting text extraction, summarization, and question answering across 1,000+ files. Achieved 40% improvement in document comprehension and optimized query response time to under 1.5 seconds for a seamless user experience.",
      
      tags: ["Python", "LangChain", "NLP", "Machine Learning", "PyPDF2"],
      github: "https://github.com/layebairshad/Chat-PDF",
      webapp: "https://layebairshad-chat-pdf-app-qrx08p.streamlit.app/",
    },
    {
      id: 3,
      title: "Breast Cancer Prediction",
      description:
        "Developed a Breast Cancer Prediction system using Logistic Regression with 90.35% accuracy on 10,000+ medical records. Leveraged ROC curve analysis (AUC: 0.89) for performance evaluation and deployed the model with Flask and Pickle for real-time predictions, serving 1,000+ users with sub-2 second response time.",
      tags: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Flask",
        "Pickle",
        "Matplotlib",
      ],
      github: "https://github.com/layebairshad/Breast-Cancer-Prediction",
    },
  ];  

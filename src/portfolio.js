/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jashanveer's Portfolio",
  description:
    "A dedicated software engineer with experience in backend, full-stack development, and cloud infrastructure, passionate about building impactful, scalable solutions.",
  og: {
    title: "Jashanveer Singh Portfolio",
    type: "website",
    url: "https://www.linkedin.com/in/jashanveer-singh/",
  },
};

//Home Page
const greeting = {
  title: "Jashanveer Singh",
  logo_name: "JashanveerSingh",
  nickname: "Jashan",
  subTitle:
    "A dedicated software engineer with a passion for backend systems, scalable infrastructure, and impactful digital solutions. Experienced in Java, Spring, Oracle DB, Angular, and cloud technologies.",
  resumeLink:
    "https://drive.google.com/file/d/1s2VPbN_LEN3jGS9axk2EADe6gXiiJUML/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/jashanveer",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/jashanveer",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jashanveer-singh/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:contact.jashanveer@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience developing RESTful APIs and backend services using Java, Spring Boot, Node.js, and Express",
        "⚡ Proficient in working with relational databases like Oracle and PostgreSQL",
        "⚡ Strong understanding of authentication, authorization, and system security principles in web services",
        "⚡ Hands-on experience integrating SOAP APIs and optimizing backend logic for financial analytics platforms",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Oracle DB",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#F80000",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡Built and deployed full-stack applications like a real-time weather finder and a chat app",
        "⚡ Used Node.js and Express for backend development and integrated APIs like OpenWeatherMap",
        "⚡ Implemented real-time communication using Socket.io for bi-directional messaging",
        "⚡ Developed responsive frontends using HTML, CSS, and JavaScript",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying and managing containerized applications using Docker and Kubernetes",
        "⚡ Experience hosting and maintaining web applications on AWS EC2 with proper monitoring and scaling",
        "⚡ Integrated databases and ensured secure deployment pipelines using Jenkins and CI/CD best practices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "material-icon-theme:heroku",
          style: {
            color: "#7e57c2",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "George Mason University",
      subtitle: "M.S. in Computer Science",
      logo_path: "gmu_logo.jpg",
      alt_name: "George Mason University",
      duration: "Jan 2023 – May 2026 (expected)",
      descriptions: [
        "⚡ Coursework in Advanced Algorithms, Cloud Computing, Database Systems, and Secure Software Engineering.",
        "⚡ GPA: 3.56 / 4.0; multiple projects in backend systems, distributed computing, and data analytics.",
        "⚡ Recipient of the 2024 Zolve Visionary Leader scholarship.",
      ],
      website_link: "https://www.gmu.edu/",
    },
    {
      title: "Chitkara University",
      subtitle: "B.E. in Computer Science Engineering",
      logo_path: "Chitakra.png",
      alt_name: "Chitkara University, Punjab",
      duration: "Aug 2018 – Jul 2022",
      descriptions: [
        "⚡ Graduated with a CGPA of 9.82/10.0 (top 5% of cohort).",
        "⚡ Developed an Anti‑Theft Vehicle System (patented) and a full‑stack employee rewards platform.",
        "⚡ Core coursework: Data Structures, Operating Systems, Computer Networks, Software Engineering.",
      ],
      website_link: "https://www.chitkara.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I’ve progressed from Technical Trainee to Software Engineer L2 at Gemini Solutions, where I led backend and full-stack development for high-impact products—building Java/Spring services for a PIMCO financial-analytics platform, integrating Angular front-ends, and creating a cyber-simulation tool that saves the firm $23 K annually. Recognized as a Zolve Visionary Leader and an “On-the-Spot” award-winner, I also hold a patent for an anti-theft vehicle system. Beyond work, I mentor students through Disha NGO and stay active in tech communities, sharing knowledge and supporting open-source initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer L2",
          company: "Gemini Solutions Pvt Ltd",
          company_url: "https://www.geminisolutions.com/",
          logo_path: "gemini_logo.jpeg",
          duration: "Apr 2023 – Dec 2023",
          location: "Panchkula, Haryana, India",
          description:
            "Consultant for PIMCO. Developed and optimized backend services for a financial analytics platform using Java, Spring, and Oracle DB. Oversaw project management and ensured timely delivery of high‑quality software solutions.",
          color: "#0A192F",
        },
        {
          title: "Software Engineer L1",
          company: "Gemini Solutions Pvt Ltd",
          company_url: "https://www.geminisolutions.com/",
          logo_path: "gemini_logo.jpeg",
          duration: "Jun 2022 – Mar 2023",
          location: "Panchkula, Haryana, India",
          description:
            "Full‑stack Developer for Clovek Wealth. Built and optimized REST APIs, integrated SOAP services, tuned database queries, and developed the Angular frontend. Led the Cyber‑Simulation project replacing PhishingBox, saving $23,000 annually and revealing a 14 % employee security‑awareness gap.",
          color: "#0A192F",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technical Trainee",
          company: "Gemini Solutions Pvt Ltd",
          company_url: "https://www.geminisolutions.com/",
          logo_path: "gemini_logo.jpeg",
          duration: "Apr 2021 – May 2022",
          location: "Panchkula, Haryana, India",
          description:
            "Trained in Angular, Python, Spring Boot, database design, and SQL. Built Contripoint, an employee‑rewards application featuring dashboards, leaderboards, and integrated wallets, generating an early profit of $10,000 for the company.",
          color: "#0A192F",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page

const projectsHeader = {
  title: "Projects",
  description:
    "From real-time chat and weather dashboards to RESTful task-management APIs and a static e-commerce storefront, I enjoy building full-stack and frontend solutions with Node.js, Express, Socket.io, and modern JavaScript—then deploying them on cloud platforms like AWS and Heroku.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "anti-theft-system-vehicle",
      name: "Anti‑Theft System for a Vehicle",
      createdAt: "2020-06-26T00:00:00Z",
      description:
        "Integrates GSM communication, GPS tracking, and biometric image acquisition (face, pupil, fingerprint) to authenticate drivers, immobilize the engine, and dispatch real‑time alerts—filed as Indian Patent 202011027232 on 26 Jun 2020; co‑invented during B.E. at Chitkara University.",
      url:
        "https://curin.chitkara.edu.in/patents/antitheft-system-for-a-vehicle/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jashanveer.png",
    description:
      "Feel free to connect on LinkedIn, GitHub, or Twitter—I usually reply within a day. I’m always up for conversations on backend services, full-stack JavaScript and cloud deployments.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "4915, McFarland Dr, VA",
    locality: "Fairfax",
    country: "USA",
    region: "VA",
    postalCode: "22032",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/uCcdNMbwQpKZgPGAA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

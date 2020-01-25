import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Duong Nguyen', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! 👋',
  intro: `I'm`,
  name: 'Yoon, ',
  subtitle: 'a Fullstack Developer with a passion for technology 👨‍💻',
  cta: '🤙 Get in Touch: duong.nguyen4991@gmail.com',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpeg',
  paragraphOne: "",

  paragraphTwo:
    'As a software engineer, I enjoy bridging the gap between new technology and the existing archaic solutions — combining my technical knowledge with my passion to create a beautiful and user-friendly product. My goal is to build projects that can bring people closer to their goals with applications that are scalable and efficient under the hood.',

  paragraphThree: "",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'retail.png',
    title: 'retailPRO',
    info:
      'Interactive marketing page for retailPro, an AI solution for tradional retailers and vendors  ',
    info2: '',
    url: 'https://retailpro.io',
    repo: 'https://blogs.sap.com/2020/01/10/visibilitypro-sme-seedx-development-challenge-2020/', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'visibility.png',
    title: 'visibilityPRO',
    info:
      'Landing page for visibilityPRO, a computer vision solution for standardizing planogram, ',
    info2: '',
    url: 'http://visibilitypro.io/',
    repo: 'https://blogs.sap.com/2020/01/10/visibilitypro-sme-seedx-development-challenge-2020/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'envelope',
      url:
        'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=duong.nguyen4991@gmail.com',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Duong4991',
    },
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@duong.nguyen4991',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dyoonnguyen/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/DDuongNguyen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey there, my name is',
  name: 'Michael Horowitz',
  subtitle: 'full-stack developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'I am a Ssgt reserve tank gunner for the Israel Defense Forces from 2015-2018, and have a great passion for new technology and making all of our lives better.',
  paragraphTwo: 'I am now a full-stack developer with experience in Ruby, Rails, JS, and React.js.',
  resume:
    'https://docs.google.com/document/d/1VcurUNTrm6ubK8BQ-uYLyaess3R6nUnK5lRXRxd7irU/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),

    title: 'Fantasy NHL',
    info:
      'This application is ment to bring hockey fans together and see who is the better general manager. In the application users can create their own teams in a league with their friends, and add current players to their rosters and gain points based off their performances.',
    // info2: '',
    // url: '',
    repo: 'https://github.com/mjh714/fantasy-nhl-frontend',
    // repo: 'https://github.com/mjh714/Fantasy-NHL-backend',// if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   // img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   // url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   // img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   // url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mjhorowitz714@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'Medium-blogs',
      url: 'https://medium.com/@mjhorowitz714',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michael-horowitz-4b36341b1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mjh714/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

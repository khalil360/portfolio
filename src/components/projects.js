import React from 'react';
 import bro from '../assets/bro.png';
 import pann from '../assets/pann.png'
 import wea from '../assets/wea.png'
 import quiz from '../assets/quiz.png'
// import IMG2 from '../assets';
// import IMG3 from '../assets';
// import IMG4 from '../assets';
// import IMG5 from '../assets';
// import IMG6 from '../assets';

import IMG2 from '../assets/todo.png';
import IMG3 from '../assets/shelter.png';
import IMG4 from '../assets/fake.png';
import IMG5 from '../assets/news.png';
import IMG6 from '../assets/math.png';
import './projects.css';

const Projects = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Board  Hover',
      img: bro,
      description:
        'styling with css',
      technologies: 'css | html',
      link: 'https://khalil360.github.io/boardhover/',
      github: 'https://github.com/khalil360/boardhover',
    },
    {
      id: 2,
      title: 'pannier',
      img: pann,
      description:
        'buy from our games',
      technologies: 'javascript | css | html ',
      link: 'https://khalil360.github.io/pannier/',
      github: 'https://github.com/khalil360/pannier',
    },
    {
      id: 3,
      title: 'weather',
      img: wea,
      description: 'enter city to get weather',
      technologies: 'JavaScript | css   | html',
      link: 'https://khalil360.github.io/weather-work/',
      github: 'https://github.com/khalil360/weather-work',
    },
    {
      id: 4,
      title: 'quiz app',
      img: quiz,
      description:
        'answers the questions',
      technologies: 'JavaScript | CSS | html',
      link: 'https://khalil360.github.io/quiz/',
      github: 'https://github.com/khalil360/quiz',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },
  ];

  return (
    <section id="portfolio">
      <div className='container text-center'>
      <h2 className='text-danger'>Portfolio</h2>
      <h5 className='text-secondary'>My Recent Work</h5>
      <br></br>
      
</div>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
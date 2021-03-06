import { useEffect, useState } from 'react';
// images
import alibaba from '../images/baba.jpeg';
import br from '../images/br.jpeg';




const About = () => {
  const [experience, setExperience] = useState([
    {
      title: 'Brooktec ',
      date: '2019 - 2020',
      icon: br,
      text: `Brooktec is development agency with multiple projects varying from apps for banks to e-commerce shops as well as programming languages such as React, Angular, Node.js , Ionic, React Native. The biggest challenge in Brooktec was kipping up with all the technologies,  giving fast and solid solutions to problems. Being able to architect or jump in to the new project, or be in couple of projects simultaneously. `
    },{
      title: 'Alibaba',
      date: '2016 - 2019',
      icon: alibaba,
      text: 'Alibaba is one of the biggest e-comers platforms in the world. Working as a Front-end developer with React.js  my main responsibility was building fast and clean code, being a problem solver as well as keeping up to date with the newest technologies and updates. The biggest challenge was the responsibility to provide bug-less solutions to millions of people worldwide.  '
    },{
      title: 'Freelance',
      date: '2015 - 2016',
      icon: null,
      text: 'I have started my journey as a freelancer, building light and interactive portfolio pages, using interesting styling solutions and animations.'
    }
  ])
  return (
    <div className='all-section'>
      <div className='about-intro'>
        <h3> Experience </h3>
      </div>
      <div className='experience-wrapper'>
        {experience && experience.map(box => 
        <div className='exp-box animate__slideInUp animate__animated'>
          <div className='exp-box-image'>
            <img src={box.icon} width='100%' />
          </div>
          <h4> {box.title}</h4>
          <h6> {box.date} </h6>
          <p> {box.text} </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default About
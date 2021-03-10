import { useEffect, useState } from 'react';
// images
import alibaba from '../images/baba.jpeg';
import br from '../images/br.jpeg';

import code from '../images/code.PNG';
import exp from '../images/exp.PNG';
import resp from '../images/resp.PNG';
import chall from '../images/chall.PNG';


const About = () => {
  const [imgExp, setImgExp] = useState([code, exp, resp, chall]);

  const [experience, setExperience] = useState([
    {
      title: 'Brooktec ',
      date: '2019 - 2020',
      icon: br,
      teamColor: 'rgba(66, 53, 64, 0.5)',
      text: [
        {
          title: 'Company',
          text: 'Brooktec is development agency with multiple projects varying from apps for banks to e-commerce shops',
        },
        {
          title: 'Technologies',
          text: ['React', 'React Native', 'Redux', 'Flux', 'Node.js', 'Express','Ionic','Angular'],
        },
        {
          title: 'Challenges',
          text: 'The biggest challenge in Brooktec was kipping up with all the technologies, giving fast and solid solutions to problems',
        },
        {
          title: 'Responsibilities',
          text: 'Being able land in to a new project, understand and architect the logic, maintain several projects simultaneously.',
        },
      ]

    },{
      title: 'Alibaba',
      date: '2016 - 2019',
      icon: alibaba,
      teamColor: 'rgba(255, 100, 1, 0.5)',
      text: [
        {
          title: 'Company',
          text: 'Alibaba is one of the biggest e-comers platforms in the world with millions of active users.',
        },
        {
          title: 'Technologies',
          text: ['React', 'React Native', 'Redux', 'Mapbox', 'Olimpics'],
        },
        {
          title: 'Challenges',
          text: ' The biggest challenge was the responsibility to provide bug-less solutions to millions of users worldwide'
        },
        {
          title: 'Responsibilities',
          text: 'Working as a Front-end developer with React.js my main responsibility was building fast and clean code, being a problem solver as well as keeping up to date with the newest technologies and updates',
       },
      ]
    },{
      title: 'Freelance',
      date: '2015 - 2016',
      icon: null,
      teamColor: '#eee',
      text: [
        {
          title: '',
          text: 'I have started my journey as a freelancer, building light and interactive portfolio pages',
        },
        {
          title: 'Technologies',
          text: ['jQuery', 'CSS3', 'Keyframes', 'Sass/Less', 'Vanilla Js'],
        },
        {
          title: 'Responsibilities',
          text: 'Solving the UX using interesting styling solutions and animations',
        },
      ]
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
          {box.text && box.text.map((textElm, index) => {
            return (<div className='company-row'>
              <div className='company-image'>
                <div 
                  className='image-overflow'
                  style={{ backgroundColor: box.teamColor}}
                >
                  <img src={imgExp[index]} width='100%'/>
                </div>
              </div>
              <div>
                <h4> {textElm.title} </h4>
                <p> {typeof textElm.text === 'string' ? textElm.text 
                : textElm.text.map(codeText => <code className='tec-code'> {codeText} </code>)} </p>
              </div>
            </div>)
          })}
          </div>
        )}
      </div>
    </div>
  )
}

export default About
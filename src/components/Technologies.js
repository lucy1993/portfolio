import { useEffect, useState } from 'react';
import poqrKetij from '../images/poqrKetij.png';
import { v4 as uuidv4 } from 'uuid';
// icons
import js from '../images/js.png';
import node from '../images/node.png';
import redux from '../images/redux.png';
import react from '../images/react.png';
import reactNative from '../images/reactNative.png';
import angular from '../images/angular.png';
import python from '../images/python.png';
import ionic from '../images/ionic.png';
import sass from '../images/sass.png';
import git from '../images/git.png';


const Technologies = () => {
  const [tec, setTec] = useState([
    {
      pr: 70,
      title: 'Python',
      color: '#fd8989',
      text: `After Harvard\'s CS50 course with Python and Django, 
      coding became more fun. It was great pleasure to follow trough 
      the course with David J. Malan, pass assignments, and finally
      obtain the certification`,
      icon: python,
      x: '279px',
      y: '137px'
    },
    {
      pr: 100,
      title: 'Node js',
      color: '#f7e08c',
      icon: node,
      text: `Node.js coolest runtime for writing servers and it is in Javascript.
      Was fun to get a certificate of the best courses in Udemy by Maximilian Schwarzmüller.`,
      x: '140px',
      y: '66px'
    },
    {
      pr: 130,
      title: 'Sass',
      color: '#f8d247',
      icon: sass,
      text: `CSS with superpowers makes Front-end developer a painter. Feel free to check
      some of my work in CodePen :)`,
      x: '24px',
      y: '150px'
    },
    {
      pr: 150,
      title: 'Ionic',
      color: '#b7fee4',
      icon: ionic,
      text: 'Being React person Ionic makes me love Angular\'s two way data binding and Typescript more and more.',
      x: '17px',
      y: '255px'
    },
    {
      pr: 160,
      title: 'Angular',
      color: '#4ceab1',
      icon: angular,
      text: 'Well Angular is cool, but react is cooler, lets discussed it over a coffee :) ',
      x: '55px',
      y: '316px'
    },
    {
      pr: 170,
      title: 'Redux',
      color: '#45b58d',
      icon: redux,
      text: `One of the best state containers working with React along with flux, mapbox. 
      Easy to architect and manage the react store. Has great support. One love. `,
      x: '116px',
      y: '373px'
    },
    {
      pr: 180,
      title: 'git',
      color: '#666',
      icon: git,
      text: 'I personally love Sourcetree, has great visual representation, easy user experience and vey powerful',
      x: '170px',
      y: '390px'
    },
    {
      pr: 190,
      title: 'React Native',
      icon: reactNative,
      color: '#333333',
      text: `As you may already noticed I love React and React Native is not an exception.
      It is amazing how you can right Javascript code for both IOS and Android.`,
      x: '229px',
      y: '393px'
    },
    {
      pr: 195,
      title: 'React',
      color: '#404040',
      icon: js,
      text: `Even if the type of NULL is an object and  {} + [] = 0 but [] + {} = "[object Object]" I still love you Javascript.`,
      x: '286px',
      y: '383px'
    },
    {
      pr: 200,
      title: 'Javascript',
      color: '#181818',
      icon: react,
      text: `I started my office coding experience with React in Alibaba.
      Learning from the bests, with best practices and architecture solutions 
      React became the framework that makes me feel powerful to solve 
      any problem, optimize and reuse code, architect big platforms.`,
      x: '383px',
      y: '289px'
    },
  ])
  const [activeElm , setActiveElm] = useState(null)

  const handleMouseOver = (cir) => {
    setActiveElm(cir)
  }
  
  return (
    <div className='technologies-section' 
      style={{
        background: `url(${poqrKetij})`,
        backgroundSize: '40px 40px',
        backgroundRepeat: 'repeat',
      }}>
        <div className='pie-wrap'>
          <svg className='big-svg' >
            {tec && tec.map((cir, index) => 
            <svg 
            key={uuidv4()} 
            style={{
              cursor: activeElm && activeElm?.pr == cir.pr ? 'pointer' : 'none',
              opacity: activeElm && activeElm?.pr == cir.pr ? 0.6 : 1,
            }}
            onMouseEnter={() => handleMouseOver(cir)}
            onMouseLeave={() => setActiveElm(null)}>
              <image
                style={{
                  x: cir.x,
                  y: cir.y,
                }}
              href={cir.icon} width={activeElm && activeElm?.pr == cir.pr ? '40' : 30} />
              <circle 
                style={{
                  fill: 'transparent',
                  stroke: cir.color,
                  strokeWidth: cir.pr,
                  strokeDasharray: `${300 - (index+1)*20} ${6.38*cir.pr/2}`
                }}
                r={cir.pr/2} cx="200" cy="200" 
              />
            </svg>
            )}
          </svg>
          {activeElm && <div className='tec-text'> {activeElm.text} </div>}
        </div>
        <div className='tec-info-text animate__animated animate__pulse'> hover over technologies to learn more </div>
    </div>
  )
}

export default Technologies;

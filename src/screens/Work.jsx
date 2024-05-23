import React from 'react'
import Navbar from '../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import ibex from '../assets/ibex.png'
import cgpa from '../assets/cgpa.png'
import landingpage from '../assets/landingpage.png'
import stopwatch from '../assets/stopwatch.png'
import cv from '../assets/cv.png'
import ecommerce from '../assets/ecommerce.png'
import quiz from '../assets/quiuz.png'
import typing from '../assets/typing.png'
import imageeditor from '../assets/image.png'

function Work() {
  return (
    <>
      <Navbar one="work" two="" three='about' four='contact' />
      <div className='work container '>
        <div className="work1 workPage hidden center">
          <div className="workHeading">
            <h1 className="h1">Project Showcase</h1>
            <p className="p">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'From sleek designs to interactive features, explore my creative work in web development', ,
                  1000,
                ]}
                speed={50}
                style={{ fontSize: '1.2em' }}
              // repeat={false}
              />
            </p>
          </div>
        </div>

        <div className="projects">
          <Project
            number="01"
            heading="ibex Clone"
            title="FrontEnd Development"
            des="It is the UI of the ibex. Pakistan website using React.js and React Routing"
            i="1"
            img={ibex}
            link="https://ibex-clone.vercel.app"
          />


          <Project
            number="02"
            heading="Cyber Tech"
            title="FrontEnd Development"
            des="I designed it using HTML5, CSS3"
            i="2"
            img={landingpage}
            link="https://landingpage-rho-henna.vercel.app"
          />


          <Project
            number="03"
            heading="Fake Shop"
            title="FrontEnd Development"
            des="This is designed using React.js and react-redux"
            i="3"
            img={ecommerce}
            link="https://e-commerce-nu-flax-49.vercel.app"
          />


          <Project
            number="04"
            heading="Image Editor"
            title="Logical Development"
            des="Online image editor using HTML5, CSS3 and vanilla JavaScript"
            i="4"
            img={imageeditor}
            link="https://abuhuraira775.github.io/image-editor"
          />


          <Project
            number="05"
            heading="Grade Checker"
            title="UI/UX Design"
            des="Grade checker developed by using JavaScript"
            i="4"
            img={cgpa}
            link="https://gradechecker-one.vercel.app"
          />


          <Project
            number="06"
            heading="Stopwatch"
            title="FrontEnd Development"
            des="Developed by using Vanilla JavaScript"
            i="4"
            img={stopwatch}
            link="https://stopwatch-five-virid.vercel.app"
          />


          <Project
            number="07"
            heading="Quiz App"
            title="FrontEnd Development"
            des="Developed by using Vanilla JavaScript"
            i="4"
            img={quiz}
            link="https://quizapp-rpze.vercel.app"
          />


          <Project
            number="08"
            heading="Typing Speed Cheker"
            title="FrontEnd Development"
            des="Developed by using Vanilla JavaScript"
            i="4"
            img={typing}
            link="https://typing-test-lemon.vercel.app"
          />
        </div>

      </div>
    </>
  )
}

const Project = ({ number, title, heading, des, img, i, link }) => {
  return (
    <div className={`project projectPage project${i} h-100 grid2 mb3`}>
      <div className="projectDetailSide">
        <h1 className="h1 projectNumber">{number}</h1>
        <h1 className="h1 projectHeading">{heading}</h1>
        <h2 className="h2 projectTitle">{title}</h2>
        <p className="p projectDescription">{des}</p>
        <a href={link} target='_blank'><button>Visit Site</button></a>
      </div>

      <div className="projectShowImagesSide">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Work
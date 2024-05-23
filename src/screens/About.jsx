import React from 'react'
import about from '../assets/about.gif'
import Navbar from '../components/Navbar'
import { TypeAnimation } from 'react-type-animation'
import redDot from '../assets/redDot.png'
import react from '../assets/react.png'
import sass from '../assets/sass.png'
import html from '../assets/html.png'
import css from '../assets/css3.png'
import tailwind from '../assets/tailwind.png'

function About() {

  console.log(about)
  return (
    <>
      <Navbar one="about" two="" three="work" four="contact" />

      <div className='about container ' id='about'>
        <div className="aboutPage">

          <div className="aboutHead">
            <h1 className="h1">I'm ABU HURAIRA</h1>
          </div>
          <div className="aboutDesccription">
            <p className="p">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Passionate React developer bringing user interfaces to life with creativity and technical expertise. Continuously honing my skills and venturing beyond the frontend. Currently mastering the MERN stack to become a full-stack developer who can bridge the gap between design and functionality.", ,
                  1000,
                ]}
                speed={80}
              />
            </p>
          </div>
          <div className="aboutBottom aboutBottomImage">
            <div className="imageHeading">
              <h1 className="h1">Tech I use</h1>
            </div>

            <div className="aboutImages">
              <img src={react} alt="" />
              <img src={sass} alt="" />
              <img src={tailwind} alt="" />
              <img src={html} alt="" />
              <img src={css} alt="" />
            </div>
            <div className="aboutTech">
              {/* <img src={react} alt="" />
              <img src={bootstrap} alt="" />
              <img src={js} alt="" />
              <img src={tailwind} alt="" /> */}
            </div>
          </div>
        </div>

        <div className="abouotEducation">


          <div className="light">
            <h1 className="h1 aboutComHeading glow">Education</h1>
          </div>
          <div className="line ">
            <img src={redDot} alt="" />
          </div>
          <div className="aboutComponents">


            <AboutComp
              start="2021"
              end="Present"
              heading="Software Engineering"
              educationTitle="Bachelor"
              instituteName="Sindh Madressatul Islam University"
              insLocation="Karachi"
              eduDes="I am working in my professional life by studying in the Technical field to enhance my profile and serve the community in professionall way"
              tag1="Software Engineering "
              tag2="BSSE"
              tag3="Information and Technolgy"
              tag4="Technolgy"
            />
            <AboutComp
              start="2017"
              end="2019"
              heading="Pre-Engineering"
              educationTitle="Intermediate"
              instituteName="PECHS Science College"
              insLocation="Karachi"
              eduDes="Intermediate degree holder in pre-engineering"
              tag1="Intermediate "
              tag2="Science"
              tag3="Pre-Engineering"
              tag4="College"
            />
            <AboutComp
              start="2015"
              end="2017"
              heading="Science"
              educationTitle="Matriculation"
              instituteName="Darul Madinah Boys Secondary Islamic School"
              insLocation="Karachi"
              eduDes="A-One Grade holder and got the scholorship from the government of Pakistan"
              tag1="Science "
              tag2="Scholorship"
              tag3="Matriiculation"
              tag4="Dar-ul-Madinah"
            />
          </div>
        </div>

        <div className="aboutCertificates abouotEducation">
          <div className="light">
            <h1 className="h1 aboutComHeading glow">Certification</h1>
          </div>

          <div className="line ">
            <img src={redDot} alt="" />
          </div>

          <div className="aboutComponents">


            <AboutComp
              start="2021"
              end="2021"
              heading="FrontEnd Development"
              educationTitle="Certificate"
              instituteName="Jawan Pakistan"
              insLocation="Karachi"
              eduDes="I got the opprtunity to get certified in Frontend Development"
              tag1="FrontEnd "
              tag2="Information and Technology"
              tag3="Website Development"
              tag4="Jawan Pakistan"
            />
          </div>
        </div>

        <div className="aboutExperiences abouotEducation">
          <div className="light">
            <h1 className="h1 aboutComHeading glow">Experiences</h1>
          </div>

          <div className="line ">
            <img src={redDot} alt="" />
          </div>
          <div className="aboutComponents">
            <AboutComp
              start="2021"
              end="2021"
              heading="Frontend Development"
              educationTitle="Intership"
              instituteName="Interns Pakistan"
              insLocation="Remote"
              eduDes="One month internship in frontend development to enhance my website development skill"
              tag1="Website Designing "
              tag2="Interns Pakistan"
              tag3="Frontend"
              tag4="Information and Technolgy"
            />
          </div>
        </div>
      </div>
    </>
  )
}

const AboutComp = ({ heading, educationTitle, instituteName, start, end, eduDes, insLocation, tag1, tag2, tag3, tag4 }) => {
  return (
    <div className='singleEducationComponent'>
      <div className="aboutDetailLeft">
        <h3 className="h3 date">{start} - {end}</h3>
      </div>

      <div className="aboutDetailRight">
        <div className="heading">
          <h2 className="h2 eduHeading">{heading} - {educationTitle}</h2>
          <h2 className="h2 instituteName">{instituteName} - {insLocation}</h2>
        </div>

        <div className="description">
          <p className="p">{eduDes}</p>
        </div>

        <div className="tags">
          <Tag tagName={tag1} />
          <Tag tagName={tag2} />
          <Tag tagName={tag3} />
          <Tag tagName={tag4} />
        </div>
      </div>
    </div>
  )
}

const Tag = ({ tagName }) => {
  return <p className="p tagName">{tagName}</p>
}

export default About
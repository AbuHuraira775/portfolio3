import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import AnimatedBall from '../components/AnimatedBall'
import anime from 'animejs';
import profile from '../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation';
import ReactiveButton from 'reactive-button';
import cv from '../assets/hurairaCV.pdf'

function Home() {

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Navbar one="home" two='about' three="work" four="contact" />
      <div id="home" className="home container ">
        <div className="homeImage center">
          <img src={profile} />
        </div>
        <div className="homeRightContent">
          <div className="homeHead">
            <div className="homeHeading homeName">
              <h1 className="h1 me">This is Me</h1>
              <h1 className="h1 huraira">Abu Huraira</h1>
            </div>
            <div className="homeTitle">
              {/* <h2 className="h2">Frontend Developer</h2> */}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  'Frontend Developer',
                  1000,
                  'UI/UX Designer',
                  1000,
                  'Website Developer',
                  1000,
                ]}
                speed={10}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              />
            </div>

            <div className="homeBottom homeDescription">
              <p className="p">As a skilled developer, I am passionate about transforming your vision into innovative web applications thru lines of code.</p>
            </div>

            <div className="homeBtns w-100 mt3">
              <a href="mailto:abuhurairah775@gmail.com" target='_blank'><button className='hireBtn btn'>Hire Me</button></a>
              <a href="../assests/hurairaCV.pdf" download><button className='resumeBtn btn'>Resume <i class="fa-solid fa-cloud-arrow-down"></i></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
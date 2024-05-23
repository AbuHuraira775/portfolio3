import React from 'react'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <>
      <Navbar one="contact" two="" three="about" four="work" />
      <div className='contact container'>
        <div className='contactHeading'>
          <h1 className="h1">Contact Me</h1>
        </div>

        <div className="contactForm">

          <div className="contactField w-100">
            <label >Name</label>
            <input type='text' placeholder='Full Name' />
          </div>
          <div className="contactField w-100">
            <label >Email Address</label>
            <input type='email' placeholder='Email Address' />
          </div>
          <div className="contactField w-100">
            <label >Subject</label>
            <input type='text' placeholder='Subject' />
          </div>
          <div className="contactField w-100">
            <label >Message</label>
            <textarea className='textarea w-100' rows="10" cols="50">

            </textarea>
          </div>

          <div className="contactField  w-100">
            <button className='btn center'>Submit</button>
          </div>

        </div>

        <div className="contactAbout">
          <div className="contactDescription">
            <p className="p">
              Tell me about your vision which challenges are you facing? What are your goals and expectations? What would success look like and how much are you planning to spend to get there?
            </p>
          </div>

          <div className="contactLinks w-100 center">
            <a href="https://www.linkedin.com/in/abu-huraira-a9828922a/" target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/AbuHuraira775" target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href="https://wa.me/03132680481" target='_blank'><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
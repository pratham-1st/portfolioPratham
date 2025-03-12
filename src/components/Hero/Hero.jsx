import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import profile_image from '../../assets/profile_img12.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={profile_image} alt="" />
        <h1><span> I'm Pratham Singh Chouhan, </span><br /> software developer based in India.</h1>
        <p>I've experience in developing and deploying software application and building scalable solutions.</p>
        <div className="hero-section">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
            <a href="https://drive.google.com/file/d/1LC1RLO7kMCi84cAfHvuPqLtzzXLs6ajD/view?usp=sharing"><div className="hero-resume">My resume</div></a>
        </div>
    </div>
  )
}

export default Hero
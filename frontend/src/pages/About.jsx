import React from 'react'
import HeroAbout from '../components/HeroAbout';
import AboutProperty from '../components/AboutProperty';
import ProjectShowcase from '../components/ProjectShowcase';
import AboutHero from '../components/AboutHero';
import Brand from '../components/Brand';
import OurExpertAgents from '../components/OurExpertAgents';
export default function About() {
  return (
    <div className='w-full overflow-hidden'>
        <HeroAbout />
        <AboutHero />
        <Brand />
        <AboutProperty />
        <OurExpertAgents />
        <ProjectShowcase />
    </div>
  )
}

import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './AboutMe.scss';

export const AboutMe = () => {
  return (
    <ScrollableAnchor id={'aboutme'}>
      <section className='aboutme'>
        <a href='#aboutme'>
          <h1 className='aboutme__h1'>About me</h1>
        </a>
        <p>My name is Adam Kulig.</p>
        <p>I live in Rzeszow. I am a land surveyor by education. I made the decision to change my industry work.</p> 
        <p>I chose programming because it is interesting and give me the opportunity to improve myself technically, logically and linguistically. </p>
        <p>I'm have been learning programming for half year. I am a systematic, precise, ambitious person who can not leave an unresolved problem. I think that I already have the basics to take the first job as a frontend developer.</p> 
        <p>I encourage you to contact me!</p>
      </section>
    </ScrollableAnchor>
  )
}

import React from 'react'
import photo from '../../assets/pics/smallerImageBlue.jpeg'


function About() {

  return (
    <section className="my-5" >
      <h1 id="about">A little about me ...</h1>
      <div className="my-2">
      <div>
                <img
                    src={photo}
                    alt="My dog Blue"
                    className='img-thumbnail mx-1'
                    />
            </div>
        <p>
          Hello I'm a Full Stack Web Developer.
          I love solving complex problems and working on code.
          Check out a few of my projects.
          Contact me if you have any questions. 
      </p>
      </div>
    </section>
  )
}

export default About
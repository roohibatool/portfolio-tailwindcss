import React from 'react'

const Skills = () => {
  return (
    <div id='skills'  className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4x1 md:text-5x1' >Technologies I work with</h2>
                <p className='text-yellow-500 pt-2'>As a passionate and dedicated new web developer, I specialize in creating clean, responsive, and user-friendly websites. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks, I enjoy solving problems and bringing ideas to life through code. I'm eager to collaborate, continuously learn, and contribute to innovative projects that make a meaningful impact online.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3x1 sm:text-4x1'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className="space-y-2">
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills

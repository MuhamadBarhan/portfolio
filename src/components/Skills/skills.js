import React from 'react';
import './skills.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  const skillBarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.3, // Staggered animation delay
      },
    }),
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', imgSrc: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp' },
        { name: 'CSS3', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256' },
        { name: 'JavaScript', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256' },
        { name: 'React JS', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256' },
        { name: 'Bootstrap', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-226077.png?f=webp&w=256' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node JS', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-nodejs-226032.png?f=webp&w=256' },
        { name: 'Express JS', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=webp&w=256' },
        { name: 'MySQL', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-mysql-21-1174941.png?f=webp&w=256' },
        { name: 'MongoDB', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256' },
        { name: 'PHP', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-php-28-226043.png?f=webp&w=256' },
        { name: 'Python', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=webp&w=256' },
        { name: 'Java', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=256' },
        { name: 'Spring Boot', imgSrc: 'https://avatars.githubusercontent.com/u/69558822?s=200&v=4' },
      ],
    },
    {
      title: 'Other Tools',
      skills: [
        { name: 'Git', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256' },
        { name: 'GitHub', imgSrc: 'https://assets-global.website-files.com/61d1b6e84887f53fef1dcdf2/631b45e07d98cfb364e5951f_github-white.png' },
        { name: 'Firebase', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-firebase-3521427-2944871.png?f=webp&w=256' },
        { name: 'Postman API', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png?f=webp&w=256' },
        { name: 'Figma', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png?f=webp&w=256' },
        { name: 'PhotoShop', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-photoshop-8-226474.png?f=webp&w=256' },
        { name: 'Linux', imgSrc: 'https://cdn.iconscout.com/icon/free/png-512/free-linux-3628892-3030032.png?f=webp&w=256' },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
      <motion.span
        className="skillsHeading"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.3 } } : {}}
      >
        Skills
      </motion.span>
      <motion.span
        className="skillsDesc"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } : {}}
      >
        What I've learned
      </motion.span>

      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="skillCategory">
          <div className="categoryHeading">
            <p>{category.title}</p>
          </div>
          <div className='skillBars'>
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className="skillBar"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={skillBarVariants}
                custom={skillIndex} // Pass index for delay
              >
                <img src={skill.imgSrc} alt={skill.name} className='skillImg' />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

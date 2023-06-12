import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Alan | Resume</title>
        <meta
          name='description'
          content='I am a software engineer based out of the San Francisco area.'
        />
        <link rel='icon' href='/elephant.svg' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Ultra Clean Technology
            </span>
            <span className='px-2'>|</span>Hayward, CA
          </p>
          <p className='py-1 italic'>Software Engineer (Jan 2022 - Dec 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed a comprehensive regression test suite to ensure 
              the quality of new features, resulting in the early identification and 
              resolution of critical issues.
            </li>
            <li>
              Troubleshot, modified, built, and tested electronic 
              and electro-mechanical systems, and actively participated in
              formal test events.
            </li>
            <li>
              Utilized measuring and diagnostic devices to 
              adjust, test, and repair equipment and electro-mechanical devices while
              conducting formal failure analysis.
            </li>
            <li>
              Verified data quality and functionality against requirements, 
              performing manual and automated testing for microcontrollers to ensure optimal performance.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Chabot College
            </span>
            <span className='px-2'>|</span>Hayward, CA
          </p>
          <p className='py-1 italic'>Computer Science Tutor(Jan 2019 - May 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Mentored over 163 low socio-economic students in various courses 
              such as data structures, computer architecture, and object-oriented 
              programming by leading lab-based workshops and exercises.
            </li>
            <li>
              Reallocated resources into technology-focused, resulting in a significant 
              46.3% increase in student involvement.
            </li>
          </ul>
        </div>

        {/*  Projecgs */}
        <h5 className='text-center underline text-[18px] py-4'>
          HIGHLIGHTED PROJECTS
        </h5>
      
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Declarative Paradigm Interpreter</span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Implemented a prolog interpreter using Java and supporting libraries.
            </li>
            <li>
              Designed and implemented efficient data structures and algorithms for 
              commands such as make_set, delete, insert
              subset, equals, difference, union, append, nth, and flatten.
            </li>
            <li>
              Enhanced functionality to improve the speed of looking up facts, 
              optimizing data storage and retrieval for programmers.
            </li>
          </ul>
        </div>


        {/*  Education */}
        <h5 className='text-center underline text-[18px] py-4'>
          EDUCATION
        </h5>

        <div className='py-6'>
          <p className='py-1 italic'>San Jose State University</p>
          <p className='py-1 italic'>Bachelor&#39;s of Science in Computer Science</p>
          <p className='italic'>
            <span className='font-bold italic'>
              Relevant Coursework
            </span>
            <span className='px-2'>:</span>Computer Networks, Data Structures, and Algorithms, Programming Paradigms
          </p>
          <p className='italic'>
            <span className='font-bold italic'>
              Certifications
            </span>
            <span className='px-2'>:</span>JPMorgan & Chase Co. Software Experience
          </p>
        </div>
        
        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>SKILLS</h5>
          <p className='py-2'>
            <span className='px-2'></span>Python
            <span className='px-2'>|</span>C
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>Agile
            <span className='px-2'>|</span>Linux
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Git
          </p>
        </div>

        {/*  SUMMARY */}
        <h5 className='text-center underline text-[18px] py-4'>
          SUMMARY
        </h5>

        <p>
          &emsp;Hi, I am a highly skilled software engineer with a proven track record of 
          delivering high-quality solutions. During my time at Ultra Clean Technology, I developed 
          a comprehensive regression test suite to ensure the quality of new features, successfully 
          identifying and resolving critical issues before they reached production. Troubleshooting, 
          modifying, and testing electronic and electro-mechanical systems was a significant part of 
          my role, and I actively participated in formal test events. I utilized measuring and 
          diagnostic devices for adjusting, testing, and repairing equipment while conducting formal 
          failure analysis. In addition, I verified data quality and functionality against requirements, 
          performing both manual and automated testing for microcontrollers to ensure optimal performance.
        </p>

        <p>
          &emsp;As a computer science tutor at Chabot College, I mentored over 163 students, providing guidance 
          in various courses such as data structures, computer architecture, and object-oriented programming. 
          Through leading lab-based workshops and exercises, I significantly increased student 
          involvement by 46.3% by reallocating resources into technology-focused initiatives.
        </p>
        
        <p>
          &emsp;I have worked on several notable projects, including implementing a prolog interpreter using 
          Java and designing efficient data structures and algorithms for commands such as make_set, 
          delete, insert, subset, equals, difference, union, append, nth, and flatten. I also developed a 
          feature-rich web application using Golang microservices, ensuring high performance and scalability. 
          In the field of game development, I designed and implemented a 2D adventure-based game using C++ and 
          SFML libraries. Through my optimization techniques, I achieved a remarkable 47.75% improvement in map 
          storage and efficiency by dynamically allocating and deallocating aspects of a map&#39;s coordinates 
          based on the player&#39;s location.
        </p>

        <p>
          &emsp;I hold a Bachelor&#39;s of Science degree in Computer Science from San Jose State University. 
          My coursework includes computer networks, data structures, and algorithms, and I have gained
          experience in various programming paradigms. Furthermore, I have obtained certifications from 
          JPMorgan & Chase Co. in software experience.
        </p>

        <p>
          &emsp;With my proficiency in languages such as Python, C, C++, Java, and JavaScript, along with experience 
          in databases like MongoDB, MySQL, and PostgreSQL, I am well-equipped to tackle complex software engineering 
          challenges. I am proficient in Agile methodologies, DevOps practices, Git, ,and JUnit.
        </p>

        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'></h5>
          <p className='py-2'>
          </p>
        </div>


      </div>
    </>
  );
};

export default resume;

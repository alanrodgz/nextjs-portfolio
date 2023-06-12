import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I started my computer science journey at a community college in the east bay. While studying there, I took on the role of a computer 
            science and math tutor, which was one of the best decisions I have made. Teaching others from different perspectives not only solidified 
            my understanding of computer science but also enhanced my communication skills. The community college provided me with the opportunity 
            to fully grasp the fundamentals before transferring to San Jose State University.

            At SJSU, I pursued courses that encompassed both theoretical computer science and practical software engineering principles. 
            This allowed me to explore different types of development cycles and understand their benefits for specific projects. I believe that my experiences 
            and education make me a valuable asset to any team, both technically competent and socially adept.
          </p>
          <p className='py-2 text-gray-600'>
            I have a diverse range of experiences, but what truly stands out are the ones that have solidified my understanding of the fundamentals. 
            I firmly believe in the significance of having a strong foundation because, despite the abundance of technological advancements, a solid 
            grounding allows for a deep comprehension of any specific type of technology.

            Throughout my journey, I have actively engaged in developing graphical user interface (GUI) applications that leverage data structures and 
            algorithms within a collaborative team setting. This experience not only honed my technical skills but also emphasized the importance of effective 
            communication, version control, modularization, and development models.

            Furthermore, I have undertaken the ambitious task of constructing an interpreter that functions as its own programming language. 
            This endeavor enabled me to delve into the intricate workings of programming languages, further reinforcing my understanding of 
            software development principles.

            With this wide array of experiences under my belt, I bring a comprehensive skill set and a deep appreciation for the foundational 
            aspects of computer science. I am well-versed in working collaboratively, utilizing effective communication, version control, 
            modularization, and development models to foster productive teamwork.
          </p>
          <Link href='/#projects' legacyBehavior>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

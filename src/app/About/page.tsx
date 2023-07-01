import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import { aboutdata } from '../components/data/data';
import { FaLinkedin } from 'react-icons/fa';

const AboutMePage = () => {
  return (
    <main className='flex flex-col items-center'>
      <section className='flex flex-row w-10/12 mt-10 mb-6 items-center'>
        <div className="w-1/3">
         
        </div>

        <div className='ml-20 w-2/3'>
          <h2 className="">{aboutdata.title}</h2>
          <p className='text-lg'>{aboutdata.body}</p>

         
         
         <p> <li>GENERADOR DE PREGUNTAS</li></p>
        </div>
      </section>
    </main>
  );
};

export default AboutMePage;

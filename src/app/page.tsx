import React from 'react'
import Image from 'next/image'
import { home } from '../app/components/data/data'

const Home = () => {
  return (
    <main className='flex flex-col items-center'>
      <section className='flex flex-row w-10/12 mt-10 mb-6 items-center'>
        <div className='ml-20 w-2/3'>
          <h2 className='text-center font-bold'>{home.title}</h2>
          <p className='text-lg '>{home.body}</p>
        </div>
        <div className="w-1/3">
        </div>
        
      </section>
    </main>
  )
}

export default Home;
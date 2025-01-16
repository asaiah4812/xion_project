import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Ellipsis } from 'lucide-react'

interface CatProps {
  id: number;
  name: string;
  new?:boolean;
}

const Cat:CatProps[] = [
  {
  id:1,
  name: "Work",
  new: true
  },
  {
    id:2,
    name: "Projects",
    new: false
  },
  {
    id:3,
    name: "Achievements",
    new: false
  },
  {
    id:4,
    name: "Collections",
    new: false
  },
  {
    id:4,
    name: "About",
    new: false
  }
]

const Profile = () => {
  return (
    <div className='p-5 w-full md:w-[80%] mx-auto'>
      <div className='flex gap-4 py-4 w-[400px] mx-auto'>
        <div className='relative w-[80px] h-[80px] overflow-hidden rounded-full'>
          <Image src={'/me.jpg'} alt='profile' fill={true} className='' />
        </div>
        <div className='space-y-4'>

          <h2 className='font-bold text-3xl text-slate-300'>Asaiah Henson</h2>
          <p className='text-slate-400'>Nigeria</p>
          <div className="flex gap-5 items-center">
            <Link href={'/'} className='ring-1 ring-slate-500 text-slate-500 hover:bg-slate-500/30 px-5 py-3 rounded-full'>Edit Profile</Link>
            <button className='text-slate-500 ring-1 ring-slate-500 py-3 px-5 rounded-full hover:bg-slate-500/30'><Ellipsis/></button>
          </div>
        </div>
      </div>
      <div className='flex py-4 border-b border-slate-500 items-center mt-5 gap-4'>
        {
          Cat.map(category => (
            <button key={category.id} className={`px-4 py-3 rounded-full ${ category.name === 'Work' ?  'bg-slate-400  text-slate-800' : ''} text-slate-500 hover:bg-slate-400/20 relative`}>
              <span className={`absolute -top-1 -right-3 ${category.new ? 'block' : 'hidden'} bg-pink-600 text-white px-3 py-0.5 rounded-full text-xs`}>new</span>
              {category.name}</button>
            
          ))
        }
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5'>
        <form className='flex items-center justify-center flex-col h-[300px] border-4 border-dotted border-spacing-3 border-slate-500 p-4 rounded-xl space-y-4' >
          <h2 className='font-bold text-xl text-slate-400'>Upload your first shot</h2>
          <p className='text-slate-600 text-center'>show off your best work. Gey feedback, likes
          and be a part of a growing community.
          </p>
          <button className='px-5 py-3 rounded-full text-slate-500 bg-slate-600 hover:bg-slate-700'>Upload your first shot</button>
        </form>
        <div className='p-4 bg-slate-700/60 rounded-xl h-[300px]'></div>
        <div className='p-4 bg-slate-700/60 rounded-xl h-[300px]'></div>
        <div className='p-4 bg-slate-700/60 rounded-xl h-[300px]'></div>
        <div className='p-4 bg-slate-700/60 rounded-xl h-[300px]'></div>
        <div className='p-4 bg-slate-700/60 rounded-xl h-[300px]'></div>
        <div className='p-4 bg-slate-700/60 rounded-xl h-[300px]'></div>
      </div>
    </div>
  )
}

export default Profile

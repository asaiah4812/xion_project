"use client"
import { Bell, FerrisWheel, SearchSlash, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ProfileModal from './ProfileModal'

const Navbar = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false)
  const handleProfileModal = () => {
      setShowProfile(prev => !prev)
  }
  return (
    <div className='flex justify-between items-center px-4 py-2 border-b border-slate-700 bg-slate-800 fixed top-0 left-0 right-0 z-50 '>
      <Link href={'/'} className='flex flex-1 items-center gap-2 text-white'>
      <FerrisWheel /> SkillBridge
      </Link>
      <div className='flex flex-1  items-center gap-2 bg-slate-700 px-5 py-4 rounded-2xl'>
      <SearchSlash className='text-slate-400' />
        <input type="text" placeholder='Search' className='bg-transparent outline-none text-white w-full' />
      </div>
      <div className='flex flex-1 justify-end items-center gap-5'>
        <button className='bg-slate-300 hover:bg-slate-400 px-5 py-4 rounded-2xl font-medium'>New Post</button>
        <button className='text-slate-400 bg-slate-700/60 hover:bg-slate-700/90 relative p-4 rounded-2xl'>
        <div className='absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center text-xs text-white'>3</div>
        <Bell />
        </button>
        <div className='flex items-center gap-2 bg-slate-700/60 hover:bg-slate-700/90 p-2 rounded-2xl relative' onClick={handleProfileModal}>
            <div className='flex items-center gap-5'>
                <button className='size-6 bg-blue-500 p-1 flex items-center justify-center rounded-full text-white'><Zap /></button>
                <span className='text-white'>10</span>
            </div>
            <div>
                <Image src={'/me.jpg'} alt='user' width={38} height={38} className='rounded-xl' />
            </div>
            {
              showProfile && (
                <ProfileModal/>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default Navbar

"use client"
import { Bell, FerrisWheel, Menu, SearchSlash, X, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ProfileModal from './ProfileModal'
import { Button } from "@burnt-labs/ui";
import { Abstraxion, useAbstraxionAccount } from '@burnt-labs/abstraxion'
import { useModal } from '@burnt-labs/abstraxion'

const Navbar = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false)
  const [showNavbar, setShowNavbar] = useState<boolean>(false)
  const handleProfileModal = () => {
      setShowProfile(prev => !prev)
  }
  // Abstraxion hooks
  const { data: { bech32Address }, isConnected, isConnecting } = useAbstraxionAccount();

  // General state hooks
  const [, setShow] = useModal();

  // watch isConnected and isConnecting
  // only added for testing
  useEffect(() => {
    console.log({ isConnected, isConnecting });
  }, [isConnected, isConnecting])
  return (
    <div className='flex justify-between items-center px-4 py-2 border-b border-slate-700 bg-slate-800 fixed top-0 left-0 right-0 z-50 '>
      <Link href={'/'} className='flex flex-1 items-center gap-2 text-white'>
      <FerrisWheel /> SkillBridge
      </Link>
      <div className='hidden lg:flex w-[400px] flex-1 items-center gap-2 bg-slate-700 px-5 py-4 rounded-2xl'>
      <SearchSlash className='text-slate-400' />
        <input type="text" placeholder='Search' className='bg-transparent outline-none text-white w-full' />
      </div>
      <div className='hidden lg:flex-1  lg:flex items-center justify-end gap-5'>
        <Button
            onClick={() => { setShow(true) }}
            structure="base"
        >
          {bech32Address ? (
              <div className="flex items-center justify-center">VIEW ACCOUNT</div>
          ) : (
              "CONNECT"
          )}
        </Button>
        {
          bech32Address &&
          <>
            <div className="ring-1 ring-slate-300 rounded-md px-5 py-3 flex flex-row gap-4">
              <div className="flex flex-row gap-6">
                <button className='text-slate-400'>
                  {`${bech32Address.slice(0,3)}..${bech32Address.slice(10, 14)}`}
                </button>
              </div>
            </div>
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
          </>
        }
        <Abstraxion onClose={() => setShow(false)} />

      </div>
      {
        showNavbar && (
      <div className='flex flex-col px-4 pt-5 fixed top-0 right-0 bg-slate-600 h-screen w-[250px]  gap-5'>
      <button className="text-slate-200 text-2xl text-center" onClick={() => setShowNavbar(false)}><X /></button>
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
        <div className='flex  items-center gap-2 bg-slate-700 px-5 py-4 rounded-2xl'>
      <SearchSlash className='text-slate-400' />
        <input type="text" placeholder='Search' className='bg-transparent outline-none text-white w-full' />
      </div>
      <Button
            onClick={() => { setShow(true) }}
            structure="base"
        >
          {bech32Address ? (
              <div className="flex items-center justify-center">VIEW ACCOUNT</div>
          ) : (
              "CONNECT"
          )}
        </Button>
      </div>
        )
      }
      <div className='block lg:hidden'>
        <button onClick={() => setShowNavbar(prev => !prev)} className="text-slate-200"><Menu width={40} height={40}/></button>
      </div>
    </div>
  )
}

export default Navbar

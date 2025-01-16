"use client"
import { BookmarkCheck, Home, PanelLeftClose, PanelRightClose, UserRoundCog } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

interface LinkProps {
    id:number;
    name:string;
    icon: React.ReactNode;
    url: string;
}

const Links:LinkProps[] = [
    {
        id:1,
        name:"home",
        icon: <Home width={30} height={30}/>,
        url: '/'
    },
    {
        id:3,
        name:"Mentors",
        icon:<UserRoundCog width={30} height={30} />,
        url: 'mentors/'
    },
    {
        id:4,
        name:"Bookmarks",
        icon:<BookmarkCheck width={30} height={30} />,
        url: 'bookmarks/'
    },
]

const Sidebar = () => {
    const [showSide, setShowSide] = useState<boolean>(false)
    const pathname:string = usePathname()
  return (
    <div className={` ${!showSide ? 'w-[20%]' : 'w-[5%]'} border-r border-slate-700 transition-all ease duration-200 sticky top-0 left-0`}>
      <div className={`${ showSide ? 'justify-center' : 'justify-between' } flex items-center p-4`}>
        <h2 className={`${ showSide ? "hidden" : "block text-slate-400" } text-xl font-bold`}>Menu</h2>
        <button onClick={() => setShowSide(prev => !prev)}>{showSide ? <PanelRightClose className='text-white' /> : <PanelLeftClose className='text-white' />}</button>
      </div>
      <div className='flex flex-col '>
        <Link href={'myfeed/'} className={`py-3 px-5 flex items-center gap-3 hover:bg-slate-500/20`}>
        <div className='relative w-8 h-8 rounded-md'>
            <Image src={'/me.jpg'} alt="profile" fill={true} className=''/>
        </div>
        <span className={`${showSide ? "hidden" : 'block text-white font-medium'}`}>My Feed</span>
        </Link>
        {
            Links.map(link => (
                <Link 
                className={`py-3 px-5 flex items-center gap-3 ${pathname === link.url ? ' bg-slate-600': ''} hover:bg-slate-500/20`}
                key={link.id} 
                href={link.url}>
                    <span className='text-white'>{link.icon}</span>
                    <span className={`${showSide ? 'hidden' : 'block text-white'}`}>{link.name}</span>
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Sidebar

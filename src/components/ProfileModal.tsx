import { CircleHelp, Settings, SquareArrowUpRight, UserRound, UserRoundPen, WalletMinimal, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React,  from 'react'

interface ProfProps {
    id:number;
    name:string;
    icon: React.ReactNode;
    url: string;
 
}

const ProfileLink:ProfProps[] = [
    {
        id:1,
        name:"Profile",
        icon: <UserRound />,
        url: 'profile/'
    },
    {
        id:2,
        name:"Account Details",
        icon: <UserRoundPen />,
        url: 'account-details/'
    },
    {
        id:3,
        name:"Reputation",
        icon: <Zap />,
        url: 'notifications/'
    },
    {
        id:4,
        name:"Wallet Address",
        icon: <WalletMinimal />,
        url: 'walletAddress/'
    },
    {
        id:5,
        name:"Help",
        icon: <CircleHelp />,
        url: 'help/'
    },
    {
        id:6,
        name:"Settings",
        icon: <Settings />,
        url: 'settings/'
    }
]

const ProfileModal = () => {
   
  return (
    <div className='absolute top-16 bg-slate-700 p-2 ring-1 ring-slate-500 w-[290px] rounded-xl -left-44' >
      <div className='p-2 rounded-xl bg-slate-600'>
        <Image src={'/me.jpg'} width={100} height={100} className='rounded-xl' alt='profile'/>
      </div>
      <div className='flex items-center space-x-3'>
        <h2 className='py-3 text-white font-bold text-xl'>Asaiah Henson</h2>
        <button className='size-6 bg-blue-500 p-1 flex items-center justify-center rounded-full text-white' ><Zap /></button>
        <span className='text-white'>10</span>
      </div>
      <div className='flex gap-y-3 justify-between flex-col'>
        <span className='text-slate-200'>
        @dreamerwebdev 
        </span>
        <small className='text-xs font-light text-slate-400'>Jointed September 2024</small>
      </div>
      <div className='flex flex-col py-3'>
        {
            ProfileLink.map(profile => (
                <Link href={profile.url} 
                key={profile.id}
                className='flex items-center gap-3 p-3 text-slate-300 rounded-lg hover:bg-slate-600/70'
                >{profile.icon} <span>{profile.name}</span></Link>
            ))
        }
      </div>
    </div>
  )
}

export default ProfileModal

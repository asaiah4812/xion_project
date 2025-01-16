"use client"
import { ArrowBigDown, ArrowBigUp, Bookmark, EllipsisVertical, MessageSquareText, NotebookPen } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Card = ({item}:any) => {
    const[count, setCount] = useState(0)
    const handleUpVote = () => {
        setCount(count + 1)
    }
    const handleDownVote = () => {
        if(count > 0) setCount(count - 1)
    }
  return (
    <div className='flex flex-col gap-4 border bg-gradient-to-br from-slate-700 to-slate-900 hover:bg-gradient-to-b transition-all ease-in-out duration-200 border-slate-700 rounded-xl p-6'>
        <div className='flex items-center justify-between'>
            <div className='p-3 bg-slate-700 rounded-full w-10 h-10'>
                <Image src="/vercel.svg" alt="image" width={30} className='object-cover' height={30}/>
            </div>
            <div className='flex items-center gap-2'>
                <button className='flex items-center gap-2 text-sm bg-white text-black px-3 py-1 rounded-full'>Read Post <NotebookPen /></button>
                <EllipsisVertical className='text-white' />
            </div>
        </div>
            <h2 className='text-2xl font-bold text-white'>{item.title}</h2>
            <div className='flex items-center space-x-4'>
                <button className='ring-1 ring-slate-500 text-sm py-1 px-3 text-slate-500 rounded-full'>#webdev</button>
                <button className='ring-1 ring-slate-500 text-sm py-1 px-3 text-slate-500 rounded-full'>#career</button>
                <button className='ring-1 ring-slate-500 text-sm py-1 px-3 text-slate-500 rounded-full'>#nextjs</button>
            </div>
            <span className='text-white'>Nov 27, 2024 2m read time</span>
            <div className='relative w-full h-60 rounded-lg overflow-hidden'>
                <Image src={item.src} alt="image" fill={true} className='absolute hover:scale-110 transition-all duration-300'/>
            </div>
            <div className="flex items-center justify-between p-1">
                <div className="flex items-center gap-3 p-2 bg-slate-600/60 hover:bg-slate-600/70  rounded-lg [&>span]:text-slate-300 max-w-30 cursor-pointer" >
                    <span onClick={handleUpVote} className='active:animate-ping'>
                    <ArrowBigUp />
                    </span>
                    <h3 className='text-slate-200 transition-all ease duration-150'>{item.likes > 2 ? count : item.likes}</h3>
                    <span onClick={handleDownVote} className='active:animate-ping'>
                    <ArrowBigDown />
                    </span>
                </div>
                <div className="space-x-4 flex items-center p-2">
                    <span className='text-slate-300'>
                <MessageSquareText />
                    </span>
                <h3 className='text-slate-200'>{item.comments}</h3>
                </div>
                <div>
                <span className='text-slate-300'>
                <Bookmark />
                </span>
                </div>
            </div>
    </div>
  )
}

export default Card

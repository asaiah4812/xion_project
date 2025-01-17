import { Briefcase, MapPin } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

interface CatProps {
    id:number;
    name:string;
    url:string;
}

const Cats:CatProps[] = [
    {
        id:1,
        name:'All',
        url:'all/'
    },
    {
        id:2,
        name:'Product Designer',
        url:'/'
    },
    {
        id:3,
        name:'Website Designer',
        url:'/'
    },
    {
        id:4,
        name: "Graphic Designer",
        url: '/'
    },
    {
        id:5,
        name: "Software Engineer",
        url: '/'
    },
    {
        id:6,
        name: "Cloud Engineer",
        url: '/'
    },
    {
        id:7,
        name: "Smart Contract Engineer",
        url: '/'
    }
]

export function CategoryFilter(){
  return (
    <div className='flex gap-4 py-3'>

        {
            Cats.map(category => (
                <Link
                className={`px-5 py-2 text-slate-400 ring-1 ring-slate-400 rounded-xl ${category.name === 'All' ? 'bg-slate-500 text-slate-800':""} hover:bg-slate-500 hover:text-slate-800`}
                 key={category.id}
                 href={category.url}>{category.name}</Link>

            ))

        }
    </div>
  )
}


export function SearchFilter() {
  return (
    <form action="" className='flex items-center justify-between'>
        <div className='flex gap-5 items-center'>
            <div className='ring-1 ring-slate-400 p-3 my-2 rounded-md flex gap-3 items-center text-slate-400'>
            <Briefcase />
            <input type="text" placeholder='Speciality' className='bg-transparent text-slate-400 outline-none' />

            </div>
            <div className='ring-1 ring-slate-400 p-3 my-2 rounded-md flex gap-3 items-center text-slate-400'>
            <MapPin />
            <input type="text" placeholder='Location' className='bg-transparent text-slate-400 outline-none' />

            </div>
            <div className="flex items-center px-4 border border-slate-300 rounded ">
            <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
            <label htmlFor="bordered-checkbox-1" className="w-full py-3 ms-2 text-sm font-medium text-slate-300">Pro Profiles</label>
        </div>

        </div>
        <div>
        <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Available for Work</span>
</label>
        </div>
    </form>
  )
}



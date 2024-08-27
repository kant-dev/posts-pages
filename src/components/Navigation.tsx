"use client"
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <ul className='flex gap-2 shadow-md shadow-emerald-800  p-2 justify-center text-xl'>
      <Link href={'/'}><li className='bg-gray-300 py-2 px-3 border border-gray-300 rounded-md'>Home</li></Link>
      <Link href={'/postList'}><li className='bg-gray-300 py-2 px-3 border border-gray-300 rounded-md'>Posts</li></Link>
      <Link href={'/addPost'}><li className='bg-gray-300 py-2 px-3 border border-gray-300 rounded-md'>AddPost</li></Link>
    </ul>
  )
}

export default Navigation
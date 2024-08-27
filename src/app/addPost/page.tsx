"use client"

import AddPostElement from '@/components/AddPost'
import Header from '@/components/Header'
import { PostProvider } from '@/contexts/PostContext'
import React from 'react'

const AddPostPage = () => {
      return (
            <div>
                  <PostProvider>
                        <Header/>
                        <div className='border border-red-600 mt-5 w-full flex justify-center '>
                              <AddPostElement 
                                    classForm='border mt-5  flex flex-col items-center gap-y-3 p-2 w-10/12 xl:w-7/12'  
                                    classButton='bg-blue-500 py-2 px-6 rounded text-xl font-semibold w-full' 
                                    classInput=' bg-transparent border-white border w-full p-2 text-2xl outline-none' 
                              />
                        </div>
                  </PostProvider>
            </div>
      )
}

export default AddPostPage
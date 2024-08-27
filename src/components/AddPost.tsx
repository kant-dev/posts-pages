"use client"

import { PostContext } from '@/contexts/PostContext'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

type AdddPostElementProps = {
      classInput: string,
      classButton: string,
      classForm:string,
}

const AddPostElement = ({classButton, classInput, classForm} : AdddPostElementProps) => {
      const contextPosts = useContext(PostContext)

      const routes = useRouter()

      const [title, setTitle] = useState(' ')
      const [theme, setTheme] = useState(' ')
      const [content, setContent] = useState(' ')
      const [author, setAuthor] = useState(' ')

      const handleAddPost = () => {
            contextPosts?.addPosts(title, theme, content, author);
            setTitle('')
            setTheme('')
            setContent('')
            setAuthor('')

            routes.push('/') 
      }


      return (
            <div className={classForm}>
                        <input 
                              className={classInput}
                              type="text" 
                              placeholder="Title" 
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                        />
                        <input 
                              className={classInput}
                              type="text" 
                              placeholder="Theme" 
                              value={theme}
                              onChange={(e) => setTheme(e.target.value)}
                        />

                        <input 
                              className={classInput}
                              type="text" 
                              placeholder="Author" 
                              value={author}
                              onChange={(e) => setAuthor(e.target.value)}
                        />

                        <textarea 
                              className='bg-transparent border-white border w-full p-2 text-lg outline-none h-44'
                              placeholder="Content" 
                              value={content}
                              onChange={(e) => setContent(e.target.value)}
                        />

                  <button 
                        className={classButton}
                        type='submit'
                        onClick={handleAddPost}      
                  >Criar Post</button>
            </div>
      )
}

export default AddPostElement
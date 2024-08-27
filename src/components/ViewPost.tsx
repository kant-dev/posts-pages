"use client"

import { PostContext } from '@/contexts/PostContext'
import React, { useContext, useEffect } from 'react'

const ViewPost = () => {
      const postsContx = useContext(PostContext);

      if(!postsContx) {
            return null
      }

      const {posts, getPosts} = postsContx;
      // erro que está dando: React Hook "useEffect" is called conditionally. React Hooks Must be Called in the exact same order in every component render
      useEffect(() => {
            getPosts();
      }, [getPosts]);

      if(posts.length === 0) {
            return null
      }
      
      const handleDeletePost = (id: string) => {
            postsContx?.removePosts(id)
      }

      return (
            <div>
                  {posts.map((post, key) => (
                        <div key={key} className='bg-[#ede5da] text-black'>
                              <h2 className='bg-[#212e51] p-2 w-1/2'>{post.theme}</h2>
                              <div>
                                    <p>{post.title}</p>
                                    <p>{post.content}</p>      
                                    <p className='italic'>
                                          <strong>Autor:</strong> {post.author}
                                    </p>
                              </div>
                              <button 
                                    // erro que está dando neste componente: Argument of type 'string | undefined' is not assignable to parameter of type 'string'. Type 'undefined' is not assignable to type 'string'. 
                                    onClick={() => handleDeletePost(post.id)}
                              >Deletar Post</button>
                        </div>
                  ))}
            </div>
      )     
}

export default ViewPost
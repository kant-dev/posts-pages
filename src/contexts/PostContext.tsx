"use client"

import { PostReducer } from "@/reducers/PostReducer"
import { postType } from "@/types/postType"
import axios from "axios"
import { createContext, ReactNode, useReducer } from "react"

// Aqui é a tipagem que será usada no PostContext, no caso o que o seu value vai receber de possiveis valores, tanto para ele quando para todos os elementos envoltos no context, recebendo a tipagem dos postos, o que cada opção do reducer faz, no caso adicionar e remover, isso sendo as ações que serão feitas na interface pelo usuario, ai no caso eu recebo os valores que elas receberão, para que depois possam ser adicionadas no meu "db"
type PostContextType = {
      posts: postType[],
      addPosts: ( title: string, theme: string,  content:  string, author: string) => void,
      removePosts: (id: string) => void,
      getPosts: () => void,
}

// Crio o meu Context usando o hook do Context, e passando duas ou a typagem dele ou um valor null
export const PostContext = createContext<PostContextType | null>(null)

// tipagem do provider, no caso a criação de um children, o que vai permitir que qualquer elemento englobado com o useContext/Provider possa utilizar as mesmas propriedades/dados/types dos demais elementos relacionados a mesma funcionalidade
type PostProviderType = {
      children: ReactNode,
}

// criação do componente provider, que receber seu type
export const PostProvider = ({children} : PostProviderType) => {
      // criação de uma constante por meio do reducer que vai ser responsável por detectar qual ação está sendo feita e adicionando no array posts
      const [posts, dispatch] = useReducer(PostReducer, []);


      const getPosts = async () => {
            try {
                  const response = await axios.get('http://localhost:3001/posts');
                  if(response.status === 200) {
                        const postsData = response.data;
                        dispatch({  
                              type: 'set_posts',
                              payload: postsData,
                        })
                  }
            } catch (error) {
                  alert('Não foi possivel pegar posts')
            }
      }

      // aqui é como se fosse uma função de handleSubmit ou posts pra adicionar um post, isso é feito especificando os valores como propriedades/argumentos na função e usando o dispatch do reducer para repassar quais serão os valores que serão trabalhados e enviado para o banco
      const addPosts = async ( title: string, theme: string, content: string, author: string) => {
            const newPost = {title, theme, content, author}

            try {
                  const response = await axios.post('http://localhost:3001/posts', newPost);

                  if(response.status === 200 || response.status === 201){

                        const postSend = response.data;

                        dispatch({  
                              type: 'add_post',
                              payload: postSend,
                        })
                  }
            } catch (error) {
                  alert('Não foi possivel postar nada')
            }
      }
      // mesma coisa que o addPost, a diferença é que esse vai remover
      const removePosts = async (id: string) => {
            try {
                  const response = await axios.delete(`http://localhost:3001/posts/${id}`)
                  if(response.status === 200) {
                        dispatch({  
                              type:'remove_post',
                              payload: { id },
                        })

                        alert('Post deletado com sucesso')
                  }
            } catch (error) {
                  alert('Não foi possivel deletar o post')
            }
      }

      // Context de fato, onde ele recebe como value os posts que foram gerados, e as duas funções ligadas aos posts
      return (
            <PostContext.Provider value={{ posts, addPosts, removePosts, getPosts }}>
                  {children}
            </PostContext.Provider>
      )
}
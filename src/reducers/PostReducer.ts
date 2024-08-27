import { postType } from "@/types/postType";

// Action caso eu queria postar algo, onde pra isso o tipo do reduce será add_post e os campos que serão usados os dados do post são os que estão dentro de payload
type AddPostActions = {
      type: 'add_post',
      payload: {
            id?: string,
            title: string,
            theme: string,
            content: string,
            author: string,
      }
}
// Action caso eu queria remover algum post, onde eu pego apenas o id dele para remover
type RemovePostActions = {
      type:'remove_post',
      payload: { id: string }
}

type SetPostsActions = {
      type:'set_posts',
      payload: postType[]  // aqui recebemos um array de postType, que é o que é esperado pelo reducer
}



// pega as tiapgens das actions e coloca em apenas uma, baseadoe m um operador logico, que no caso é o (OU, OR, | )
type ActionsPosts = AddPostActions | RemovePostActions | SetPostsActions;

// exportando uma arrow funcion a qual está criando um reducer, recebendo como parametro a typagem da estrutura do post  e das ações que podem ser feiras, implementando isso no reducer para ser usado posteriomente ao longo do desenvolvimento, evitando fazer possiveis gambiradas para cada ação
export const PostReducer = (posts: postType[], actions: ActionsPosts) => {
      // aqui verificamos qual ação foi disparada e executamos o codigo adequado para cada caso, com base no type repassado
      switch (actions.type) {
            case 'set_posts': 
                  return actions.payload;
            case 'add_post':
                  // aqui está clonando o array  do "endpoint" e adicionando mais um valor
                  return [...posts, actions.payload];
            case'remove_post':
                  // aqui está filtrando o array do "endpoint" e removendo um valor
                  return posts.filter((post) => post.id!== actions.payload.id);
            default:
                  return posts;
      }
}
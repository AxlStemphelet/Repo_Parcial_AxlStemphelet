import React from 'react'
import listado from './data.json'
import Post from './Post'

export default function Posteos({contarLikes}) {
  return (
    <div className='container'>
      
      {listado.map(elemento => <Post key={elemento.id} listado={elemento} contarLikes={contarLikes}/>)}

    </div>
  )
}

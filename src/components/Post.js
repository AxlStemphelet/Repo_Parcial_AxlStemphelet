import React from 'react'
import { useState } from "react"


export default function Post({listado, contarLikes}) {

  const [likes, setLikes] = useState(listado.likes)

  const contabilizar = () => {
    
    setLikes(likes + 1)
    
    contarLikes()

    console.log(setLikes);
  }

  return (
    <div className='posteo'>

      <h3>{ listado.titulo }</h3>

      <p>{ listado.texto }</p>

      <button onClick={contabilizar}> LIKE </button>

      <h5> {setLikes} {likes < 10 ? likes : <span>Más de 10 likes</span>} </h5>

    </div>
  )
}
import React from 'react'



export default function Estatus({total}) {
  
  return (
    <header>
      <h1> Estatus de Posteos:  </h1>
        <p> likes Totales: 
            <span>
                {total}
            </span>
        </p>
      
    </header>
  )
}

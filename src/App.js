import React from 'react'
import { useState } from "react";
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';

function App() {


  const [total, setTotal] = useState(0);

  const contarLikes = () => {
    
    setTotal(total + 1)
  }

  return (

    <div className="App">
      <Estatus total={total}/>
      <Posteos contarLikes={contarLikes}/>
    </div>
  );
}

export default App;

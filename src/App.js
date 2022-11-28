import './App.css';
import Formulario from './components/Formulario';
import Card from './components/Card';
import { useState } from 'react';





function App() {
  const [formulario] = useState([])

  return (
    <>

    <Formulario />
    
    <Card
    nombre="Sergio"
    edad={23}
    imgUrl={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
    }/>

    </>
    
  );
}


export default App;

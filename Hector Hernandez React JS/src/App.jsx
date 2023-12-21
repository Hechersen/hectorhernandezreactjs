import { useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar.jsx'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './componentes/ItemCount/ItemCount.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos'} />
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada ', quantity)}/>
    </>
  )
}

export default App

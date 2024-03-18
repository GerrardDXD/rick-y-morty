import { useEffect, useState } from "react";
import Usuario from "./components/usuario/usuario";
import "./App.css";
import { listaDeUsuarios } from "./components/usuario/listaUsers.service";
import Personajes from "./components/Personajes/personaje";
// function suma (numero) {
//   return numero + 1
// }

// const laSuma = suma(2)

// console.log(laSuma)

// function App() {
//   const [count, setCount] = useState(12)

//   function intermediaria (variable) {
//     if (variable === 'resta') {
//       setCount(count - 1)
//     } else if (variable === 'suma') {
//       setCount(count + 1)
//     }
//   }

//   return (
//     <>
//     <h1>{count}</h1>
//      <button onClick={() => intermediaria('suma')} > suma</button>
//      <button onClick={() => intermediaria('resta')} > resta</button>
//     </>
//   )
// }

// export default App

// const array = ['wewe', 'qweqwe', 'asdasd']
// const array2 = ['wewe', 'qweqwe', 'asdasd', 123123, false]

// const objeto = {
//   nombre: 'Terry',
//   dni: 465456,
//   apellido: { paterno: 'martel', materno: 'chavez' }}

// console.log(objeto.apellido.materno)

// function App() {
//   const [name, setName] = useState('')
//   const [temporal, setTemporal] = useState('')

//   function intermediaria (e) {
//     setTemporal(e.target.value)
//   }

//   return (
//     <>
//     <h1>{name}</h1>
//      <input type="text" onChange={intermediaria} />
//      <button onClick={() => setName(temporal)} > Añadir</button>
//     </>
//   )
// }

// export default App
const objeto = {
  nombre: "gerrard",
  edad: 15,
  grupo: { persona1: "gerrard", persona2: "dariem", persona3: "mi tio" },
};
objeto.grupo.persona1;
function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const personajes = fetch("https://rickandmortyapi.com/api/character")
      .then((reponse) => reponse.json())
      .then((reponse) => {
        console.log(reponse);
        setCharacters(reponse.results);
      });
  }, []);
  return (
    <div className="app">
      <nav className="barra">
        <h1 className="primero">Rick & Morty Wiki</h1>
        <div className="Links">
          <h2>Characters</h2>
          <h2>Episode</h2>
          <h2>Location</h2>
        </div>
      </nav>
      <h1 className="Characters">Characters</h1>
      <div className="Buscador">
        <input type="text" placeholder="Buscar" className="Input" />
        <button className="Boton">Buscar</button>
      </div>
      <div className="Contenedor">
        <div className="Filter">
          <div>Filters</div>
          <div>Clear Filters</div>
          <div>Box</div>
        </div>
        <div className="Cards">
          {characters &&
            characters.map((elemento, indice) => {
              return <Personajes propiedades={characters && elemento} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;

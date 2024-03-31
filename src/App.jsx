import { useEffect, useState } from "react";
import Usuario from "./components/usuario/usuario";
import "./App.css";
import { listaDeUsuarios } from "./components/usuario/listaUsers.service";
import Personajes from "./components/Personajes/personaje";
import Species from "./components/Filtro/Species";
import Gender from "./components/Filtro/Gender";
import Status from "./components/Filtro/Status";

const paginacion = 42;

const s = ["rick", "morty", "summer"];

function añadir(nombre) {
  s.filter((ele) => ele === "rick");
  s.shift("");
}

const botones = [];
for (let i = 0; i < paginacion; i++) {
  botones.push(i + 1);
}

console.log(botones);

function App() {
  const [characters, setCharacters] = useState(null);
  const [fondo, setFondo] = useState(null);
  const [fondo2, setFondo2] = useState(null);
  const [fondo3, setFondo3] = useState(null);
  const [especies, setEspecies] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const personajes = fetch("https://rickandmortyapi.com/api/character")
      .then((reponse) => reponse.json())
      .then((reponse) => {
        console.log(reponse);
        setCharacters(reponse.results);
      });
  }, []);

  const paginacion = async (ele) => {
    console.log(ele);
    const getPagina = await fetch(
      `https://rickandmortyapi.com/api/character?page=${ele}`
    );
    const data = await getPagina.json();
    setCharacters(data.results);
    setPagina(ele);
  };

  // const url = async (numero) => {
  //   const url = await fetch(`https://rickandmortyapi.com/api/character?page=${numero}`)
  //   const data = await url.json();
  //     setCharacters(data.results);
  // }

  const Filtro = async (estado) => {
    const temporal = await fetch(
      `https://rickandmortyapi.com/api/character/?name=rick&status=${estado}`
    );
    const data = await temporal.json();
    setCharacters(data.results);
  };
  const Filtro2 = async (estado) => {
    const temporal = await fetch(
      `https://rickandmortyapi.com/api/character/?name=rick&species=${estado}`
    );
    const data = await temporal.json();
    setCharacters(data.results);
    setFondo2(estado);
  };
  const Filtro3 = async (estado) => {
    const temporal = await fetch(
      `https://rickandmortyapi.com/api/character/?name=rick&gender=${estado}`
    );
    const data = await temporal.json();
    setCharacters(data.results);
  };
  const originalState = async () => {
    const temporal = await fetch("https://rickandmortyapi.com/api/character");
    const data = await temporal.json();
    setCharacters(data.results);
  };
  const Buscador = async () => {
    const temporal = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}`
    );
    const data = await temporal.json();
    setCharacters(data.results);
  };
  const search = async (e) => {
    const propiedad = e.target.value;
    setNombre(propiedad);
  };
  const Teclado = (e) => {
    if (e.key === "Enter") {
      Buscador();
    }
  };
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
        <input
          type="text"
          onChange={search}
          placeholder="Buscar personajes"
          className="Input"
          onKeyPress={Teclado}
        />
        <button className="Boton" onClick={Buscador}>
          Añadir
        </button>
      </div>
      <div className="Contenedor">
        <div className="Filter">
          <button onClick={() => originalState()}>Clear Filters</button>
          <Status status={Filtro} fondo={fondo} />
          <Species status={Filtro2} fondo={fondo2} />
          <Gender status={Filtro3} fondo={fondo3} />
        </div>
        <div className="Cards">
          {characters &&
            characters.map((elemento, indice) => {
              return <Personajes propiedades={characters && elemento} />;
            })}
        </div>
      </div>
      <div className="paginado">
        <button onClick={() => pagina >= 2 && paginacion(pagina - 1)}>
          Prev
        </button>
        {/* const botones = [1, 2, 3, 4, 5] */}
        {botones.map((ele, index) => {
          return (
            <button onClick={() => paginacion(ele)} key={index}>
              {ele}
            </button>
          );
        })}
        <button onClick={() => pagina <= 41 && paginacion(pagina + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
// const objeto = {
//   nombre: "gerrard",
//   edad: 15,
//   grupo: { persona1: "gerrard", persona2: "dariem", persona3: "mi tio" },
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

import './usuario.css'

function Usuario({name, dni}) {
    
  return (
    <div className="usuario">
    <h1>{name}</h1>
    <h1>{dni}</h1>
    </div>
  )
}

export default Usuario
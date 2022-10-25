

// importacion de css
import "./app.css"
// importacion de componentes
import Navbar from './NavBar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer'

const App = () => {
  return (
    // devolver codigo jsx
    <div className="app" >
      <header className="header">
        <Navbar />
      </header>
      <main className="container">
        <ItemListContainer greeting={'Hola!'}/>
      </main>
    </div>
  )
}

export default App /* exportacion del archivo por defecto */

/* notas: 
SHORCUT rfc
para crear clases css usamos className

*/
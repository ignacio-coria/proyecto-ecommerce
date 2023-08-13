import './App.css';

const App = () => {
let imagen_producto= "../images/remerasprueba.jpg"
let nombre_producto= "remera colorida"
let precio_producto= "$3000"
let descripcion= "remera de colores para uso diario"




  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="../images/iconoropa.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ropa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">quien soy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">no se</a>
        </li>        
        <li className="nav-item">
          <a className="nav-link" href="#">ybue</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='row'>
<div className='col-md-4 offset-md-2'>
  <img src={imagen_producto} alt={nombre_producto} className="img-fluid" />
</div>
<div className='col-md-4'>
  <h1>{nombre_producto}</h1>
  <h3>{precio_producto}</h3>
  <p>{descripcion}</p>
</div>

</div>
</div>
  );
}

export default App;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../contexts";

const Rodape = () => {

  const { handleClick, active } = useContext(globalContext)

  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-white" >

          <li className="nav-item">
              <Link style={{textDecoration: "none", marginLeft: 20, color: "black"}} name="home" className={active == "home" ? 'RodapeText active' : 'RodapeText'} onClick={handleClick} to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link style={{textDecoration: "none", marginLeft: 20, color: "black"}} name="cursos" className={active == "cursos" ? 'RodapeText active' : 'RodapeText'} onClick={handleClick} to="/cursos">Cursos</Link>
            </li>
            <li className="nav-item">
              <Link style={{textDecoration: "none", marginLeft: 20, color: "black"}} name="consultoria" className={active == "consultoria" ? 'RodapeText active' : 'RodapeText'} onClick={handleClick} to="/consultoria">Consultoria</Link>
            </li>


        </ul>
        <p style={{textAlign: "center"}} className="RodapeText RodapeEnd">&copy; 2023 Treina Recife</p>
      </footer>
    </div>
  )
}

export default Rodape;
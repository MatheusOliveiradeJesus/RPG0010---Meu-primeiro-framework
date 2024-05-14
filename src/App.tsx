import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

const App = () => {
  return (
    <Router>
      <header style={{ backgroundColor: "#343a40", padding: "10px" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link to="/" className="navbar-brand" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Lista de Livros</Link>
            <Link to="/dados" className="navbar-brand" style={{ color: "white", textDecoration: "none", fontWeight: "bold", marginLeft: "10px" }}>Cadastro de Livros</Link>
          </div>
        </div>
      </header>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




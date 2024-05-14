import { useState } from 'react';

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [editora, setEditora] = useState('');

  const incluirLivro = async (event) => {
    event.preventDefault();

    const novoLivro = {
      titulo,
      resumo,
      autores: autores.split('\n').map((autor) => autor.trim()),
      editora,
    };

    console.log('Novo livro:', novoLivro);

    setTitulo('');
    setResumo('');
    setAutores('');
    setEditora('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
      <h1>Cadastro de Livro</h1>
      <form onSubmit={incluirLivro}>
        <div style={{ marginBottom: '15px' }}>
          <label>Título:</label><br />
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} style={{ marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Resumo:</label><br />
          <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} style={{ marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Autores (um por linha):</label><br />
          <textarea value={autores} onChange={(e) => setAutores(e.target.value)} style={{ marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Editora:</label><br />
          <input type="text" value={editora} onChange={(e) => setEditora(e.target.value)} style={{ marginTop: '5px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Salvar Novo Livro</button>
      </form>
    </div>
  );
};

export default LivroDados;

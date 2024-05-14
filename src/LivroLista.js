
import React, { useState, useEffect } from "react";

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    const opcoesEditoras = [
        { value: 1, text: "Companhia das Letras" },
        { value: 2, text: "Nova Fronteira" },
        { value: 3, text: "Companhia das Letras" }
    ];

    useEffect(() => {
        const obterLivros = async () => {
            const livrosExemplo = [
                { id: 1, titulo: "Dom Casmurro", resumo: " O clássico de Machado de Assis narra as dúvidas de Bentinho sobre a fidelidade de sua esposa, Capitu.", autores: ["Machado de Assis"], codEditora: 1 },
                { id: 2, titulo: "Grande Sertão: Veredas", resumo: "João Guimarães Rosa leva os leitores em uma jornada pelo sertão brasileiro, explorando questões existenciais através das experiências do jagunço Riobaldo.", autores: ["João Guimarães Rosa"], codEditora: 2 },
                { id: 3, titulo: "Capitães de Areia", resumo: "Jorge Amado retrata a vida dos meninos órfãos que vivem nas ruas de Salvador, destacando suas lutas pela sobrevivência e busca por identidade.", autores: ["Jorge Amado"], codEditora: 3 }
            ];
            setLivros(livrosExemplo);
            setCarregado(true);
        };

        obterLivros();
    }, []);

    const excluirLivro = (id) => {
        const novaLista = livros.filter(livro => livro.id !== id);
        setLivros(novaLista);
    };

    return (
        <main>
            <h1>Lista de Livros</h1>
            {carregado ? (
                <table className="table">
                    <thead style={{ backgroundColor: "#343a40", color: "white" }}>
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Autores</th>
                            <th>Editora</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro, index) => (
                            <tr key={livro.id} style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white" }}>
                                <td>{livro.titulo}</td>
                                <td>{livro.resumo}</td>
                                <td>{livro.autores.join("\n")}</td>
                                <td>{opcoesEditoras.find(opcao => opcao.value === livro.codEditora)?.text}</td>
                                <td>
                                    <button onClick={() => excluirLivro(livro.id)} className="btn btn-danger" style={{ backgroundColor: 'red', color: 'white' }}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Carregando...</p>
            )}
        </main>
    );
};

export default LivroLista;


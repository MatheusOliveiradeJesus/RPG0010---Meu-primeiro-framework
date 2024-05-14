import { Livro } from "../modelo/Livro";

let livros: Array<Livro> = [
  new Livro(1, 1, "Livro A", "Resumo do Livro A", ["Autor 1", "Autor 2"]),
  new Livro(2, 2, "Livro B", "Resumo do Livro B", ["Autor 3"]),
  new Livro(3, 3, "Livro C", "Resumo do Livro C", ["Autor 4", "Autor 5"])
];

export class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigoNovoLivro = livros.reduce((maxCodigo, livro) => Math.max(maxCodigo, livro.codigo), 0) + 1;
    livro.codigo = codigoNovoLivro;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

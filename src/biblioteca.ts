import { Livro } from "./livro";

export class Biblioteca {
    private livros: Array<Livro>;

    constructor() {
        this.livros = [];
    };

    public adicionarLivro(livro: Livro) {
        this.livros.push(livro);
    };

    public removerLivro(titulo: string){
        let quantidade = this.livros.length;
        this.livros = this.livros.filter(l => l.getTitulo().toLowerCase() != titulo);
        return this.livros.length < quantidade;
    };

    public listarLivro() {
        if (this.livros.length == 0) {
            alert('Nenhum livro na lista.');
            return;
        };

        alert(`Foram encontrados ${this.livros.length} livro(s)`);
        this.livros.forEach(l =>
            alert(`${l.getTitulo()} (${l.getAutor()}, ${l.getAno()}) ${l.getPaginas()} páginas`)
        );
    };

    public buscarLivro(titulo: string): Livro | undefined {
        return this.livros.find(l => l.getTitulo().toLowerCase() == titulo);
    };
};

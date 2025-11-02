import { Biblioteca } from "./biblioteca";
import { Livro } from "./livro";

let biblioteca = new Biblioteca();

export function adicionarLivros() {
    let titulo: string = prompt('Digite o titulo do livro:')!;
    let autor: string = prompt('Digite o autor do livro:')!;
    let ano = Number(prompt('Digite o ano:')!);
    let paginas = Number(prompt('Digite a quantidade de páginas:')!);
    let livro = new Livro(titulo, autor, ano, paginas);
    biblioteca.adicionarLivro(livro);
    alert(`livro adicionado com sucesso`);
};

export function removerLivro() {
    let titulo: string = prompt('Digite o titulo do livro :')!;
    let remover = biblioteca.removerLivro(titulo);
    if (remover) {
        alert('Livro removido com sucesso!');
    } else {
        alert('Livro não encontrado!');
    };
};

export function listarLivros() {
    biblioteca.listarLivro();
};

export function buscarLivros() {
    let titulo: string = prompt('Digite o título do ivro')!;
    let livro = biblioteca.buscarLivro(titulo);
    if (livro) {
        alert(` Livro encontrado!\n
          Título: ${livro.getTitulo()}\n
          Autor: ${livro.getAutor()}\n
          Ano: ${livro.getAno()}\n
          Páginas: ${livro.getPaginas()}`);
          
    } else {
        alert('Livro não encontrado!');
    };
};

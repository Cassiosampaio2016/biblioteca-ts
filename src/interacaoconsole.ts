import { Biblioteca } from "./biblioteca";
import { Livro } from "./livro";

let biblioteca = new Biblioteca();

export function adicionarLivros() {
    let titulo: string | null = prompt('Digite o titulo do livro:')!;
    while (titulo == null || titulo.trim() == '') {
        alert('erro! está em branco');
        titulo = prompt('Digite o titulo do livro:')!;
    };

    let autor: string | null = prompt('Digite o autor do livro:')!;
    while (autor == null || autor.trim() == '') {
        alert('erro! está em branco');
        autor = prompt('Digite o autor do livro:')!;
    };

    let ano = Number(prompt('Digite o ano:')!);
    while (isNaN(ano)) {
        alert('erro! por favor, digitar somente numeros');
        ano = Number(prompt('Digite o ano:')!);
    };

    let paginas = Number(prompt('Digite a quantidade de páginas:')!);
    while (isNaN(paginas)) {
        alert('erro! por favor, digitar somente numeros');
        paginas = Number(prompt('Digite a quantidade de páginas:')!);
    };

    let livro = new Livro(titulo, autor, ano, paginas);
    biblioteca.adicionarLivro(livro);
    alert(`livro adicionado com sucesso`);
};

export function removerLivro() {
    let titulo: string | null = prompt('Digite o titulo do livro :')!;
    let livro = biblioteca.buscarLivro(titulo);
    while (titulo == null || titulo.trim() == '') {
        alert('Erro! Por favor, digite o título corretamente.');
        titulo = prompt('Digite o título do livro:');
    };
    if (livro) {
        alert(` Livro\n
          Título: ${livro.getTitulo()}\n
          Autor: ${livro.getAutor()}\n
          Ano: ${livro.getAno()}\n
          Páginas: ${livro.getPaginas()}`);
    };
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
    let titulo: string | null = prompt('Digite o título do ivro')!;
    while (titulo == null || titulo.trim() == '') {
        alert('Erro! Por favor, digite o título corretamente.');
        titulo = prompt('Digite o título do livro:');
    };
    let buscar = biblioteca.buscarLivro(titulo);
    if (buscar) {
        alert(` Livro encontrado!\n
          Título: ${buscar.getTitulo()}\n
          Autor: ${buscar.getAutor()}\n
          Ano: ${buscar.getAno()}\n
          Páginas: ${buscar.getPaginas()}`);
    } else {
        alert('Livro não encontrado!');
    };
};

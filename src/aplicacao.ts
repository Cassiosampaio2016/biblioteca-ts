import { adicionarLivros, buscarLivros, listarLivros, removerLivro } from "./interacaoconsole";

let opcoes : number = 1;

while(opcoes!=0){
    opcoes = Number(prompt('Digite a opção desejada:\n1 - Adicionar livro\n2 - Remover Livro\n3 - Listar livro\n4 - Buscar livro\n0 - Sair'))!;
    switch(opcoes){
        case 1:
            adicionarLivros();
            break;
        case 2:
            removerLivro();
            break;
        case 3:
            listarLivros();
            break;
        case 4:
            buscarLivros();
            break;
        case 0:
            alert('Obrigado por usar nosso sistema');
            break;
        default:
            alert('Opção inválida');
            break;
    };
};
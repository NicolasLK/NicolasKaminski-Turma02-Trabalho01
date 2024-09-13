const Biblioteca = require("../src/Trabalho01Turma02");

describe("Testes da classe Biblioteca", () => {
  let biblioteca;

  beforeEach(() => {
    biblioteca = new Biblioteca();
  });

  beforeEach(() => {
    let livros = [
      { id: 1, titulo: "O Pequeno Príncipe" },
      { id: 2, titulo: "Odisseia e Ilíada, de Homero" },
      { id: 3, titulo: "A arte da guerra, de Sun Tzu" },
      { id: 4, titulo: "Medeia, de Eurípedes" },
      { id: 5, titulo: "Édipo Rei, de Sófocles" },
      { id: 6, titulo: "Kama Sutra, de Mallanaga Vatsyayana" },
      { id: 7, titulo: "Confissões, de Santo Agostinho" },
      { id: 8, titulo: "Inferno, de Dante Alighieri" },
    ];
    let membros = [
      { id: 1, membro: "Lucas" },
      { id: 2, membro: "Erick" },
      { id: 3, membro: "Larissa" },
      { id: 4, membro: "Mario" },
      { id: 5, membro: "José" },
      { id: 6, membro: "Luana" },
      { id: 7, membro: "Leticia" },
      { id: 8, membro: "Tiffani" },
    ];
    biblioteca = new Biblioteca();
    biblioteca.livros = livros;
    biblioteca.membros = membros;
  });

  test("Deve verificar se o livro existe na lista pelo seu titulo", () => {
    const resultado = biblioteca.buscarLivroPorTitulo("O Pequeno Príncipe");
    expect(resultado).toEqual([{ id: 1, titulo: "O Pequeno Príncipe" }]);
  });

  test("Deve verificar se o livro existe na lista pelo seu id", () => {
    const resultado = biblioteca.buscarLivroPorId(4);
    expect(resultado).toEqual({ id: 4, titulo: "Medeia, de Eurípedes" });
  });

  test("Deve verificar a adição de um novo livro", () => {
    biblioteca.adicionarLivro({ id: 9, titulo: "Elon Musk" });
    const resultado = biblioteca.buscarLivroPorTitulo("Elon Musk");
    expect(resultado).toEqual([{ id: 9, titulo: "Elon Musk" }]);
  });

  test("Deve verificar se ocorreu a remoção de um livro", () => {
    biblioteca.removerLivro({ id: 5 });
    const resultado = biblioteca.buscarLivroPorTitulo("Édipo Rei, de Sófocles");
    expect(resultado).toEqual([{ id: 5, titulo: "Édipo Rei, de Sófocles" }]);
  });

  test("Deve listar todos os livros", () => {
    const resultado = biblioteca.listarLivros();
    expect(resultado).toEqual(biblioteca.livros);
  });

  test("Deve retornar a quantidade de livors", () => {
    const resultado = biblioteca.contarLivros();
    expect(resultado).toEqual(8);
  });

  test("Deve adicionar um membro novo na lista", () => {
    biblioteca.adicionarMembro({ id: 9, membro: "Josiane" });
    const resultado = biblioteca.buscarMembroPorId(9);
    expect(resultado).toEqual({ id: 9, membro: "Josiane" });
  });

  test("Deve listar todos os membros da lista", () => {
    const resultado = biblioteca.listarMembros();
    expect(resultado).toEqual(biblioteca.membros);
  });

  test("Deve retornar a quantidade de membros", () => {
    const resultado = biblioteca.contarMembros();
    expect(resultado).toEqual(8);
  });

  test("Deve verificar se ocorreu a remoção de um membro", () => {
    biblioteca.removerMembro({ id: 5 });
    const resultado = biblioteca.buscarMembroPorId(5);
    expect(resultado).toEqual({ id: 5, membro: "José" });
  });
});

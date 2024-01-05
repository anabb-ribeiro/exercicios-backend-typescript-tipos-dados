const usuarios2: {nome: string, idade: number, status: boolean}[] = [
  {
      nome: "Guido",
      idade: 32,
      status: true,
  },
  {
      nome: "Dani",
      idade: 30,
      status: true,
  },
  {
      nome: "João",
      idade: 40,
      status: false,
  },
  {
      nome: "Guilherme",
      idade: 29,
      status: true,
  },
  {
      nome: "Ana",
      idade: 18,
      status: false,
  },
  {
      nome: "José",
      idade: 28,
      status: false,
  },
]

const buscarNome = (lista: {nome: string, idade: number, status: boolean}[], nomeUsuario: string): {nome: string, idade: number, status: boolean}[] | [] => {
  
  let usuarioEncontrado:{nome: string, idade: number, status: boolean}[] ;

  usuarioEncontrado = lista.filter(item => item.nome.includes(nomeUsuario))

    console.log(usuarioEncontrado);
    return usuarioEncontrado;
}

buscarNome(usuarios2, 'Jo');
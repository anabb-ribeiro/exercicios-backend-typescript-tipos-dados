const lista: number[] = [1, 5, 2]

function Tabuada(lista: number[]):string {

  let resultado: string = '';

  lista.forEach(numero => {
    for (let i = 0; i < 10; i++) {
      resultado += ` ${numero} x ${i} = ${numero * i} \n`;
  }
  });

  return resultado;
}

console.log(Tabuada(lista))
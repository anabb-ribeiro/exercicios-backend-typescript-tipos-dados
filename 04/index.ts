
function Etiquetar(produto: {produto:string, lote:number, ano:number, qtd:number}) : string[] {

  let resultado = [];

  if (produto.qtd > 1) {
    for (let i = 1; i < produto.qtd; i++) {
      let code = `${produto.lote}-${produto.ano}-${String(i).padStart(3, "0")}`;

      resultado.push(code);
    } 
  }

  let code = `${produto.lote}-${produto.ano}-00${produto.qtd}`;

  resultado.push(code);

  return resultado

}

console.log(Etiquetar(    {
  produto: 'CPU Dual Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 1
}))

function Soletrar(palavra:string):string {
  let resultado = ""

  for (const letra of palavra) {
    resultado += `${letra}-`
  }

  return resultado 
}

console.log(Soletrar("programador"))
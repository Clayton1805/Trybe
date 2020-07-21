/* // Desafio 11
function generatePhoneNumber(arrayTelefone) {
    // seu código aqui
    if (arrayTelefone.length !== 11){
      return "Array com tamanho incorreto."    
    }else{
      let escrevendoNumero = "";     
      for (let numero in arrayTelefone){
        if (arrayTelefone[numero] < 0 || arrayTelefone[numero] > 9){        
          return "não é possível gerar um número de telefone com esses valores"      
          break;
        }else if (numero === "0"){
          escrevendoNumero += "(" + arrayTelefone[numero];
        }else if (numero === "1"){
          escrevendoNumero += arrayTelefone[numero] + ") ";
        }else if (numero === "6"){
          escrevendoNumero += arrayTelefone[numero] + "-";
        }else{
          escrevendoNumero += arrayTelefone[numero];
        }                     
      } 
      return escrevendoNumero;        
    }
  }
let valor1 = [10, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
let valor2 = "Clayton Miguel";
console.log(generatePhoneNumber(valor1)); */
/* let s = " ";
let n = parseFloat(s);
let teste = n + 2;

console.log(n); */  
// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let coposDeAgua = 0;
  for (let s in bebidas){
    let x = parseFloat(bebidas[s]);
    if(!isNaN(x)){
      coposDeAgua += parseFloat(bebidas[s]);
    }    
  }
  return coposDeAgua + " copos de água";  
}
let valor1 = "1 cerveja";
console.log(hydrate(valor1));
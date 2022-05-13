let bt1Enviar = <HTMLButtonElement>document.getElementById("bt1Enviar");
let bt2Enviar = <HTMLButtonElement>document.getElementById("bt2Enviar");
let bt3Enviar = <HTMLButtonElement>document.getElementById("bt3Enviar");
let bt4Enviar = <HTMLButtonElement>document.getElementById("bt4Enviar");

let resultado = <HTMLParagraphElement>document.getElementById("resultado");

let notas: number[] = [7, 8, 9, 5, 8, 7, 10, 4, 8];
let meses: string [] =["Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let matDesaprobadas: string[] = new Array();

const limiteNota: number = 6;
let mesRespuesta : number = 0;

function materiasDesaprobadas (notas1: number[], meses1: string[], limiteNota:number) {
   let resultadoD : string []= new Array();
   
   for (let indice = 0; indice < notas1.length; indice++) {
     if  notas1 [indice] < limiteNota {
       resultadoD.push(meses1[indice]);
     };
    };
   return (resultadoD);
 };
  
function materiasConMayorNota (notas1: number[]){
  let indiceAux: number = 0;
  
  indiceAux = 0;
  for (let indice = 0; indice < notas1.length; indice++) {
    if  notas1[indice] >= notas1[indiceAux] {
        indiceAux = indice; ;
   };
  };
  return (indiceAux);
};

function materiasConMenorNota (notas1: number[]){
  let indiceAux: number = 0;

  indiceAux = 0;
  for (let indice = 0; indice < notas1.length; indice++) {
    if  notas1[indice] <= notas1[indiceAux] {
      indiceAux = indice;
    };
   };
  return (indiceAux);
};

function promedioNotas (notas1: number[]){
  let promedio: number = 0;
  let suma :number =0;

  for (let indice = 0; indice < notas1.length; indice++) {
     suma = suma + notas1[indice]
   };
   promedio = suma / notas1.length
  return (promedio);
};


bt1Enviar.addEventListener("click", () => {
  console.log ("Los meses desaprobadas");
  console.log(materiasDesaprobadas(notas,meses,limiteNota));
//  resultado.innerHTML = {materiasDesaprobadas(notas,meses,limiteNota)};
 // console.log(resultado.innerHTML);
};

bt2Enviar.addEventListener("click", () => {
  console.log("El mes con menor nota");
  console.log(meses[materiasConMenorNota(notas)]);
 // resultado.innerHTML = `El mes con mayor nota es ${meses[mesRespuesta]}`;
 // console.log(resultado.innerHTML);
};

bt3Enviar.addEventListener("click", () => {
  console.log("El mes con mayor nota");
  console.log(meses[materiasConMayorNota(notas)]);
//  resultado.innerHTML = `El mes con mayor nota es ${meses[mesRespuesta]}`;
//  console.log(resultado.innerHTML);
};

bt4Enviar.addEventListener("click", () => {
  console.log("El promedio");
  console.log(promedioNotas(notas));
//  resultado.innerHTML = `El promedio de las notas ${promedioNotas(notas)}`;
//  console.log(resultado.innerHTML);
};

}

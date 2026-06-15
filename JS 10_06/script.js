let par_impar = [2, 5, 7, 75, 0, 49, 82, -4, 13, 6, 10];
let impares = [];
let pares = [];


par_impar.forEach(function(elemento) {
    if (elemento % 2 === 0) {
        pares.push(elemento);
    }else{
        impares.push(elemento);
    }
});
console.log("Os números pares são: "+pares);
console.log("Os números impares são: "+impares);


let somaTotal = 0;
let elemento = par_impar.length;


for (const par_imparr of par_impar) {
    somaTotal += par_imparr;
}

let media = somaTotal/elemento;
console.log("Média "+media);

//moda



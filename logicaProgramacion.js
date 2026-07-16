let numero1 = 7 //Number(prompt("Ingrese su primer numero:"));
let numero2 = 9 //Number(prompt("Ingrese su segundo numero:"));
let numero3 = 1 //Number(prompt("Ingrese su tercero numero:"));

let ordenar=[]

if(numero1 > numero2){  
    if (numero1>numero3){ 
     //numero 1 es el mayor que 2 y 3 

       if(numero2 >numero3){
         ordenar = [numero1,numero2,numero3]
            //orden 1-2-3
        }else {
          ordenar = [numero1,numero3,numero2]
            //orden 1-3-2
        }
    }
    else {
      // numoro3 es mayor que 1 y 1 es mayor que 2 
      ordenar = [numero3,numero1,numero2]
       // orden 3-1-2
    }
} 
else { 
    //numro 2 es mayor que 1
    if( numero2 > numero3) {
        //numero 2 es mayor que 1 y 3 
        if(numero1>numero3){
            ordenar = [numero2,numero1,numero3]
            //orden 2-1-3
        }else {
            //orden 2-3-1
            ordenar = [numero2,numero3,numero1]
        }
    }
    else { 
     //numero 3 es mayor que 2 y 2 es mayor que 1
     ordenar = [numero3,numero2,numero1]
     // orden 3-2-1
    }
   
}  
console.log (ordenar)

for(let alreves = ordenar.length-1; alreves>=0; alreves--){
 console.log(ordenar[alreves])
 
}


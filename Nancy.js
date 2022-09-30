//ejercicio 1
const sumar = (num1,num2) => num1 + num2;

const suma=sumar(2,3)
console.log('el resultado es: ',suma);

//ejercicio 2

const num=(numero)=>{
    
    if(numero % 2 ===0){
        console.log(`el ${numero} es par`);
    }else{
        console.log(`el ${numero} es impar`);
    }
}
const par=num(238);
console.log(par);

//ejercicio 3
const mayoriaDeEdad=(edad)=>{
    if(edad >=18){
        console.log("puede ingresar al bar");
    }else{
        console.log("no puede ingresar por que es menor de edad");
    }
}
const mayor=mayoriaDeEdad(20);
console.log(mayor);
const menor=mayoriaDeEdad(15);
console.log(menor);

//ejercicio 4
const mostarElementos=[1,2,3,4,5]
const mostrarArray=(lista)=>{
    for (let i=0; i<lista.length; i++) {
        console.log(lista[i]);
    }
}
const verLista=mostrarArray(mostarElementos);
console.log(verLista);


//ejercicio extra 1

const ordena=(lista)=>{
    
    console.log(lista.sort());
}
const numeros=[1,3,2,4,7,6,5]
ordena(numeros)

//ejercicio extra 2
const palindromo=(palabra)=>{
    let invertida=""
    for (let i=palabra.length-1; i>=0; i--){
        invertida += palabra[i];

    } if (palabra===invertida){
        console.log(`la palabra ${palabra} es palindroma`);
    }else{
        console.log(`la palabra ${palabra} no es palindroma`);
    }
}
palindromo('ana')
palindromo('pizza')

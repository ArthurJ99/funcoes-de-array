const numeros = [2,4,6,8,10,12,14,16]

const multiplicarPorTres =(array)=>{
    const triplos =[]
    for(num of array){
        triplos.push(num*3)
    }
    return triplos
}

console.log(multiplicarPorTres(numeros));


const dividirPorDois = (array)=>{
    const metades =[]
    for(num of array){
        metades.push(num/2)
    }
    return metades
}

console.log(dividirPorDois(numeros));
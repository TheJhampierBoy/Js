function conteo(pcontar, pnumero){
    let contar=pcontar
    let numero=pnumero
    let conteor
    while(contar<numero){
        contar++
    if(contar%2==0){
        console.log("es par", contar)
    }else{
        console.log("es impar", contar)
    }
    }
    return(conteor)
    
}
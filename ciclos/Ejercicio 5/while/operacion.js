function conteo(ppares, pimpares, pcontar1, pcontar2){
    let pares=ppares
    let impares=pimpares
    let conteor
    let contar1=pcontar1
    let contar2=pcontar2


while (contar1<= 5){
    contar1++
    
    while (contar2 <= 5 )
    contar2++
     {
        
        let resultado = contar1 * contar2;
        console.log(contar1+"x"+ contar2+ "=" +resultado);

        
        if (resultado % 2 == 0) {
            console.log("buzz");
            pares++;
        } else {
            console.log("bass");
            impares++; 
        }
    }
console.log("Cantidad de números pares: "+pares);
console.log("Cantidad de números impares: "+impares);
}


        return(conteor)
}
function persona(pdiasTrabajados, pvalorDia, psalarioMin, ptransporte) {
    let salario
    let diasTrabajados=pdiasTrabajados
    let valorDia=pvalorDia
    let salarioMin=psalarioMin
    let transporte=ptransporte
    let salud
    let pension 
    let arl 
    let deducible

    salario=diasTrabajados*valorDia
    resultado=salario

    if(salarioMin%2<salario){

        salario=+transporte

        salud=salario*0.12
        pension=salario*0.16
        arl=salario*0.052

        console.log("la salud es" +  salud)
        console.log("la pension es"  + pension)
        console.log("el arl es " + arl)
    }else{
        console.log(salario=salario)
    }if(salarioMin%4<salario){
        
        salarioMin=salario*0.04

        deducible=salud+pension+arl

        salario=deducible

        console.log("el salario es" + salario)
    }else{
        console.log(salario=salario)
    }
}



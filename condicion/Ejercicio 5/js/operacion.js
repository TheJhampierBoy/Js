function edades(pedad1, pedad2, pedad3, panioNac, panioAct) {
    let edadior
    let edad1=pedad1
    let edad2=pedad2
    let edad3=pedad3
    let suma
    let promedio
    let anioNac=panioNac
    let anioAct=panioAct
     
    if(edad1>17){
        console. log("es mayor de edad")
    }
    else{
        console. log ("es menor de edad")
    }

    if(edad2>17){ 
        console. log("es mayor de edad")
    }
    else{
        console. log ("es menor de edad")
    }

    if(edad3>17){
        console. log("es mayor de edad")
    }
    else{
        console. log("es menor de edad")
    }
    suma= edad1+edad2+edad3

    promedio= suma/3
    if(promedio>17){
        console. log("el promedio cumple con la mayoria de edad")
    }
    else{
        console. log("el promedio no cumple con la mayoria de edad")
    }
    return(edadior)
}



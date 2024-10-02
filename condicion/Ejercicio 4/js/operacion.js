function areas(pareaCua1, pareaCua2, pareaCua3, plaCuadrado1, plaCuadrado2, plaCuadrado3) {
    let area
    let areaCua1=pareaCua1
    let areaCua2=pareaCua2
    let areaCua3=pareaCua3
    let laCuadrado1=plaCuadrado1
    let laCuadrado2=plaCuadrado2
    let laCuadrado3=plaCuadrado3
    
    areaCua1= laCuadrado1*laCuadrado1
    areaCua2= laCuadrado2*laCuadrado2
    areaCua3= laCuadrado3*laCuadrado3
    if(areaCua1==areaCua2 & areaCua2==areaCua3 & areaCua3==areaCua1 ){
     console. log("las areas son iguales")
    }
    else{
        if(areaCua1>areaCua2 & areaCua1>areaCua3){
            console. log ("area del cuadrado uno es la mayor")
        }
        else{
            if(areaCua2>areaCua1 & areaCua2>areaCua3){
            console.log("area del cuadrado dos es la mayor")
            }
        else{
            console. log ("area del cuadrado tres es el mayor")
        }  
    }
    }
    return(area)
}

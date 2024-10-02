function conteo(pnumero1, pnumero2){
    let numero1=pnumero1
    let numero2=pnumero2
    let conteor

        for(mult=1; mult<=numero2; mult++){
            result=mult*numero1
            if(result%2==0){
                console.log(numero1 + "x" + mult + "=" + result + "es par")
            }else{
                console.log(numero1 + "x" + mult + "=" + result + "es impar")
            }
        }
        return(conteor)
    
}
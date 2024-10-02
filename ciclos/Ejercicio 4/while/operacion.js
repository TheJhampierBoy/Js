function conteo(pnumero1, pnumero2){
       let mult=0
       let conteor
        let numero1=pnumero1
        let numero2=pnumero2

        while(mult<numero2){
            mult++
            resultado=mult*numero1

            if(resultado%2==0){
                console.log(numero1 + "x" +  mult + "=" + resultado +  "es par")
            }
            else{
                console.log(numero1 + "x" +  mult + "=" + resultado +  "es impar")
            }
         
        }
        return(conteor)
}
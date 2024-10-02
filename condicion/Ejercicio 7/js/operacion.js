function notas(pnota1, pnota2, pnota3) {
        let nota1=pnota1
        let nota2=pnota2
        let nota3=pnota3
        let porcentaje1;
        let porcentaje2;
        let porcentaje3;
        let suma;
        porcentaje1 = nota1*0.20;
        porcentaje2 = nota2*0.35;
        porcentaje3 = nota3*0.45;
        
        suma=porcentaje1+porcentaje2+porcentaje3;


        if(suma>4.5){
            console.log("es superior");
        } else {
            if(suma<= 4.5){
                console.log("es buena");
            } else {
                if(suma<= 3.5){
                    console.log("es media");
                } else{
                    console.log("es mala");
                }
            }
            
        }
        console.log("Porcentaje 1 :"+porcentaje1  +"\n"+ "Porcentaje 2 :"+porcentaje2+"\n"+
        "Porcentaje 3 :"+porcentaje3+"\n suma de porcentajes :"+ suma);
}



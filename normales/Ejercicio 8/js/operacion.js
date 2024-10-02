function persona(pdiasTraba, pvalorDia, psueldo) {
    let pagoTotal
    let diasTraba=pdiasTraba
    let valorDia=pvalorDia
    let sueldo=psueldo

    salario=diasTraba*valorDia
    salud=sueldo*0.12
    pension=sueldo*0.18
    arl=sueldo*0.052
    descuento=salud+pension+arl
    pagoTotal=descuento-sueldo

    return pagoTotal

}
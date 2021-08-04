function mostrar() {
    let nacionalidad,
        resultado,
        edad,
        cepa,
        contadorAlfa = 0,
        contadorDelta = 0,
        contadorBeta = 0,
        contadorTotal = 0,
        contPositivos = 0,
        contNegativos = 0,
        porcentajePositivos = 0,
        porcentajeNegativos = 0,
        mayorCepa,
        acumEdadEx = 0,
        flag = 1,
        contArgDelta = 0;

    for (let i = 0; i < 8; i++) {
        nacionalidad = prompt("ingrese nacionalidad (arg/ex)").toLowerCase();
        while (nacionalidad != "arg" && nacionalidad != "ex") {
            nacionalidad = prompt("invalido, reingrese nacionalidad (arg/ex)").toLowerCase();
        }
        resultado = prompt("dio positivo o negativo?").toLowerCase();
        while (resultado != "positivo" && resultado != "negativo") {
            resultado = prompt("invalido, dio positivo o negativo?").toLowerCase();
        }
        edad = parseInt(prompt("ingrese una edad (entre 18 y 65)"));
        while (isNaN(edad) || edad < 18 || edad > 65) {
            edad = parseInt(prompt("invalido, reingrese una edad (entre 18 y 65)"));
        }
        cepa = prompt("ingrese la cepa (delta, alfa, beta o ninguna)").toLowerCase();
        while (cepa != "delta" && cepa != "alfa" && cepa != "beta") {
            cepa = prompt("invalido, reingrese la cepa (delta, alfa, beta)").toLowerCase();
        }
        while (resultado == negativo && cepa != "ninguna") {
            cepa = prompt("ingrese: ninguna");
        }

        if (cepa == "delta") {
            if (nacionalidad == "arg") {
                contArgDelta++;
            }
            contadorDelta++;
            contPositivos++;
        } else if (cepa == "alfa") {
            contadorAlfa++;
            contPositivos++;
        } else if (cepa == "beta") {
            contadorBeta++;
            contPositivos++;
        } else {
            contNegativos++;
        }
        contadorTotal++;

        if (nacionalidad == "ex" && flag || edad > acumEdadEx) {
            acumEdadEx = edad;

        }
    }
    porcentajePositivos = contPositivos * 100 / contadorTotal;
    porcentajeNegativos = contNegativos * 100 / contadorTotal;
    if (contadorDelta > contadorAlfa && contadorDelta > contadorBeta) {
        mayorCepa = "delta";
    } else if (contadorBeta >= contadorDelta && contadorBeta > contadorAlfa) {
        mayorCepa = "beta";
    } else {
        mayorCepa = "alfa";
    }


document.write("el porcentaje de positivos es " + porcentajePositivos + "<br>");
document.write("el porcentaje de positivos es " + porcentajeNegativos + "<br>");
document.write("la cepa mas encontrada es " + mayorCepa + "<br>");
document.write("la edad del mayor extranjero es " + acumEdadEx + "<br>");
document.write("la cantidad de personas arg con la delta es " + contArgDelta);



}

/* 





*/
function mostrar() {
	let nombre,
		edad,
		vacuna,
		dosis,
		sexo,
		contVacunados = 0,
		acumAmericana = 0,
		acumChina = 0,
		acumRusa = 0,
		contRusa = 0,
		contAmericana = 0,
		contChina = 0,
		promedioRuso = 0,
		flag = 1,
		mujerMayorEdad,
		nombreMayorEdad = "no hubo",
		vacunaMayorEdad = "nada",
		contAmericanaMayores = 0,
		porcentajeMayores = 0,
		contDobleDosis,
		porcentajeDobleDosis = 0,
		vacunaMenosUsada,
		seguir;

	do {
		nombre = prompt("ingrese un nombre (entre 3 y 10 caracteres)").toLowerCase();
		while (nombre.length <= 3 || nombre.length >= 10) {
			nombre = prompt("invalido, reingrese un nombre (entre 3 y 10 caracteres)").toLowerCase();
		}
		edad = parseInt(prompt("ingrese una edad (a partir de 12)"));
		while (isNaN(edad) || edad < 12) {
			edad = parseInt(prompt("invalida, reingrese una edad (a partir de 12)"));
		}

		vacuna = prompt("igrese la vacuna, (rusa, americana o china)").toLowerCase();
		while (edad >= 12 && edad <= 17 && vacuna != "americana") {

			vacuna = prompt("invalido, igrese la vacuna americana").toLowerCase();

		}
		while (vacuna != "rusa" && vacuna != "americana" && vacuna != "china") {
			vacuna = prompt("invalido, reigrese la vacuna, (rusa, americana o china)").toLowerCase();
		}
		contVacunados++;
		dosis = prompt("ingrese que dosis es (p/s)").toLowerCase();
		while (dosis != "p" && dosis != "s") {
			dosis = prompt("invalido, reingrese que dosis es (p/s)").toLowerCase();
		}
		contDobleDosis++;
		sexo = prompt("ingrese sexo (f/m)").toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("invalido, reingrese sexo (f/m)").toLowerCase();
		}
		if (sexo == "f" && flag || edad > mujerMayorEdad) {

			mujerMayorEdad = edad;
			nombreMayorEdad = nombre;
			vacunaMayorEdad = vacuna;
			flag = 0;

		}
		if (vacuna == "americana") {
			acumAmericana += edad;
			contAmericana++;
			if (edad >= 18) {
				contAmericanaMayores++;
			}

		} else if (vacuna == "rusa") {
			acumRusa += edad;
			contRusa++;
		} else {
			acumChina += edad;
			contChina++;
		}

		seguir = prompt("usted desea continuar? (si/no)");
	} while (seguir == "s");

	promedioRuso = acumRusa / contRusa;
	porcentajeMayores = contAmericana * 100 /contAmericanaMayores ;
	porcentajeDobleDosis = contDobleDosis * 100 / contVacunados;




	if (contAmericana < contRusa && contAmericana < contChina) {
		vacunaMenosUsada = "americana";
	}
	else if (contRusa <= contAmericana && contRusa < contChina) {
		vacunaMenosUsada = "rusa";
	}
	else {
		vacunaMenosUsada = "china";
	}

	document.write("el promedio de edad de vacunados con la rusa es " + promedioRuso + "<br>");
	document.write("el nombre de la mujar mayor es " + nombreMayorEdad + " y se vacuno con " + vacunaMayorEdad + "<br>");
	document.write("el procentaje de mayores de edad de los vacunados con la americana es " + porcentajeMayores + "<br>");
	document.write("el procentaje de los de la segunda dosis es " + porcentajeDobleDosis + "<br>");
	document.write("la vacuna menos usada es " + vacunaMenosUsada);


}

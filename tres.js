
function mostrar() {
	let lugar,
		costoDelVuelo,
		cantidadVac,
		maxVacunas,
		desc = 0,
		promedio = 0,
		acumAsia = 0,
		vacunasAsia = 0,
		importeBruto = 0,
		lugarMax,
		flag = 1,
		acumVacunas = 0,
		importeFinal,
		descSolo;


	for (let i = 0; i < 10; i++) {
		lugar = prompt("Ingrese el lugar (asia,europa,usa)").toLowerCase();
		while (!(lugar == 'asia' || lugar == 'europa' || lugar == 'usa')) {
			lugar = prompt("invalido, reIngrese el lugar (asia,europa,usa)").toLowerCase();
		}
		costoDelVuelo = parseInt(prompt("ingrese costo del vuelo, (entre 1 millon y 5 millones de pesos)"));
		while (isNaN(costoDelVuelo) || costoDelVuelo < 1000000 && costoDelVuelo > 5000000) {
			costoDelVuelo = parseInt(prompt("invalido, reingrese el costo del vuelo"));
		}
		cantidadVac = parseInt(prompt(" ingrese Cantidad de vacunas"));
		while (isNaN(cantidadVac) || cantidadVac < 0) {
			cantidadVac = parseInt(prompt("invalido, reingrese Cantidad de vacunas"));
		}
		importeBruto += costoDelVuelo;

		if (flag || cantidadVac > maxVacunas) {
			acumVacunas++;
			maxVacunas = cantidadVac;
			lugarMax = lugar;
			flag = 0;
		}
		if (lugar == 'asia') {
			acumAsia++;
			vacunasAsia += cantidadVac;
		}
	}
	if (maxVacunas > 4000000) {
		descSolo = importeBruto * .3;
		desc = importeBruto - (importeBruto * .3);
		document.write("desc de " + descSolo + " y el importe final con desc es " + desc + "<br>");
	} else if (maxVacunas >= 2000000 && maxVacunas <= 4000000) {
		descSolo = importeBruto * .2;                                                          // punto D
		desc = importeBruto - (importeBruto * .2);
		document.write("desc de " + descSolo + " y el importe final con desc es " + desc + "<br>");
	} else if (maxVacunas < 2000000) {
		document.write("El importe bruto es " + importeBruto + "<br>");
	}
	importeFinal = desc;

	promedio = vacunasAsia / acumAsia;

	document.write("El lugar que envio mayor cantidad de vacunas es: " + lugarMax + "<br>"); // punto A hecho
	document.write("El promedio de vacunas llegadas de asia es: " + promedio + "<br>"); // punto B hecho
	document.write("Total sin descs por gastos de viajes: " + importeBruto + "<br>"); // punto C hecho


}


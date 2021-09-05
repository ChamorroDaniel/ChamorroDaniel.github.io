(function() {
    window.onload = function() {

        let nombre_apellido = document.getElementById("name");
        let fecha_nacimiento = document.getElementById("date");
        let Appaterno = document.getElementById("Paterno");
        let Apmaterno = document.getElementById("Materno");
        let nombre = document.getElementById("nombre");
        let longitud = document.getElementById("longitud");
        let edad = document.getElementById("edad");
        let mes = document.getElementById("mes");
        let botonextraer = document.getElementById("botonextraer");
        let botoncolorear = document.getElementById("botoncolorear");


        function obtenerDatos() {
            //Primero fracionamos las frases de apellidos y nombres

            if (nombre_apellido.value == "") {
                document.getElementById("name").focus();
            } else {
                document.getElementById("date").focus();
            }

            if (nombre_apellido.value !== "" && fecha_nacimiento.value !== "") {

                let palabras = nombre_apellido.value.split(' ');
                //Extraer apellido paterno
                if (palabras[0] == null) {
                    Appaterno.value = "";
                } else {
                    Appaterno.value = palabras[0];
                    document.getElementById("name").value = "";
                }

                //Extraer apellido materno
                if (palabras[1] == null) {
                    document.getElementById("Materno").value = "";
                } else {

                    document.getElementById("Materno").value = palabras[1];
                    nombre_apellido.value = "";
                }
                //Extraer nombre

                if (palabras[2] == null) {
                    document.getElementById("nombre").value = "";
                } else {
                    document.getElementById("nombre").value = palabras[2];
                    nombre_apellido.value = "";
                }

                //Extraer longitud del apellido
                document.getElementById("longitud").value = palabras[0].length + " Letras";

                //Extraer edad
                let anioCumple = document.getElementById("date").value.split('-');
                if (document.getElementById("date").value !== "") {
                    let fechaActual = new Date();
                    let anio_actual = fechaActual.getFullYear();

                    if (anioCumple[0] < anio_actual) {
                        let edad = anio_actual - anioCumple[0];
                        document.getElementById("edad").value = edad + ' Años';
                        document.getElementById("date").value = "";
                    } else {
                        document.getElementById("edad").value = 'Error';
                    }
                }
                // Mes en palabras
                let meses = [""];
                switch (anioCumple[1]) {
                    case "01":
                        meses = ["enero"];
                        break;
                    case "02":
                        meses = ["febrero"];
                        break;
                    case "03":
                        meses = ["marzo"];
                        break;
                    case "04":
                        meses = ["abril"];
                        break;
                    case "05":
                        meses = ["mayo"];
                        break;
                    case "06":
                        meses = ["junio"];
                        break;
                    case "07":
                        meses = ["julio"];
                        break;
                    case "08":
                        meses = ["agosto"];
                        break;
                    case "09":
                        meses = ["septiembre"];
                        break;
                    case "10":
                        meses = ["octubre"];
                        break;
                    case "11":
                        meses = ["noviembre"];
                        break;
                    case "12":
                        meses = ["diciembre"];
                        break;
                }
                document.getElementById("mes").value = meses;
            }
        }

        // Metodos
        botonextraer.addEventListener('click', obtenerDatos, true);
        //Cajas Azules 
        let cajaAzul1 = document.getElementById("color1_1");
        let cajaAzul2 = document.getElementById("color3");
        let cajaAzul3 = document.getElementById("color4");
        let cajaAzul4 = document.getElementById("color5");
        let cajaAzul5 = document.getElementById("color6");
        //Cajas Rojas
        let cajaRojo1 = document.getElementById("color7");
        let cajaRojo2 = document.getElementById("color8");
        let cajaRojo3 = document.getElementById("color9");
        let contador = 0;

     
        function color() {
            if (contador == 0) {
                
                cajaAzul1.classList.add('rojo');
                cajaAzul2.classList.add('rojo');
                cajaAzul3.classList.add('rojo');
                cajaAzul4.classList.add('rojo');
                cajaAzul5.classList.add('rojo');

             
                cajaRojo1.classList.add('azul');
                cajaRojo2.classList.add('azul');
                cajaRojo3.classList.add('azul');
                contador = 1;

            } else {
               
                cajaAzul1.classList.remove('rojo');
                cajaAzul2.classList.remove('rojo');
                cajaAzul3.classList.remove('rojo');
                cajaAzul4.classList.remove('rojo');
                cajaAzul5.classList.remove('rojo');
                
                cajaRojo1.classList.remove('azul');
                cajaRojo2.classList.remove('azul');
                cajaRojo3.classList.remove('azul');
                contador = 0;
            }
        }
        botoncolorear.addEventListener('click', color, true);


    };
})();
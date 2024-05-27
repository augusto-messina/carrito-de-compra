let costoTotal = 0;

function pedirNombre() {
    let nombre = prompt('Ingrese un nombre para entrar a nuestra tienda. ');

    alert("Bienvenido a nuestra tienda online  " + nombre );
}

pedirNombre();

let option;
do {
    option = parseInt(prompt(
        "Elige un producto:\n" +
        "1- Zapatillas Nike Jordan 1 $229.999\n" +
        "2- Vans Knu Skool $189.000\n" +
        "3- Buzo Jordan Essentials $144.999\n" +
        "4- Short Tiro $34.299\n" +
        "5- Bolso Puma x The Ragged $89.499\n" +
        "0- Finalizar Compra"
    ));

    switch (option) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            let cantidad = parseInt(prompt(
                "Ingresa la cantidad de productos que deseas comprar"
            ));
            let costoProducto = 0;

            switch (option) {
                case 1:
                    costoProducto = 229.999;
                    break;
                case 2:
                    costoProducto = 189.999;
                    break;
                case 3:
                    costoProducto = 144.999;
                    break;
                case 4:
                    costoProducto = 34.299;
                    break;
                case 5:
                    costoProducto = 89.499;
                    break;
            }

            costoTotal += cantidad * costoProducto;
            alert("Producto(s) añadido(s) al carrito.");
            break;

        case 0:
            break;

        default:
            alert("Opción inválida.");
            break;
    }
} while (option !== 0);

if (costoTotal > 0) {
    alert("Gracias por su compra. El costo total de su compra es: $" + costoTotal);
} else {
    alert("Gracias por visitar nuestra tienda online.");
}
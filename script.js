let costoTotal = 0;

function pedirNombre() {
    let nombre = prompt('Ingrese un nombre para entrar a nuestra tienda. ');

    alert("Bienvenido a nuestra tienda online  " + nombre );
}

pedirNombre();

const productos = [
    { nombre: "zapatillas nike:", precio: 200 },
    { nombre: "buzo levis:", precio: 569 },
    { nombre: "zapatillas vans:", precio: 989 },
    { nombre: "bolso puma:", precio: 890 },
    { nombre: "pantalon adidas:", precio: 340 },
];
let carrito = []

let seleccion = prompt("desea comprar algun producto de nuestra tienda?")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("desea comprar algun producto de nuestra tienda?")
}

if(seleccion == "si"){
    alert("estos son los productos de nuestra tienda.")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " +
    producto.precio + " Є");
    alert(todoslosProductos.join(" \n"))
}else if (seleccion== "no"){
    alert("gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto al carrito")
    let precio = 0

    if(producto == "zapatillas nike" || producto == "zapatillas vans" || producto == "buzo levis"
        || producto == "bolso puma" || producto == "pantalon adidas"){
        switch(producto) {
            case "zapatillas nike":
            precio = 200;
            break;
            case "zapatillas vans":
            precio = 989;
            break;
            case "buzo levis":
            precio = 569;
            break;
            case "bolso puma":
            precio = 890;
            break;
            case "pantalon adidas":
            precio = 340;
            break;
            default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades quieres llevar"))

    carrito.push({producto, unidades, precio})
    }else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando?")
    while(seleccion === "no"){
        alert("gracias por la compra! hasta pronto.")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}\n unidades: ${carritoFinal.unidades}\n total a pagar por podructos es: ${carritoFinal.unidades * carritoFinal.precio}Є\n`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`el total a pagar por su compra es: ${total}Є`)
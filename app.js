// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Error: nombre vacio, reintentar");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("El nombre ya esta en la lista, usar otro");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Deben haber al menos dos participantes para el sorteo.");
        return;
    }

    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoAleatorio);
}

function mostrarResultado(amigoElegido) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoElegido}`;
}

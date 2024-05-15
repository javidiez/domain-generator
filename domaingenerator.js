let pronoun = [];
let adj = [];
let noun = [];
let ext = []; // Array vacío para almacenar los valores



function agregarValores() {
        // Verificar si todos los campos de entrada son válidos
        const camposValidos = document.querySelectorAll('input[type="text"]:valid');
    
        // Si no todos los campos son válidos, mostrar un mensaje de error y detener la ejecución
        if (camposValidos.length !== 12) {
            alert('Por favor, complete todos los campos de entrada.');
            return;
        }
        
    if (pronoun.length < 2 && adj.length < 2 && noun.length < 2) {
    const campo1 = document.getElementById('campo1').value;
    const campo2 = document.getElementById('campo2').value;
    const campo3 = document.getElementById('campo3').value;
    const campo4 = document.getElementById('campo4').value;
    const campo5 = document.getElementById('campo5').value;
    const campo6 = document.getElementById('campo6').value;
    const campo7 = document.getElementById('campo7').value;
    const campo8 = document.getElementById('campo8').value;
    const campo9 = document.getElementById('campo9').value;
    const campo10 = document.getElementById('campo10').value;
    const campo11 = document.getElementById('campo11').value;
    const campo12 = document.getElementById('campo12').value;
    pronoun.push(campo1, campo2); // Agregar los valores al array
    adj.push(campo3, campo4, campo5, campo6); // Agregar los valores al array
    noun.push(campo7, campo8, campo9); // Agregar los valores al array
    ext.push(campo10, campo11, campo12); // Agregar los valores al array
    console.log('Valores actualizados:', pronoun);
    console.log('Valores actualizados:', adj);
    console.log('Valores actualizados:', noun);
    console.log('Valores actualizados:', ext);
        // Llamar a la función domainGenerator y actualizar el contenido del elemento HTML
        document.getElementById("dominios").innerHTML = domainGenerator(pronoun, adj, noun, ext);
    } else {
        console.log('Ya se han agregado dos valores al array.');
    }
}


let part1 = "";
let part2 = "";
let part3 = "";
let domain = "";
let count = 1;

function domainGenerator(pron, adj, noun, ext) {
    for (let i = 0; i < pron.length; i++) {
        part1 = pron[i];
        for (let a = 0; a < adj.length; a++) {
            part2 = part1 + adj[a];
            for (let n = 0; n < noun.length; n++) {
                part3 = part2 + noun[n];
                for (let e = 0; e < ext.length; e++) {
                    if(part1.length != "" || part2.length != "" || part3.length != ""){
                    domain += `<tr><td class="p-3 display-5"><b>${count++}</b> - ${part3}${ext[e]}</td></tr>`;
                }
            }
            }
        }
    }
    return domain;
}

function refreshPage() {
    // Usamos location.reload() para recargar la página
    location.reload();
}
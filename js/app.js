const listaCreditos = document.querySelector('#listado-creditos');
const btnGuardarCredito = document.querySelector('#guardar-credito');

//datos
const nombres = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const monto = document.querySelector('#monto');
const descripcion = document.querySelector('#descripcion');

//var contador 
let cont = 2;
//fecha
var today = new Date();


window.addEventListener('load',IniciaApp);



function IniciaApp(e){

    e.preventDefault();
    consultarJson();

}

function guardarCredito(){

    const newCredito = {
        id: cont,
        nombres: nombres.value,
        telefono: telefono.value,
        descripcion: descripcion.value,
        monto:monto.value,
        fecha:today.toLocaleDateString('en-US'),
        saldo: monto.value,
        estado:true,
        abonos: []
    };
    cont++;
    console.log(newCredito);
}

function consultarJson(){

    fetch('./data/books.json')
    .then(result => result.json())
    .then(resp => mostrarCreditos(resp))

}

function mostrarCreditos(resp){

   resp.forEach( data => {
    
    const {nombre, telefono, fecha, monto, saldo} = data;

    let tr = document.createElement('tr');
    tr.className = 'align-middle';
    tr.innerHTML = `
        <td>${nombre}</td>
        <td>${telefono}</td>
        <td>${fecha}</td>
        <td>${monto}</td>
        <td>${saldo}</td>
        <td class="d-flex">
        <a class="me-5" href="#">
            <img src="img/Editar.png" alt="Editar credito">
        </a>
        <a href="#">
            <img src="img/Detalle.png" alt="Detalle credito">
        </a>
        </td>
    `;
    listaCreditos.appendChild(tr);
   });


}
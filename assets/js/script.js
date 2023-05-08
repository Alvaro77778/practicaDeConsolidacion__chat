const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})


function apareceChat(){
    let mainsecciones = document.querySelector(".mainSecciones");

    
    mainsecciones.classList.add("mainSeccionesActive");
    mainseccionesActive = document.querySelector('.mainSeccionesActive');

}




function desapareceSeccion(){

    let mainSeccion = document.querySelector(".mainSecciones")
    mainSeccion.classList.remove("mainSeccionesActive");
}


function desapareceTextBold(){
    let nombreRodrigo = document.getElementById('activeRodrigo');
    nombreRodrigo.style.fontWeight = 'normal';

    let fechaRodrigo = document.getElementById('tamañoFechaRodrigo');
    fechaRodrigo.style.fontWeight = 'normal';

    let iconoMensajeRodrigo = document.getElementById('iconoMensaje2');
    iconoMensajeRodrigo.style.display = 'none';

    let iconoCheck = document.getElementById('iconoCheckMensaje');
    iconoCheck.style.display = 'block';
    
}

function desapareceTextBoldRenata(){
    let nombreRenata = document.getElementById('activeRenata');
    nombreRenata.style.fontWeight = 'normal';

    let fechaRenata = document.getElementById('tamañoFechaRenata');
    fechaRenata.style.fontWeight = '100';

    let iconoMensaje = document.getElementById('iconoMensaje');
    iconoMensaje.style.display = 'none';

    let iconoCheck = document.getElementById('iconoCheckMensajeRenata');
    iconoCheck.style.display = 'block';

    
}

function presionaDropdown(){
    let dropdown = document.getElementById('dropdown');
    dropdown.style.display = 'block';
}

function desapareceDropdown(){
    let dropdown = document.getElementById('dropdown');
    dropdown.style.display = 'none';
}
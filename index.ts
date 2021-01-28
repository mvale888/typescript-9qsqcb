// Import stylesheets
import './style.css';
import {ArticuloFamilia} from "./articulosfamilias"
import {ArticulosFamilias } from './articulosfamilias.coleccion';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('index');

let paginaActual=0;
let ultimaPagina =0;

//function MostrarTablaArticulosFamiliasSinPaginar(){
  //let tabla: HTMLTableElement = <HTMLTableElement>document.getElementById("cuerpoTabla");
  //tabla.innerHTML="";
  //ArticulosFamilias.forEach (art => { tabla.innerHTML += `<tr><td>${art.IdArticuloFamilia}</td><td>${art.Nombre}</td></tr>` ;
  //});
//}

//MostrarTablaArticulosFamiliasSinPaginar();

function MostrarTablaArticulosFamiliasPaginada(){
  let tabla: HTMLTableElement = <HTMLTableElement>document.getElementById("cuerpoTabla");
  tabla.innerHTML="";
  ultimaPagina= (ArticulosFamilias.length /4) -1;
  ArticulosFamilias.slice(paginaActual * 4, (paginaActual*4)+4).forEach (art => { tabla.innerHTML += `<tr><td>${art.IdArticuloFamilia}</td><td>${art.Nombre}</td></tr>` ;
  });
}


 function CargarArticuloFamilia (){
 //Obtengo los elemntos desde el DOM
  let nombre = <HTMLInputElement>document.getElementById("txtNombre");
  let IdArticuloFamilia = <HTMLInputElement>document.getElementById("txtIdArticuloFamilia");

//Creo un Objeto para Agregarlo al ARRAY
let articuloNew : ArticuloFamilia ={
  Nombre: nombre.value,
  IdArticuloFamilia: Number (IdArticuloFamilia.value)
}

 // Agrego al array el objeto recién creado
 ArticulosFamilias.push(articuloNew);
MostrarTablaArticulosFamiliasPaginada();
nombre.value="";
IdArticuloFamilia.value="";
 }

function Siguiente(){
  if (paginaActual < ultimaPagina)
  paginaActual ++;
  MostrarTablaArticulosFamiliasPaginada();
}
function Anterior (){
  if (paginaActual > 0)
  paginaActual ++;
  MostrarTablaArticulosFamiliasPaginada();
}

document.getElementById("btnCargar").addEventListener("click", CargarArticuloFamilia);
document.getElementById("btnSiguiente").addEventListener("click", Siguiente);
document.getElementById("btnAnterior").addEventListener("click", Anterior);
MostrarTablaArticulosFamiliasPaginada();
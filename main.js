// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget

// funcion para randomizar las monedas
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function mover_moneda(item, destino) {
    if (item.includes("moneda-")){
        document.getElementById(destino).innerHTML += "<div id=\"" + item + "\" class=\"moneda_"+ destino +"\">🪙</div> \n";
    } else {
        console.log("Error")
    }

}

function QuitarItem(list,item) {
    for(let i = 0;i < list.length; i++){

        if(list[i] == item){
            let list_temp = list.splice(i, 1)
        }
        else{}
    }
}

function quitar_moneda(list,item) {

    if (item.includes("moneda-")){
        document.getElementById(item).outerHTML = "";   // quitar del body

        // Arreglar eliminar item del array
        QuitarItem(list,item)
        console.log("Error");
    }
}

function reintentar() {
    location.reload();
}

function comparar(){

    let sum_left = 0;
    let sum_right = 0;

    for(let i = 0; i < left.length; i++){
        sum_left += monedas[left[i]];
    }
    for(let j = 0; j < right.length; j++){
        sum_right += monedas[right[j]];
    }

    if(contador < 2)
        if(sum_left == sum_right && (sum_left != 0 || sum_right != 0)) {
            for(let mon_i = 0; mon_i < right.length; mon_i ++){
                document.getElementById(right[mon_i]).style.background = "blue";
                azules.push(right[mon_i]);
                QuitarItem(rojos, right[mon_i]);
                QuitarItem(verdes, right[mon_i]);

            }
            for(let mon_i = 0; mon_i < left.length; mon_i ++){
                document.getElementById(left[mon_i]).style.background = "blue";
                azules.push(left[mon_i]);
                QuitarItem(rojos, left[mon_i]);
                QuitarItem(verdes, left[mon_i]);
            }

            contador++;
            document.getElementById("contador").innerHTML = contador;

        } else if(sum_left > sum_right && (sum_left != 0 && sum_right != 0)){

            for(let mon_i = 0; mon_i < right.length; mon_i ++){
                document.getElementById(right[mon_i]).style.background = "green";
                verdes.push(right[mon_i]);
                QuitarItem(rojos, right[mon_i]);
                QuitarItem(azules, right[mon_i]);
            }
            for(let mon_i = 0; mon_i < left.length; mon_i ++){
                document.getElementById(left[mon_i]).style.background = "red";
                rojos.push(left[mon_i]);
                QuitarItem(verdes, left[mon_i]),
                QuitarItem(azules, left[mon_i]);
            }

            contador++;
            document.getElementById("contador").innerHTML = contador;

        } else if(sum_left < sum_right && (sum_left != 0 && sum_right != 0)) {
            for(let mon_i = 0; mon_i < right.length; mon_i ++){
                document.getElementById(right[mon_i]).style.background = "red";
                rojos.push(right[mon_i]);
                QuitarItem(verdes, right[mon_i]);
                QuitarItem(azules, right[mon_i]);
            }
            for(let mon_i = 0; mon_i < left.length; mon_i ++){
                document.getElementById(left[mon_i]).style.background = "green";
                verdes.push(left[mon_i]);
                QuitarItem(rojos, left[mon_i]);
                QuitarItem(azules, left[mon_i]);
            }

            contador++;
            document.getElementById("contador").innerHTML = contador;

        } else {
            console.log("Nada");
        }
    else{
        console.log("No tienes mas intentos")
    }
}

function validar(){

    if(monedas[resultado[0]] == 1.1 && contador == 2){
        document.getElementById("resultado").innerHTML = "GANASTE"
        document.getElementById("resultado").style.visibility = "visible";
    } else if(monedas[resultado[0]] != 1.1 && contador == 2){
        document.getElementById("resultado").style.visibility = "visible";
    } else {

    }
}

function skip(){
    document.getElementById("problema").style.visibility = "hidden";
}


function Mantener_Color(){
    for(let azul_i = 0; azul_i < azules.length; azul_i ++){
        document.getElementById(azules[azul_i]).style.background = "blue";
    }
    for(let verde_i = 0; verde_i < verdes.length; verde_i ++){
        document.getElementById(verdes[verde_i]).style.background = "green";
    }
    for(let rojo_i = 0; rojo_i < rojos.length; rojo_i ++){
        document.getElementById(rojos[rojo_i]).style.background = "red";
    }
}

// los valores por defecto de las monedas, todos iguales
var monedas = {"moneda-1" : 1,"moneda-2" : 1,"moneda-3" : 1 ,"moneda-4" : 1,"moneda-5" : 1,"moneda-6" : 1,"moneda-7" : 1,"moneda-8" : 1,"moneda-9" : 1};

// mezclar monedas
monedas["moneda-" + random(1, 9)] += 0.1

var left = [];
var right = [];
var banca = [];
var resultado = [];
var contador = 0;
var verdes = [];
var rojos = [];
var azules = [];

for(let i = 1; i<10; i++){
    document.getElementById("banca").innerHTML += "<div id=\"moneda-"+ i +"\" class=\"moneda_banca\">🪙</div> \n"

    banca.push("moneda-" + i);
}

// Click Izquierdo
document.body.onclick = (event) => {
    const element = event.target.getAttribute("id");
    const element_class = event.target.getAttribute("class");
    

    if(contador == 2 && element.includes("moneda-") && resultado.length < 1){
        if(element_class == "moneda_left"){
            resultado.push(element);
            quitar_moneda(left, element);
            mover_moneda(element, "validador");
        } else if(element_class == "moneda_right") {
            resultado.push(element);
            quitar_moneda(right, element);
            mover_moneda(element, "validador");
        } else if(element_class == "moneda_banca") {
            resultado.push(element);
            quitar_moneda(banca, element);
            mover_moneda(element, "validador");
        } else {

        }

    } else if(element_class == "moneda_validador" && resultado.length == 1){
        banca.push(element);
        quitar_moneda(resultado, element);
        mover_moneda(element,"banca");

    } else if (element_class == "moneda_left"){
        banca.push(element);
        quitar_moneda(left,element)
        mover_moneda(element,"banca");

    } else if (element_class == "moneda_banca"){
        left.push(element);
        mover_moneda(element,"left");
        quitar_moneda(banca, element);

    } else {

    }

    Mantener_Color()
};

// Click Derecho
document.oncontextmenu = (event) => {
    const element = event.target.getAttribute("id");
    const element_class = event.target.getAttribute("class");

    if(element_class == "moneda_right"){
        banca.push(element);
        quitar_moneda(right,element);
        mover_moneda(element,"banca");

    } else if (element_class == "moneda_banca"){
        right.push(element)
        mover_moneda(element, "right");
        quitar_moneda(banca, element);

    } else {

    }

    Mantener_Color()

    return false
};

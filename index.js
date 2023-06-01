function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var monedas = {"moneda-1" : 1,"moneda-2" : 1,"moneda-3" : 1 ,"moneda-4" : 1,"moneda-5" : 1,"moneda-6" : 1,"moneda-7" : 1,"moneda-8" : 1,"moneda-9" : 1};

monedas["moneda-" + random(1, 9)] += 0.1

var monton_1 = [];
var monton_2 = [];
var monton_3 = [];

var sum_monton_1 = 0;
var sum_monton_2 = 0;

for ( let i = 1; i<= 9;i+= 3){
    monton_1.push("moneda-" + (i).toString());
    monton_2.push("moneda-" + (i + 1).toString());
    monton_3.push("moneda-" + (i + 2).toString());
}

for(let j = 0; j < 3; j++){
    sum_monton_1 += monedas[monton_1[j]];
    sum_monton_2 += monedas[monton_2[j]];
}

if(sum_monton_1 === sum_monton_2){
    if(monedas[monton_3[0]] == monedas[monton_3[1]]){
        console.log("La moneda mas pesada es la", monton_3[2])
    }
    else if(monedas[monton_3[0]] < monedas[monton_3[1]]){
        console.log("La moneda mas pesada es la", monton_3[1])
    }
    else{
        console.log("La moneda mas pesada es la", monton_3[0])
    }

}else if(sum_monton_1 > sum_monton_2) {
    if(monedas[monton_1[0]] == monedas[monton_1[1]]){
        console.log("La moneda mas pesada es la", monton_1[2])
    }
    else if(monedas[monton_1[0]] < monedas[monton_1[1]]){
        console.log("La moneda mas pesada es la", monton_1[1])
    }
    else{
        console.log("La moneda mas pesada es la", monton_1[0])
    }
}else{
    if(monedas[monton_2[0]] == monedas[monton_2[1]]){
        console.log("La moneda mas pesada es la", monton_2[2])
    }
    else if(monedas[monton_2[0]] < monedas[monton_2[1]]){
        console.log("La moneda mas pesada es la", monton_2[1])
    }
    else{
        console.log("La moneda mas pesada es la", monton_2[0])
    }
}

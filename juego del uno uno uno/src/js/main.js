//declaracion de las variables del juego
let cartasSobrantes = document.getElementById("imagen");
let tomarCarta = document.getElementById("tomar carta");
let dejarCarta = document.getElementById("dejar carta");


let distanciaCarta = 1
let cartaCambiante = new Cartas()
var cartaAlAzar = new Array(2);
cartaAlAzar[0] = cartaCambiante
cartaAlAzar[0].tipoCarta = Math.floor(Math.random()*4)
cartaAlAzar[0].numeroCarta = Math.floor(Math.random()*15)
cartaAlAzar[0].asignarCarta(cartaAlAzar[0].tipoCarta,cartaAlAzar[0].numeroCarta,distanciaCarta,'none');

var numeroCartaG
var ColorCartaG
var cartaEspecialG
var direccionCartaG
let espacioRecorrido = 350

let contador = 0
let jugador1 = 7
let jugador2 = 7

let colorCarta
let numeroCartaLista


let tablero = new Jugador();

let mano1 = new Array(3)
let mano2 = new Array(3)

let temple = new Array(5)

for(let i = 0; i < temple.length; i++){
    
    temple[i] = new Array(13)
}



/**
 * @description asignacion de la cantidad de cartas que hay en el juego
 */
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 13; j++){
        if(i <=3 && j == 0){
            temple[i][j] = 1
        }else if(i <=3 && (j > 0 && j <= 12)){
            temple[i][j] = 2
        }else{
            temple[i][j] = 0
        }


        
    }
}
temple[4][0] = 4
temple[4][1] = 4
/**
 * 
 * @param {entero} tipoCarta 
 * @param {entero} numeroCarta 
 * @description elimina las malas prcticas
 * @returns true or false
 */
function verificarCartas(tipoCarta,numeroCarta){
    if(tipoCarta <=3 && numeroCarta < 13){
        if(temple[tipoCarta][numeroCarta] != 0){
            temple[tipoCarta][numeroCarta]--
            return true
        }else{
            return false
        }
    }else{
        if(numeroCarta == 13){
            if(temple[4][0] != 0){
                temple[4][0]--
                return true
            }else{
                return false
            }
        }else if(numeroCarta == 14){
            if(temple[4][1] != 0){
                temple[4][1]--
                return true
            }else{
                return false
            }
        }
        
    }
}





console.log(temple);
/**
 * do while
 * llena el arreglo con objetos de la clase cartas
 * a su vez aaigna valores
 * 
 * @return {array} objetos
 */
function repartirCartas(mano,contador,distanciaCarta,mostrarCartas,n = 7){

    do{
        
        let carta2 = new Cartas();
        
        carta2.tipoCarta = Math.floor(Math.random()*4)
        carta2.numeroCarta = Math.floor(Math.random()*15)
        let verificar = verificarCartas(carta2.tipoCarta,carta2.numeroCarta)
        if(verificar == true){
            carta2.asignarCarta(carta2.tipoCarta,carta2.numeroCarta,distanciaCarta,mostrarCartas);
            distanciaCarta+=50
            mano[contador] = carta2
        }else{
            contador--
        }
        
        
        
        contador++
    }while(contador != n)
    
    
}
/**
 * 
 * @param {entero} n   operacion
 * @param {char} display    muestra o no la imagen
 * @returns 
 */
function tomarCartaT(n,display = 'inline'){
    let verificar
    do{
        let carta2 = new Cartas();
        
        carta2.tipoCarta = Math.floor(Math.random()*4)
        carta2.numeroCarta = Math.floor(Math.random()*15)
        verificar = verificarCartas(carta2.tipoCarta,carta2.numeroCarta)
        if(verificar == true){
            carta2.asignarCarta(carta2.tipoCarta,carta2.numeroCarta,espacioRecorrido,display);
            
            espacioRecorrido+=50
            if(n == 1){
                return carta2;
            }else if(n==2){
                return carta2.imagen.src
            }
        }
        
    }while(verificar != true)
        
        
}

function turnos(cartasSobrantes,jugadorNumeroCartas,jugador,mano){
    if(cartaAlAzar[0].numeroCarta == 10){
        alert("alert turno bloqueado jugador dos")
        cartaAlAzar[0] = tomarCartaT(1,'none')
        return
    }else if(cartaAlAzar[0].numeroCarta == 12){
        alert("el castigo tomar dos cartas para el jugador 2")
        mano2.push(tomarCartaT(1,'none'))
        mano2.push(tomarCartaT(1,'none'))
        cartaAlAzar[0] = tomarCartaT(1,'none')
        return
    }else if(cartaAlAzar[0].numeroCarta == 14){
        alert("el castigo tomar cuatro cartas y pierdes turno jugador 2")
        mano2.push(tomarCartaT(1,'none'))
        mano2.push(tomarCartaT(1,'none'))
        mano2.push(tomarCartaT(1,'none'))
        mano2.push(tomarCartaT(1,'none'))
        cartaAlAzar[0] = tomarCartaT(1,'none')
        
        return
    }
    let aux = new Array()
    for(let i=0;i<mano.length;i++){
        if(((mano[i].tipoCarta == cartaAlAzar[0].tipoCarta) || (mano[i].numeroCarta == cartaAlAzar[0].numeroCarta)) && 
            (mano[i].especialTarejeta == false && cartaAlAzar[0].especialTarejeta == false)){
                let buscar = setTimeout(() => {
                    cartaAlAzar[0] = mano[i]
                    console.log(cartaAlAzar)
                    
                    mano[i].imagen.style.display = 'none'
                    cartasSobrantes.src = mano[i].imagen.src
                    mano.splice(i,1)
                    alert("jugador " + jugador + " puso una carta")
                    jugadorNumeroCartas--
                    
                    //refrecar(mano)
                    
            }, 1000);
            console.log(aux)
            return mano[1]
        }else if(mano2[i].numeroCarta == 10){
            cartaAlAzar[0] = mano2[i]
            return
        }else if(mano2[i].numeroCarta == 12){
            cartaAlAzar[0] = mano2[i]
            return
        }else if(mano2[i].numeroCarta == 14){
            cartaAlAzar[0] = mano2[i]
            return
        }
    }
    
    
    if(cartaAlAzar[0].numeroCarta <=9){
        alert("el jugador 2 no tinee una carta similar")
        mano2.push(tomarCartaT(1,'none'))
        

        console.log("turno")
        console.log(mano)
    }else{
        
            
        
    }
    return 
    
}
function dejarCartaMi(mano1,numeroCartaLista){
    if(cartaAlAzar[0].numeroCarta == 10){
        alert("alert turno bloqueado")
        cartaAlAzar[0] = tomarCartaT(1,'none')
        cartasSobrantes.src = cartaAlAzar[0].imagen.src
        return
    }else if(cartaAlAzar[0].numeroCarta == 12){
        alert("el castigo tomar dos cartas")
        mano1.push(tomarCartaT(1,'none'))
        mano1.push(tomarCartaT(1,'none'))
        cartaAlAzar[0] = tomarCartaT(1,'none')
        return
    }else if(cartaAlAzar[0].numeroCarta == 14){
        alert("el castigo tomar cuatro cartas y pierdes turno")
        mano1.push(tomarCartaT(1,'none'))
        mano1.push(tomarCartaT(1,'none'))
        mano1.push(tomarCartaT(1,'none'))
        mano1.push(tomarCartaT(1,'none'))
        cartaAlAzar[0] = tomarCartaT(1,'none')
        cartasSobrantes.src = cartaAlAzar[0].imagen.src
        return
    }
    if((mano1[numeroCartaLista].tipoCarta == cartaAlAzar[0].tipoCarta) ||
        (mano1[numeroCartaLista].numeroCarta == cartaAlAzar[0].numeroCarta)
        ){
        cartaAlAzar[0] = mano1[numeroCartaLista]
        cartasSobrantes.src = mano1[numeroCartaLista].imagen.src
        mano1[numeroCartaLista].imagen.style.display = 'none'
        mano1.splice(numeroCartaLista,1)
        
        jugador1--
    }else{
        if(mano1[numeroCartaLista].numeroCarta == 10){
            cartaAlAzar[0] = mano1[numeroCartaLista]
            return
        }else if(mano1[0].numeroCarta == 12){
            cartaAlAzar[0] = mano1[numeroCartaLista]
            return
        }else if(cartaAlAzar[0].numeroCarta == 14){
            
        }
        alert("la carta no cuenta con las espesificaciones dadas")
    }
}


cartasSobrantes.addEventListener('click', function (e) {
    
    turnos(cartasSobrantes,jugador2,2,mano2)
    cartasSobrantes.src = cartaAlAzar[0].imagen.src
    
})
tomarCarta.addEventListener('click',function(){
    mano1.push(tomarCartaT(1))
    jugador1++
})

dejarCarta.addEventListener('click', function () {
    
    
    alert("en que posicion se encuentra la carta que quiere dejar")
    numeroCartaLista = prompt("en que posicion se encuentra la carta que quiere dejar")
    dejarCartaMi(mano1,numeroCartaLista-1)
    
    
})


repartirCartas(mano1,contador,distanciaCarta,'inline')
repartirCartas(mano2,contador,distanciaCarta,'none')

console.log(mano1)
console.log(mano2)

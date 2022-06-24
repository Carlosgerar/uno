
class Cartas{
    constructor(){
        this.imagen = document.createElement("img");
        this.color;
        this.especialTarejeta = false
        this.tipoCarta
        this.numeroCarta
        this.ancho = (2*44)
        this.largo = (2*58)
        
        
    }
    
    /**
     * 
     * @param {entero} ramdom 
     * @param {entero} numeroCarta 
     * @param {decimal} distanciaCarta
     * @description asigna los valores de src, posicion, y valores de la carta
     */
    asignarCarta(ramdom,numeroCarta,distanciaCarta,display = 'none'){
        if(numeroCarta >9){
            this.especialTarejeta = true
        }
        if(numeroCarta <=12){
            if(ramdom == 0){

                this.imagen.src = "src/img/amarillo"+ numeroCarta + ".png"; 
                this.color = "Amarillo"
            }
            else if(ramdom == 1){
                this.imagen.src = "src/img/azul"+ numeroCarta + ".png"
                this.color = "Azul"
            }
            else if(ramdom == 2){
                this.imagen.src = "src/img/rojo"+ numeroCarta + ".png"
                this.color = "rojo"
            }
            else if(ramdom == 3){
                this.imagen.src = "src/img/verde"+ numeroCarta + ".png"
                this.color = "verde"
            }
        }
        if(numeroCarta == 13){
            this.imagen.src = "src/img/especialtoma4.png"
            this.tipoCarta = 4
                this.color = "negro"
        }else if(numeroCarta == 14){
            this.imagen.src = "src/img/especialtoma41.png"
            this.tipoCarta = 5
                this.color = "negro"
        }
                
                
            
        
        this.imagen.style.top =  (window.innerHeight-this.largo)+ "px"
        this.imagen.style.left =  ((300+distanciaCarta)-this.ancho)+ "px"
        this.imagen.style.width = this.ancho+"px";
        this.imagen.style.height = this.largo + "px";
        this.imagen.style.position = "absolute"
        this.imagen.style.textAlign = "center"
        this.imagen.style.display = display
        document.body.appendChild(this.imagen)
        
    }
    
}
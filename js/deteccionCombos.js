const up    = "ArrowUp";
const down  = "ArrowDown";
const left  = "ArrowLeft";
const right = "ArrowRight";


class Combo{
    constructor(codigo){
        this.chain = codigo;
        this.chainIndex = 0;
        this.keyName;
        this.timeOut = 1000;
        this.timeLastKeyPress;
        console.log(this.chain.lenght);
    }

    keyPress(tecla){
        let result   = false;
        this.keyName = tecla;
        let time     = new Date();
        time         = time.getTime();

        if(time > this.timeLastKeyPress + this.timeOut){
            this.chainIndex = 0;
        }


        if(this.chainIndex < this.chain.length){
            if(this.chain[this.chainIndex] == this.keyName){
                if(this.chainIndex < this.chain.length - 1){
                    this.chainIndex++;
                }else{
                    result = true;
                    this.chainIndex = 0;
                }
            }else{
                this.chainIndex = 0;
            }
        }

        this.timeLastKeyPress = time;
        return result;
    }
}

var codigoKonami = new Combo ([up,up,down,down,left,right,left,right]);
var song         = new Audio('resources/media/sounds/8-bit-powerup-6768.mp3');
var helloThere   = new Audio('resources/media/sounds/obi-wan-hello-there.mp3');
helloThere.play();

//Trigger
document.addEventListener('keydown', function(event){
    let keyName = event.key;
    if(codigoKonami.keyPress(keyName) == true){
        song.play();
        alert('Código Konami Activado');
    }
});
class  Aviao {
    constructor(marca, turbina) {
        // estas 2 variam de aviao para aviao
        this.marca=marca; // dierentes marcas
        this.turbina=turbina; // diferentes numero de turbinas
        
    }
}
// para fins demontrativos, sabemos que o aviao tem 2 asas e isso nao muda
const asas=Symbol()
Aviao.prototype[asas]=2
// assim a minha classe passa esta valor para todos que ela instancia

// aplicando
const tucano=new Aviao("tucano",4);
console.log(tucano);
/**
 * Aviao
marca
: 
"tucano"
turbina
: 
4
[[Prototype]]
: 
Object
Symbol()
: 
2
constructor
: 
class Aviao
[[Prototype]]
: 
Object
 * 
* asas vai ser uma constante de 2 sempre
 */

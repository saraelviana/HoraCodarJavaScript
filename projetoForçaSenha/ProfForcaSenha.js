/**
 * tudo envolve o input
 */
const passwordInput=document.querySelector('#passwordInput');
/*chamo a função */
/**notar toda vez que o usuario digita */
passwordInput.addEventListener("input", function(){/** cria uma função que vai captar o digito do usuario */
    const password=this.value;/**pega o valor digitado */

    const strengthIndicador=document.querySelector("#password-strength-indicador");

    const strengthText=document.querySelector("#password-strength-text");

    const strength={
    0:"muito fraca",
    1:"fraca",
    2:"moderada",
    3:"forte",
    4:"muito forte",

};
/**fazer o calculo da forla da senha baseado nos requesitos ja definidos */
let score=0;
if(password.length>=8)score++;/** length.. comprimento */
if(password.match(/[a-z]/))score++;/**letras minuscylas */
if(password.match(/[A-Z]/))score++;/**letras maiusculas */
if(password.match(/[0-9]/))score++;/**numeros */
if(password.match(/[^a-zA-Z0-9]/))score++;/**caracteres especiais */


/**mostrar a forca da senha */
/**calculo da porcentagem , pq a largura vai crescer em porcentagem */
const width=(score/4)*100;/**pq o score maximo é 4 */
strengthIndicador.style.width=`${width}%`;

switch (score) {
    case 1:
        strengthIndicador.style.backgroundColor="red";
        
        break;
    case 2:
        strengthIndicador.style.backgroundColor="#ffbl4d";
        break
    case 3:
        strengthIndicador.style.backgroundColor="fff176";
        break;
    case 4:
        strengthIndicador.style.backgroundColor="green";
        break

    default:
        strengthIndicador.style.backgroundColor="transparent";
        break;
}

if (password.length > 0) {
    strengthText.innerHTML=`força da senha: ${strength[score]}`;
    }else{
        strengthText.innerHTML="";
    }

});





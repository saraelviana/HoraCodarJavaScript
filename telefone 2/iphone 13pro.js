/*vamos ter que selecionar os elementos que eu quero */
/*1 - o botao , vamos selecionar todos eles*/
const buttons = document.querySelectorAll("#image-picker li")
/*2 - a imagem para trocar ela, aqui e so 1 elemento a ser escolido */
const image = document.querySelector("#product-image")

/*agora vamos colocar 1 evento para cada um botoes */
buttons.forEach((btn)=>{
    /*aqui dentro vamos botar a função */
    btn.addEventListener("click", (e) => {
        /* (e)=> como o Evento ,vou saber quem estou selecionando*/

        console.log("e");

        buttons.forEach((btn)=>{
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target

        const id = button.getAtribute("id");

        button.querySelector(".color").classList.add("selected");
        
        image.classList.add("changing");

        image.setAttribute("src", `img/iphone_blue_${id}.jpg`) ;/*aqui troca a img */

        setTimeout(()=>{/**o efeito  */
            image.classList.toggle("changing");/** vai removar a class present */
        },200)
    });
})/*vamos trabalhar o loop , vou chamar de = btn..*/
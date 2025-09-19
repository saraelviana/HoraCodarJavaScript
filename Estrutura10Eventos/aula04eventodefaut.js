/**
 * muitas elementos tem açoes padrao no html. como links que nos levam a outras paginas, podemosremover isso com o metodo
 * - preventDefault
 */
const a = document.querySelector("a")
a.addEventListener("click",(e)=>{
    // assim nao vai haver redirecionamento, ele vai executar o codigo que esta aqui
    e.preventDefault();
    console.log("pegadinha do malandro")
    // deu erro 
});
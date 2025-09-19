const myTitle=document.querySelector("#my-title")
myTitle.addEventListener("click",(event) => {
    console.log(event);
    console.log(event.offsetx);
    console.log(event.pointerType);
    console.log(event.target);
});
// deu erro ate aqui

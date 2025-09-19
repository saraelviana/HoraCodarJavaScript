const p1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve(10);
    },3000);// 3 segundo -- podemos usar isso para aguardar uma resposta de 1 servidor 
});

const p2= Promise.resolve(10+10);

const p3= new Promise((resolve, reject) => {
    if(30>10){
        resolve(30);
    }else{
        reject("erro");
    }
});

/**
 * 
 */
Promise.all([p1,p2,p3]).then((values)=>console.log(values));
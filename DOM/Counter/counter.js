let decrement=document.getElementById("Decrement")
let const1=document.getElementById("const1")
let increment=document.getElementById("Increment")
let span =document.getElementById("reset")
decrement.addEventListener("click",function(){
    const1.innerText=Number(const1.innerText)-1;
})
increment.addEventListener("click",function(){
    const1.innerText=Number(const1.innerText)+1;
})
span.addEventListener("click",function(){
    const1.innerText=Number(0);
})
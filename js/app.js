const h1 = document.querySelector("h1")
const btn = document.querySelector("button")


async function traerTexto(){
    try{
        fetch("http://www.boredapi.com/api/activity/")
        .then(res=>res.json())
        .then(data=>{
            console.log(data.activity)
            h1.innerHTML = data.activity;
})
    }catch(err){
        console.log("Error")
    }
}


traerTexto()

btn.addEventListener("click",()=>{
    traerTexto()
})
const d= document,
inputBar= d.querySelector(".searchInput");


let allProducts= Array.from(document.querySelectorAll(".card.my-3"));
let prContainer= document.querySelector(".products-container");
let cardTemplate= document.getElementById("cardProduct");

const productos = [
  {
    nombre: "Producto 1",
    precio: 19.99,
    imagen: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  },
  {
    nombre: "Producto 2",
    precio: 29.99,
    imagen: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  },
  {
    nombre: "Producto 3",
    precio: 9.99,
    imagen: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  },
];


const searchingProduct= (text)=>{

let inputText= text.toLowerCase();
let foundMatch= false;

prContainer.innerHTML="";
for(let i=0; i<allProducts.length; i++){
    let productInLoop= allProducts[i].querySelector("h5").textContent.toLowerCase();
    
    if(inputText== "" || productInLoop.includes(inputText)){
        
        prContainer.appendChild(allProducts[i])
         foundMatch= true
    }

}
if(!foundMatch){
    prContainer.innerHTML= "<h4> No encontrado </h4>"
}
}


d.addEventListener("keydown", (e)=>{
    if(e.target=== inputBar){
        searchingProduct(e.target.value)
    }
})
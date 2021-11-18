let pessoas = ["Monique", "Jaque", "Gamita", "Luis", "Lucas Rodrigues","Perveso","Poly", "Felipe"];

function sortear(){
    let np = pessoas.length;
    let ns = Math.floor(Math.random()* np);
    document.getElementById("d").innerHTML = pessoas[ns];

}
function myFunction(){
  var a= document.getElementById("name1").value;

  var targetDiv = document.getElementById("pok1").style.display="block";


const apiData = {
    url: "https://pokeapi.co/api/v2/",
    type: 'pokemon',
    id: a,
}
const {url,type,id} = apiData

const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
.then((data)=> data.json())
.then((pokemon) => genetrateHtml(pokemon))

const genetrateHtml = (data) => {
    console.log(data);
    const html = `
    <div class="name">${data.name}</div>
    <img src = ${data.sprites.front_default}>
    <div class="details">
        <span>Height: ${data.height}</span>
        <span>Weight: ${data.weight}</span>
    </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}

}
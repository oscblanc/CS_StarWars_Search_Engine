let characters = JSON.parse(file).results // [{}, {}, {}, ...]
let input_character_name = document.getElementById("input_character_name")
let container = document.getElementById("container")


function search_character_button_click() {
  console.log("presionaste Buscar")
  
  let character = search_character(input_character_name.value)
  console.log(character)
  
  container.innerHTML = `
    <div class="menuContainer">
      <span class="cardText">Name: </span><span>${character.name}</span><br />
      <span class="cardText">Birthday: </span><span>${character.birth_year}</span><br />
      <span class="cardText">Gender: </span><span>${character.gender}</span><br />
      <span class="cardText">Height: </span><span>${character.height}</span><br />
      <span class="cardText">Hair color: </span><span>${character.hair_color}</span><br />
      <span class="cardText">Skin color: </span><span>${character.skin_color}</span><br />
    </div>
  `
}

function search_character(character_name) {
  let longitud_cadena = character_name.length
  for(let i = 0;i<characters.length;i++) {
    if(characters[i].name.substring(0,longitud_cadena) == character_name) {
       return characters[i]
    }
  }
}

class Character {
  constructor(name, gender) {
    
    
  }
  
  obtener_iniciales() {
    
  }
  
}
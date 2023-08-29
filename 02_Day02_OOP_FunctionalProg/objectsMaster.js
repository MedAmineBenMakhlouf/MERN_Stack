const pokémon = Object.freeze(
[{ id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// ID divisible by 3
const divisible3List = pokémon.map( p => p.id %3 ==0 );
// console.log("ID divisible by three:",divisible3List);

//fire Type
let fireTypePokemon = pokémon.filter(p => (p.types).includes("fire"))
// console.log("Fire type Pokemons:",fireTypePokemon)

//more then one type

let moreThenOneType = pokémon.filter(p => (p.types).length>1)
// console.log("More then One type Pokemons:",moreThenOneType)

//Just Names
// console.table((pokémon),["name"]);

let pokemonNames = pokémon.map( p => p.name)
// console.log("Names of Pokemons:",pokemonNames)

//names and ids
const idsPokemon = pokémon.filter(pokemon => pokemon.id > 99);
const pokemonWithNames = idsPokemon.map(pokemon => pokemon.name);
// console.log("Names of Pokemons ids greater then 99:",pokemonWithNames)

//Only Type poison
const onlyOneType = pokémon.filter(p=>(p.types).length==1).filter(pokemon => (pokemon.types).includes("poison"))

console.log('Poison Pokemon:',onlyOneType)

const secondflying = pokémon.filter(p => p.types[1]=="flying").map(pokemon => pokemon.types[0])
// console.log('Fly Second Pokemon:',flyfirsttype)

// normal type
const onlyOneNormalType = pokémon.filter(p=>(p.types).length==1)
const normalPokemon = onlyOneNormalType.filter(pokemon => (pokemon.types).includes("normal")).length;

// console.log('counter normal Pokemon:',normalPokemon)






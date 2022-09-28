
const link = "https://pokeapi.co/api/v2/pokemon/"
//const link = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=00"

export function listaAPI() {
        return fetch(link)
                .then((resultado) => resultado.json())
                .then((resultado) => (resultado.results))
}

export function listaAPItitulo() {
        return fetch(link)
                .then((resultado) => resultado.json())
}

export function listaAPIpagina(data) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${data}`)
                .then((resultado) => resultado.json())
                .then((resultado) => resultado.results)
}

export function listaPaginador(data) {

        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${data}`)
                .then((resultado) => resultado.json())
}



// export function lista() {
//     return fetch(link)
//         .then((resultado) => resultado.json())
//         .then ((ra) => {console.log(ra)
//         const {next: x} = ra;
//         console.log (x)})
        // .then((resultado) => (resultado.results))
        // .then(r => console.log(r))
//}

// export async function lista () {
//     const base = await fetch (link);
//     const resultado = await base.json();
//     return console.log(resultado.name)
// }

// backup funcionando antes de implementar localStorage

/*
const link = "https://pokeapi.co/api/v2/pokemon/"
//const link = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=00"

export function listaAPI() {
        return fetch(link)
                .then((resultado) => resultado.json())
                .then((resultado) => (resultado.results))
}

export function listaAPItitulo() {
        return fetch(link)
                .then((resultado) => resultado.json())
}

export function listaAPIpagin(data) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${data}`)
                .then((resultado) => resultado.json())
                .then((resultado) => resultado.results)
}

export function lpagina(data) {
        
        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${data}`)
                .then((resultado) => resultado.json())
                //.then((resultado) => {
                       // let x = resultado.next.substr(-11, 2);
                      //  let y = resultado.previous.substr(-11, 2);
                //})
}
*/

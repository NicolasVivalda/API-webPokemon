import {
    listaAPI,
    listaAPItitulo,
    listaAPIpagina,
    listaPaginador,
} from './fuenteAPI.js'

export function listarPokemones() {

    cargarPaginaInicio();

    document.querySelector("#paginas").addEventListener("click", (e) => {
        let marca = e.target;
        let numeroPagina = marca.textContent;
        let data = 0;
        const $items = document.querySelector(".page-item.active");

        function estadoPrevious() {
            if (document.querySelectorAll(".page-item.active")[0].textContent !== ("1" || "58") &
            document.querySelectorAll(".page-item.disabled").length !== 0) {
                document.querySelector(".page-item.disabled").classList.remove("disabled");
            }

                        if ((document.querySelectorAll(".page-item.active")[0].textContent === "2" & numeroPagina === "Previous") ||
                (document.querySelectorAll(".page-item.active")[0].textContent === "1" & document.querySelectorAll(".page-item.disabled").length === 0)) {
                document.querySelector("#anterior.page-item").classList.add("disabled");
            }

            if ((document.querySelectorAll(".page-item.active")[0].textContent === "57" & numeroPagina === "Next") ||
                document.querySelectorAll(".page-item.active")[0].textContent === "58") {
                document.querySelector("#siguiente.page-item").classList.add("disabled");
            }

            // if (document.querySelectorAll(".page-item.active")[0].textContent === "1") {
            //     document.querySelector("#anterior.page-item").classList.add("disabled");
            // }
            // if (document.querySelectorAll(".page-item.active")[0].textContent === "58") {
            //     document.querySelector("#siguiente.page-item").classList.add("disabled");
            // }
        }
        if (numeroPagina === "Previous") {

            listaPaginador((document.querySelector(".page-item.active").textContent - 1) * 20)
                .then(r => {
                    data = r.previous.substr(-11, 2);

                    ocultarLista();
                    cargarPokemones(data);
                    document.querySelectorAll("li")[(document.querySelector(".page-item.active").textContent) - 1].classList.add("active")
                    document.querySelectorAll(".page-item.active")[1].classList.remove("active")
                })

        }
        else {
            data = ((numeroPagina - 1) * 20);
        }

        if (numeroPagina === "Next") {

            listaPaginador((document.querySelector(".page-item.active").textContent - 1) * 20)
                .then(r => {
                    data = r.next.substr(-11, 2);

                    ocultarLista();
                    cargarPokemones(data);
                    document.querySelectorAll("li")[(Number(document.querySelector(".page-item.active").textContent)) + 1].classList.add("active")
                    document.querySelectorAll(".page-item.active")[0].classList.remove("active")

                })
        }

        if ($items.length !== 0 & marca.textContent !== "Next" & marca.textContent !== "Previous") {
            document.querySelector(".page-item.active").classList.remove("active");
            e.path[1].classList.add("active")
        }

        if (numeroPagina !== "Next" & numeroPagina !== "Previous") {

            ocultarLista();
            cargarPokemones(data)
            
        }

        estadoPrevious();
    })
}


function ocultarLista() {
    let listaAnterior = document.querySelectorAll(`.list-group-item.list-group-item-action`);

    listaAnterior.forEach((listaActual) => listaActual.remove("list-group-item list-group-item-action"));
    document.querySelector("#nav-tabContent").className = "ocultar"
}

function cargarPokemones(data) {
    return listaAPIpagina(data).then((r) => {

        (r).sort().forEach(r => {
            let nombrePokemon = r.name;
            fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
                .then((resultado) => resultado.json())
                .then(r => {
                    let nombre = document.createElement("a");
                    nombre.className = "list-group-item list-group-item-action"
                    nombre.role = "tab";
                    nombre.id = `${nombrePokemon}-list`
                    nombre.textContent = nombrePokemon;
                    nombre.href = `#${nombrePokemon}`;
                    nombre.setAttribute("aria-controls", nombrePokemon);

                    nombre.addEventListener("click", () => {
                        const $item = document.querySelectorAll(".list-group-item.list-group-item-action.active");

                        if ($item.length !== 0) {
                            document.querySelector(".list-group-item.list-group-item-action.active").classList.remove("active");
                            document.querySelector(`#${nombrePokemon}-list`).classList.add("active");
                        }
                        document.querySelector("#nav-tabContent").className = "tab-content";
                        document.querySelector("#foto").setAttribute("src", `${r.sprites.front_default}`);
                        document.querySelector("#lista-habilidad").textContent = `Habilidad principal: ${r.abilities[0].ability.name}`;
                        document.querySelector("#lista-movimientos").textContent = `Q movimientos: ${r.moves.length}`;
                        document.querySelector("#lista-id").textContent = `El ID es: ${r.id}`;
                        document.querySelector("#lista-experiencia").textContent = `Nivel de experiencia: ${r.base_experience}`;
                        document.querySelector("#lista-altura").textContent = `Altura: ${r.height}`
                        document.querySelector("#lista-peso").textContent = `Peso: ${r.weight}`
                    })
                    document.querySelector("#list-tab").appendChild(nombre);
                })

        })
    })
}

export function actualizarTitulo() {
    return listaAPItitulo().then((r) => {
        document.querySelector("#titulo").textContent = `En total hay ${r.count} pokemones, selecciona uno para conocerlo:`
    })
}

function cargarPaginaInicio() {
    document.querySelector("#anterior.page-item").classList.add("disabled");
    cargarPokemones("0")
}

// backup funcionando antes de implementar localStorage
/*
import {
    listaAPI,
    listaAPItitulo,
    listaAPIpagin,
    lpagina,
} from './fuenteAPI.js'

export function listarPokemones() {

    cargarPaginaInicio();

    document.querySelector("#paginas").addEventListener("click", (e) => {
        let marca = e.target;
        let numeroPagina = marca.textContent;
        let data = 0;
        const $items = document.querySelector(".page-item.active");

        function estadoPrevious() {
            if (document.querySelectorAll(".page-item.active")[0].textContent !== ("1" || "58") &
            & document.querySelectorAll(".page-item.disabled").length !== 0) {
                document.querySelector(".page-item.disabled").classList.remove("disabled");
            }

                        if ((document.querySelectorAll(".page-item.active")[0].textContent === "2" & numeroPagina === "Previous") ||
                (document.querySelectorAll(".page-item.active")[0].textContent === "1" & document.querySelectorAll(".page-item.disabled").length === 0)) {
                document.querySelector("#anterior.page-item").classList.add("disabled");
            }

            if ((document.querySelectorAll(".page-item.active")[0].textContent === "57" & numeroPagina === "Next") ||
                document.querySelectorAll(".page-item.active")[0].textContent === "58") {
                document.querySelector("#siguiente.page-item").classList.add("disabled");
            }

            // if (document.querySelectorAll(".page-item.active")[0].textContent === "1") {
            //     document.querySelector("#anterior.page-item").classList.add("disabled");
            // }
            // if (document.querySelectorAll(".page-item.active")[0].textContent === "58") {
            //     document.querySelector("#siguiente.page-item").classList.add("disabled");
            // }
        }
        if (numeroPagina === "Previous") {

            lpagina((document.querySelector(".page-item.active").textContent - 1) * 20)
                .then(r => {
                    data = r.previous.substr(-11, 2);

                    ocultarLista();
                    cargarPokemones(data);
                    document.querySelectorAll("li")[(document.querySelector(".page-item.active").textContent) - 1].classList.add("active")
                    document.querySelectorAll(".page-item.active")[1].classList.remove("active")
                })

        }
        else {
            data = ((numeroPagina - 1) * 20);
        }

        if (numeroPagina === "Next") {

            lpagina((document.querySelector(".page-item.active").textContent - 1) * 20)
                .then(r => {
                    data = r.next.substr(-11, 2);

                    ocultarLista();
                    cargarPokemones(data);
                    document.querySelectorAll("li")[(Number(document.querySelector(".page-item.active").textContent)) + 1].classList.add("active")
                    document.querySelectorAll(".page-item.active")[0].classList.remove("active")

                })
        }

        if ($items.length !== 0 & marca.textContent !== "Next" & marca.textContent !== "Previous") {
            document.querySelector(".page-item.active").classList.remove("active");
            e.path[1].classList.add("active")
        }

        if (numeroPagina !== "Next" & numeroPagina !== "Previous") {

            ocultarLista();
            cargarPokemones(data)
            
        }

        estadoPrevious();
    })
}


function ocultarLista() {
    let listaAnterior = document.querySelectorAll(`.list-group-item.list-group-item-action`);

    listaAnterior.forEach((listaActual) => listaActual.remove("list-group-item list-group-item-action"));
    document.querySelector("#nav-tabContent").className = "ocultar"
}

function cargarPokemones(data) {
    return listaAPIpagin(data).then((r) => {

        (r).sort().forEach(r => {
            let nombrePokemon = r.name;
            fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
                .then((resultado) => resultado.json())
                .then(r => {
                    let nombre = document.createElement("a");
                    nombre.className = "list-group-item list-group-item-action"
                    nombre.role = "tab";
                    nombre.id = `${nombrePokemon}-list`
                    nombre.textContent = nombrePokemon;
                    nombre.href = `#${nombrePokemon}`;
                    nombre.setAttribute("aria-controls", nombrePokemon);

                    nombre.addEventListener("click", () => {
                        const $item = document.querySelectorAll(".list-group-item.list-group-item-action.active");

                        if ($item.length !== 0) {
                            document.querySelector(".list-group-item.list-group-item-action.active").classList.remove("active");
                            document.querySelector(`#${nombrePokemon}-list`).classList.add("active");
                        }
                        document.querySelector("#nav-tabContent").className = "tab-content";
                        document.querySelector("#foto").setAttribute("src", `${r.sprites.front_default}`);
                        document.querySelector("#lista-habilidad").textContent = `Habilidad principal: ${r.abilities[0].ability.name}`;
                        document.querySelector("#lista-movimientos").textContent = `Q movimientos: ${r.moves.length}`;
                        document.querySelector("#lista-id").textContent = `El ID es: ${r.id}`;
                        document.querySelector("#lista-experiencia").textContent = `Nivel de experiencia: ${r.base_experience}`;
                        document.querySelector("#lista-altura").textContent = `Altura: ${r.height}`
                        document.querySelector("#lista-peso").textContent = `Peso: ${r.weight}`
                    })
                    document.querySelector("#list-tab").appendChild(nombre);
                })

        })
    })
}

export function actualizarTitulo() {
    return listaAPItitulo().then((r) => {
        document.querySelector("#titulo").textContent = `En total hay ${r.count} pokemones, selecciona uno para conocerlo:`
    })
}

function cargarPaginaInicio() {
    document.querySelector("#anterior.page-item").classList.add("disabled");
    cargarPokemones("0")
}
*/
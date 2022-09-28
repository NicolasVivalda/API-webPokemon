import {
    listarPokemones,
    actualizarTitulo,
} from './ui.js'


export function inicializar() {
    actualizarTitulo();
    listarPokemones();
}

inicializar();

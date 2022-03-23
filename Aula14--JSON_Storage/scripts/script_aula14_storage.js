function armazenaObjetoUsuarioNoStorage(objetoRecebido) {
    let objetoUsuarioEmJson = JSON.stringify(objetoRecebido);
    localStorage.setItem(1, objetoUsuarioEmJson );
}

function buscaObjetoUsuarioNoStorage() {
    let objetoUsuarioCapturado = localStorage.getItem(1);
    return JSON.parse(objetoUsuarioCapturado);
}
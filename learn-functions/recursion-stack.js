let videosAssistidos = 0;
let deixouLike = true;

function verificarInscricao() {
    if (videosAssistidos >= 3) {
        subscribe()
    } else {
        videosAssistidos++
        verificarInscricao()
    }
}

verificarInscricao();
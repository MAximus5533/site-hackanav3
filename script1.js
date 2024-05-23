
function redirecionar() {
    
    const listaEsportes = ["futebol", "volei", "tenis de mesa"]
    
    
    const esporte = document.getElementById('esporteInput').value.toLowerCase();
    
    
    if (listaEsportes.includes(esporte)) {
       
        const url = `${esporte}.html`;

       
        window.location.href = url;
    } else {
        alert('Não foi possivel concluir sua solicitação.');
    }
}
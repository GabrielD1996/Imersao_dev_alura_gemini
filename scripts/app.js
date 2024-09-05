function pesquisarMoto(){

let divResultado = document.getElementById("container-cards");

let conteudoDiv = "";

for (let dado of motos){
    conteudoDiv +=
        `
        <div class="item-resultado">
            <div class="item-texts">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">
                Para conhecer mais sobre esta moto, sendo somente uma moto, clique abaixo:
                </p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
            <div class="item-img">
                <img src="${dado.imagem}" alt="" />
            </div>
        </div>
       
        `
};

divResultado.innerHTML = conteudoDiv;

}

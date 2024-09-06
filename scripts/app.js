function pesquisarMoto(){

let divResultado = document.getElementById("container-cards");

let campoPesquisa = document.getElementById("campo-pequisa").value

campoPesquisa = campoPesquisa.toLowerCase()

if(!campoPesquisa){
    divResultado.innerHTML = 
    `
    <div class="item-resultado">
        <div class="item-texts">
            <h3>Digite a cima qual moto deseja</h3>
            <h2>Motos ja cadastradas:</h2>
            <ul >
                <li>Harley-davidson Sportster Iron 883</li>
                <li>Honda CG 160</li>
                <li>Suzuki Hayabusa</li>
                <li>Honda XRE 300</li>
                <li>BMW GS 1250</li>
                <li>Honda Biz 125</li>
                <li>Yamaha Fazer 250</li>
                <li>Honda PCX</li>
                <li>Yamaha NMax 160</li>
                <li>Honda CB 500F</li>
                <li>Yamaha Lander 250</li>
                <li>Honda CBR 650R</li>
                <li>Dafra Horizon 250</li>
                <li>Shineray Jet 50</li>
                <li>Honda Pop 110i</li>
            </ul>
        </div>
    </div>
    `
    return;  // Interrompe a execução do código aqui
} 

let conteudoDiv = "";
let titulo = "";
let descricao = "";

for (let dado of motos){  
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
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
}
if(!conteudoDiv){
    conteudoDiv = 
    `
     <div class="item-resultado">
            <div class="item-texts">
                <h2>Não encontramos essa pessoa :/ <br> Digo... Moto.</h2>
                <p class="descricao-meta">Caso queira sugerir uma moto para desvendaromos a personalidade juntos, entre em contato atraves do discord...</p>
            </div>
        </div>
    `
}
divResultado.innerHTML = conteudoDiv;

}

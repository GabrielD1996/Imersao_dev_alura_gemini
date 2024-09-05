
# Projeto: E se as Motos Fossem Pessoas?

Este projeto foi desenvolvido durante a **Imersão Dev Alura**, com o objetivo de criar uma interface interativa e divertida que compara motos populares do Brasil a pessoas, atribuindo-lhes personalidades únicas e humorísticas.

## Funcionalidades

- Pesquisar motos populares e visualizar descrições humorísticas que as comparam a pessoas.
- Exibir informações como nome, descrição, imagem e link para mais detalhes de cada moto.
- Interface simples e responsiva com animações de fundo em vídeo.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do site.
- **CSS3**: Estilos e design responsivo.
- **JavaScript (ES6)**: Lógica da aplicação para pesquisar e exibir as motos.
- **GitHub Pages**: Hospedagem do projeto.

## Estrutura do Projeto

- `index.html`: Página principal com a barra de pesquisa, o layout e o fundo em vídeo.
- `style.css`: Arquivo de estilo responsável pelo design e animações.
- `scripts/dados.js`: Contém a base de dados com as motos, cada uma com título, descrição, imagem e link.
- `scripts/app.js`: Função de pesquisa que exibe os resultados de acordo com a pesquisa do usuário.

### Base de Dados

A base de dados contém 10 motos populares no Brasil, com descrições humorísticas que comparam as motos a pessoas. Aqui está um exemplo da estrutura de um item da base de dados:

```javascript
{
    titulo: "Honda Biz 125",
    descricao: "A Honda Biz 125 é a tiazinha da galera, sempre pronta pra te salvar daquele aperto. Precisa de uma carona? Ela te leva, cheia de sacolas de mercado ou até levando a galera inteira pra festa...",
    imagem: "./images/honda-biz-125.webp",
    link: "https://www.honda.com.br/motos/cub/biz-125"
}
```

## Como Funciona

1. O usuário digita o nome da moto que deseja pesquisar no campo de busca.
2. Ao clicar no botão **Pesquisar**, a função `pesquisarMoto()` é acionada.
3. A função varre a base de dados e exibe no site as informações da moto correspondente, incluindo descrição, imagem e um link para mais detalhes.

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/GabrielD1996/projeto-motos-pessoas.git
```

2. Abra o arquivo `index.html` em qualquer navegador para visualizar o projeto.

## Contribuições

Sinta-se à vontade para enviar *pull requests* ou abrir *issues* para melhorias.

---

**Desenvolvido por**: [Gabriel D.](https://github.com/GabrielD1996)  
**Ano**: 2024

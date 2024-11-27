# -Site_Uniesp ![Uniesp](uniesp.jpg)

<h2>Introduçãp:</h2>
<p>
Documentação referente ao projeto SITE_UNIESP_2024_2 , onde sera aplicado a criação de um site usando o framework react. Nesse realatorio, possuira a seguinte estrutura:
Começaremos com o desenvolvimento, abordando a maneira que foi estruturado, em seguida vai pras dependencias  que foram utilizadas na aplicação, dai vamos para a explicação dos componets, e pages. Dessa forma, vamos finalizar com a App.js que é responsavel pelas rotas e estrutura de renderização.
</p>

<h2>
Desenvolvimento
</h2>
<p>
    <h4>
        Estrutura:
    </h4> 
    <p>
        A estrutura do projeto, ficou da seguinte maneira: <br/>
        Na raiz do projeto possuimos 3 arquivos, data, public e src
        data: onde esta localizado o nosso banco de dados fack, e possuira um File db.json onde estara localizado os json onde sera simulado a interação com um banco de dados; <br/>
        public: pagina responsavel por conter todas as imagens e informações publicas da aplicação; <br/>
        src: onde fica localizada os arquivos: <br/>
        assets: onde fica as imagens privadas ou com algum certo grau de encapsulamento; <br/>
        componets: onde fica localizado fragmentos de codigo, que serão reproduzidos ou renderizados em 1 ou mais paginas, geralemente utilizado para evitar retrabalho com o codigo; <br/>
        pager: responsavel por conter as paginas da aplicação e estrutura de admin e user. <br/>
        <h5>Por fora desses pacotes possui os files de estilização App.css e index.css(que são responsaveis pelo css global da aplicação) e 0o App.js que é onde fica localizada as rotas e tabem é responsvel por renderizar as paginas contendo suas devidas rotas.</h5>
    </p>
    <br/>
    <h4>
        Dependecias: 
    </h4>
    <p>
    <strong>@emotion/react:</strong>
    Biblioteca para manipulação de estilos em componentes React utilizando CSS-in-JS. Permite aplicar estilos dinâmicos com base em propriedades ou estado;<br/>
    <strong>@emotion/styled:</strong>
    Complementa o @emotion/react, permitindo criar componentes estilizados de forma mais declarativa, utilizando templates literais de JavaScrip;<br/>
    <strong>@mui/icons-material:</strong>
    Coleção de ícones prontos para uso, desenvolvida pela equipe do Material-UI (MUI). Ideal para incorporar ícones consistentes com o design Material Design;<br/>
    <strong>@mui/material:</strong>
    Biblioteca de componentes de UI prontos para uso baseada no Material Design. Inclui botões, tabelas, diálogos e mais, com suporte para personalização;<br/>
    <strong>axios:</strong>
     Cliente HTTP baseado em Promises para realizar requisições a APIs. Simplifica operações como GET, POST, PUT e DELETE, além de manipular respostas de forma eficiente;<br/>
    <strong>json-server:</strong>
    Ferramenta que simula um backend RESTful. Ideal para prototipagem, permite criar endpoints rápidos utilizando um arquivo JSON como banco de dados fake;<br/>
    <strong>react-dom:</strong> 
    Biblioteca responsável por manipular a renderização do DOM no React, conectando os componentes React à árvore de elementos HTML da aplicação;<br/>
    <strong>react-router-dom</strong>:
    Biblioteca de roteamento para React. Facilita a navegação entre páginas, gerenciamento de URLs dinâmicas e criação de rotas protegidas ou específicas.<br/>
    </p>
    </br>
    Neste projeto utilizamos as <strong>pages</strong> para colocar as devidas paginas da aplicação e os <strong>componets</strong> para colocarmos fragmentos que seriam utilziados em mais de uma pagina, como foi o caso do navbar.
    <br/>
    <h5>Seguindo esse viez vamos abordar as seguintes estruturas
    <h3>
        Componets:
    </h3>
    <p>
        Como citado anteriormente os componets são responsaveis por exibir em diversas telas, fragmentos de codigo sem que aquele codigo esteja devidamente inserido na raiz do arquivo.
        Como falado anteriormente, foi realizado o desenvolvimento de um NavBar e do BannerAd, que foi utilziado na Raiz do Browser, e isso faz com  que ele seja renderizado dentro de toda as paginas que ele engloba.
        <strong>
        NavBar:
        </strong>
        <p>
         No NavBar ficou os nossos botões/menu de navegação do site, onde permite que o usuario navegue por toda estrutura e paginas disponiveis.
        </p>
        <strong>
        BannerAd:
        </strong>
        <p>
         No BannerAd, ficou um component responsavel por renderizar a imagem de um banner onde o mesmo é apresentado em todas as telas englobadas pelo browser
        </p>
    </p>    
    <h3>
        Pages:
    </h3>
    <p>
        Nas pages, como o proprio nome diz, é onde fica localizada as nossas paginas de renderização do site. Nelas ficou separado as pages "publicas" e "admin" que seriam "privadas",esse modo de separação de pagina fica responsavel por organizar as estruturas do projeto. Dentr elas estão: <br/>
        DpoLgpd: responsavel por informar oq é DPO e LGPD; <br/>
        Faculdade: responsavel
    </p>
</p>
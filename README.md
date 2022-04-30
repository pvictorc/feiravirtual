# feiravirtual

<img alt="home" src="https://user-images.githubusercontent.com/74067292/150574171-d96e90fe-c6d9-4ba8-b887-bd3dc4457e1d.jpeg" width="300">

## Sobre o cliente

A “Feira Virtual - Produtos de agricultura familiar”, ou “Feira da Reforma Agrária”, é uma iniciativa que permite aos produtores vender diretamente aos 
consumidores. Além do aspecto econômico, a feira tem como objetivo principal 
atrair os consumidores para os eventos do Centro Frei Humberto e para as 
questões dos movimentos sociais.

## Sobre o projeto
O produto a ser desenvolvido engloba a reconstrução de uma plataforma de venda de produto a ser desenvolvida em versão mobile utilizando principalmente as tecnologias: React Native | NodeJS | Expo | Redux | JWT

## Equipe PôjetoVasco

* Roney Christian Macedo Chaves
* Carlos Jessé Freire de Almeida Castro
* Eric Façanha Nascimento
* Egberto Alves Nogueira Júnior
* Paulo Victor Rebouças de Carvalho

## Mapa de Funcionalidades
### Requisitos implementados

| Requisitos Funcionais | Descrição	 | Codificação  |
| ------------- |:-------------:| ------------- |
| RF001. Listar Categorias de Produtos      | Esta tela irá mostrar todas as categorias de produtos que estão disponíveis, nomeadas para especificar o tipo de produto para tomar conhecimento de quais tipos de produtos o usuário pode comprar.|Arquivo "../pages/Categorias/index.js" |      
| RF002. Listar Produtos de uma Categoria|Esta tela mostrará todos os produtos de uma determinada categoria disponíveis, listados por nome, com uma representação visual fiel, preço, com cards específicos para si para definir qual o usuário quer comprar.|Arquivo "../pages/ProdutosLista/index.js"| 
| RF003. Exibir tela de detalhes do produto      |Esta tela mostrará a disponibilidade, o preço, uma imagem fiel do produto, sua descrição, detalhes da produção, de quantidade sobre um produto para o usuário decidir se irá efetuar a compra.|Arquivo '../pages/Categorias/ProductDetail'| 
| RF004. Listar Produtos a partir de uma busca      |Irá mostrar uma barra de pesquisa e, a partir de um texto, termo ou palavra-chave, procurar por opções de um produto específico para decidir qual o usuário quer comprar.|Incluso na tela Categorias/Produtos| 
| RF010. Adicionar Produto na Cesta de Compra      |Irá incluir um produto no carrinho de modo que informe o preço, nome e imagem do produto escolhido.|Incluso na tela src/components/ProdutosLista/index.js|
| RF011. Retirar Produto da Cesta de Compra      |Irá remover um produto do carrinho de modo que possa ajustar a quantidade.|Incluso na tela src/components/ProdutosLista/index.js|
| RF019. Fazer Checkout da Cesta de Produto      |Após clicar em comprar irá navegar para o formulário de compra onde pode ser concluído a compra.|Incluso na tela src/components/Carrinho|
| RF050. Preencher formulário de compra      |Irá mostrar um formulário para o cliente preencher e para usuários cadastrados será enviado um link para o email para o pagamento, onde está informando o valor total dos itens e valor do frete e pedirá informações de pagamento.|Incluso na tela src/components/Form.js|

<div  display: flex style="overflow-x: horizontal" >
<img alt="categorias" src="https://user-images.githubusercontent.com/74067292/150574168-3942589a-45e8-492a-a474-aa56ac7bd91f.jpeg" width="200">
<img alt="produtos" src="https://user-images.githubusercontent.com/74067292/150574161-615b6d8d-5b93-4dd5-95b4-84cca25ced26.jpeg" width="200">
<img alt="busca" src="https://user-images.githubusercontent.com/74067292/150574165-7e497b04-1705-40e6-a817-7fce61faa5c5.jpeg" width="200">
<img alt="carrinho" src="https://user-images.githubusercontent.com/74067292/150575378-3fb4ab2d-8f39-4d82-8071-9ab7db83c14d.jpeg" width="200">
<img alt="carrinho" src="https://user-images.githubusercontent.com/74067292/150574173-4c94e791-7de2-4c4f-94ad-57a18ba94d8c.jpeg" width="200">
<img alt="carrinhoP" src="https://user-images.githubusercontent.com/74067292/153323668-fdf43372-28bd-43e3-bc49-cde9b10d036d.jpeg" width="200">
<img alt="form" src="https://user-images.githubusercontent.com/74067292/153323671-94432058-8210-4a40-98dc-1b9fe776152d.jpeg" width="200">
<img alt="pedido" src="https://user-images.githubusercontent.com/74067292/153323673-b6bc10d0-d999-4d78-a535-ea51e64370b8.jpeg" width="200">
<img alt="checkout" src="https://user-images.githubusercontent.com/74067292/153323676-7366c010-bbec-4cf0-ba8e-ff17a171f9cd.jpeg" width="200">
<img alt="checkout2" src="https://user-images.githubusercontent.com/74067292/153323679-886af1e0-9431-47bf-982a-9d73b2d820ab.jpeg" width="200">
</div>

## Ambiente de desenvolvimento
* Node.js LTS release
* Git
* Expo

# Como rodar o projeto

## Através do APK
 Instalador: https://drive.google.com/file/d/15CITzuET0evo7H_Jrn-GtvzIauiz49QI/view?usp=sharing
 
### OU

## Instalar todas as dependencias indicadas pelo package.json
* npm install  
* Instalar o Expo:
npm install --global expo-cli 

### Resolver conflitos no package-lock
npm install --package-lock-only

## Dependências de Desenvolvimento
npm install json-server --save-dev

## Rodar projeto
npm start  
(ctrl+C pra sair)

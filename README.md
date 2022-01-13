# feiravirtual

<img src="https://user-images.githubusercontent.com/74067292/149235408-2c27dd34-8582-49d4-9517-6a8a025a3a44.jpg" width="300">

## Sobre o cliente

A “Feira Virtual - Produtos de agricultura familiar”, ou “Feira da Reforma Agrária”, é uma iniciativa que permite aos produtores vender diretamente aos 
consumidores. Além do aspecto econômico, a feira tem como objetivo principal 
atrair os consumidores para os eventos do Centro Frei Humberto e para as 
questões dos movimentos sociais.

## Sobre o projeto
O produto a ser desenvolvido engloba a reconstrução de uma plataforma de venda de produtos, incluindo também a função de área
conteúdo, a ser desenvolvida em versão mobile.

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

<div  display: flex>
<img src="https://user-images.githubusercontent.com/74067292/149235693-44940ddd-a5f0-45d6-a9b6-e91c87533089.jpg" width="300">
<img src="https://user-images.githubusercontent.com/74067292/149235736-333a6ee7-3e09-4a82-95b4-b61b63efdcfc.jpg" width="300">
<img src="https://user-images.githubusercontent.com/74067292/149235759-409c9c53-238b-47cb-95c7-a08a0e66e686.jpg" width="300">
<img src="https://user-images.githubusercontent.com/74067292/149236087-67c0d3ce-8061-4dc2-8be0-b5352e52b4d3.jpg" width="300">
</div>

## Ambiente de desenvolvimento
* Node.js LTS release
* Git
* Expo

# Como rodar o projeto

## Através do APK
 Instalador: https://drive.google.com/file/d/1krpbGoOmlzgFOEmSWE4ZOQYMgdY2KRmK/view?usp=sharing
 
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

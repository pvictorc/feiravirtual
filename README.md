# feiravirtual
<img src="https://lh4.googleusercontent.com/iO5Z2Cw_Z7sTHBl_PP9mE3wT9MuIw50bc_CLkPuTQGcNNymnMYNoECxgdOlzr4jC6AUZGzCXKk_lvQ=w2154-h1626-rw" width="300">

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
<img src="https://lh5.googleusercontent.com/hGcnf6lpivgZYbjddwZt9wIEXSEE14F0embIGWYpP_FhMry-G5DCMRG3J5Ypza0Yfn7L-cP0ZVjgSA=w2154-h1626-rw" width="200">
<img src="https://lh3.googleusercontent.com/igmC--fhFJxnHRLJT4NbKl4psaHAwbivoBFJlxB4x9HBN-60lokQMkbLOTzMqE1rCRdkqED8SN225Q=w2154-h1626-rw" width="200">
<img src="https://lh4.googleusercontent.com/lyXvqIRNMXZqRXujr_9FJLor0lkwHFz8P4pZ88jZ2okMRCOJCROtTskQqeg-w48ok7Dev8yd5z-1YA=w2154-h1626-rw" width="200">
<img src="https://lh4.googleusercontent.com/zjzZb34qRuOaJKqXwemfo4KcviVo7T-VTIr7-YL5Rr8CwOoH57y_cIIZ8VNZvArEnhScdpn2LJebdQ=w2154-h1626-rw" width="200" style="opacity: 1;">
</div>

## Ambiente de desenvolvimento
* Node.js LTS release
* Git
* Expo

# Como rodar o projeto

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

# Cálculo IMC

## Apresentação do projeto



Projeto desenvolvido no curso de Full Stack Python da EBAC - Escola Britânica de Artes Criativas e Tecnologia.

Projeto calcula o IMC do usuário dado as informações pelo campos altura e peso. A partir dessas informações, o índice é
calculado da seguinte maneira: 

- Divide-se o peso pela sua altura elevada ao quadrado.

Após o cálculo, é retornado também a classificação na tabela:

<ul>
    <li>IMC menor que 18,5kg/m2 - baixo peso.</li>
    <li>IMC entre 18,5kg/m2 e 24,9kg/m2 - eutrofia (peso adequado)</li>
    <li>IMC entre 25,0kg/m2 e 29,9kg/m2 - sobrepeso.</li>
    <li>IMC entre 30,0kg/m2 e 39,9kg/m2 - obesidade grau 2.</li>
    <li>IMC maior que 40,0kg/m2 - obesidade grave.</li>
</ul>

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**
- **NPM (geralmente vem com o Node.js)**
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

## Instalação

Siga estas etapas a seguir para configurar o ambiente de desenvolvimento:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório clonado.
3. Execute o seguinte comando para instalar as dependências:

  **``npm install``**

### Executar o projeto

No arquivo package.json na raiz do projeto, na chave "scripts", é possível alterar os comandos conforme desejado.

````
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
````

Para executar o projeto em modo de desenvolvimento, execute o comando:
    
**``npm run dev``**

Abra [http://localhost:5173/](http://localhost:5173/) para visualizar no browser.

A página irá recarregar se alterações forem feitas.
Você também verá Lint erros no console, se existirem.

Para executar o projeto em produção, execute o comando:

**``npm run build``**

Constrói o app para produção na pasta 'build'.
Corrige pacotes React em modo de produção e otimiza a contrução para uma melhor performance.

## 🛠️ Ferramentas utilizadas para construção do projeto

* **ESLint** - Linter, uma ferramenta de análise estática, para as linguagens Javascript e Typescript, sendo o mais popular do mundo para tais linguagens.
* **HTML** - Linguagem de marcação utilizada na construção de páginas na Web.
* **CSS Modules** -  São arquivos CSS em que os classNames e animações são definidos localmente e não globalmente.
* **ReactJS** - Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
* **Vite** - Servidor de desenvolvimento local escrito pelo criador do Vue.js, e usado por padrão pelo Vue.js e para modelos de projeto React.
* **NPM** - Gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.JS.

## 🎓 Aprenda mais

Você pode aprender mais em [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## ✒️ Autor

Guilherme Ferreira Camargo

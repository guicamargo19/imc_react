# Cálculo de IMC em ReactJS

Projeto será basicamente um formulário, contendo os campos: 
- altura
- peso;

A partir dessas informações o índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado.

É retornado também a classificação na tabela:

<ul>
    <li>IMC menor que 18,5kg/m2 - baixo peso.</li>
    <li>IMC entre 18,5kg/m2 e 24,9kg/m2 - eutrofia (peso adequado)</li>
    <li>IMC entre 25,0kg/m2 e 29,9kg/m2 - sobrepeso.</li>
    <li>IMC entre 30,0kg/m2 e 39,9kg/m2 - obesidade grau 2.</li>
    <li>IMC maior que 40,0kg/m2 - obesidade grave.</li>
</ul>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

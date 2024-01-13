import { useState } from 'react';

import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';
import Tabela from './components/Tabela';
import Formulario from './components/Formulario';

import './global.css'

function App() {
  const [IMC, setIMC] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calculaIMC = () => {
    let alturaFloat = parseFloat(altura);
    let pesoFloat = parseFloat(peso);

    if (alturaFloat > 0 && pesoFloat > 0) {
      let alturaAoQuadrado = alturaFloat * alturaFloat;
      let imcCalculo = pesoFloat / alturaAoQuadrado;
      let imcFinal = parseFloat(imcCalculo.toFixed(2));
      const magrezaLine = document.querySelector("#magreza");
      const normal = document.querySelector("#normal");
      const sobrepeso = document.querySelector("#sobrepeso");
      const obesidade = document.querySelector("#obesidade");
      const grave = document.querySelector("#grave");
      magrezaLine.classList.remove('active');
      normal.classList.remove("active");
      sobrepeso.classList.remove("active");
      obesidade.classList.remove("active");
      grave.classList.remove("active");

      if (imcFinal < 18.50) {
        magrezaLine.classList.add('active');
        return setIMC(imcFinal);
      } 
      if (imcFinal >= 18.50 && imcFinal < 25.0) {
        normal.classList.add('active');
        return setIMC(imcFinal);
      }
      if (imcFinal >= 25.0 && imcFinal < 30.0) {
        sobrepeso.classList.add('active');
        return setIMC(imcFinal);
      }
      if (imcFinal >= 30.0 && imcFinal < 40.0) {
        obesidade.classList.add('active');
        return setIMC(imcFinal);
      } 
      else {
        grave.classList.add('active');
        return setIMC(imcFinal);
      }
    } else {
      alert("Altura e Peso devem ter valores acima de 0");
      location.assign(location.href);
    }
  }

  return (
    <>
      <div className="container">
        <Cabecalho />
        <Formulario calculaOIMC={calculaIMC} setAAltura={e => setAltura(e.target.value)} setOPeso={e => setPeso(e.target.value)}/>
        <Tabela imc={ IMC }/>
      </div>
      <Rodape />
    </>
  )
}

export default App;

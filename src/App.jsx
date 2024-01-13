import { useState } from 'react';
import './global.css'

function App() {
  const [IMC, setIMC] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calculaIMC = () => {
    let alturaFloat = parseFloat(altura);
    let pesoFloat = parseFloat(peso);
    let alturaAoQuadrado = alturaFloat * alturaFloat;
    let imcCalculo = pesoFloat / alturaAoQuadrado;
    let imcFinal = parseFloat(imcCalculo.toFixed(2));
  
    const magrezaLine = document.querySelector(".magreza");
    const normal = document.querySelector(".normal");
    const sobrepeso = document.querySelector(".sobrepeso");
    const obesidade = document.querySelector(".obesidade");
    const grave = document.querySelector(".grave");
    magrezaLine.classList.remove('active');
    normal.classList.remove("active");
    sobrepeso.classList.remove("active");
    obesidade.classList.remove("active");
    grave.classList.remove("active");

    if (imcFinal < 18.50) {
      magrezaLine.classList.add('active');
      return setIMC(imcFinal);
    } 
    if (imcFinal >= 18.50 && imcFinal < 24.90) {
      normal.classList.add('active');
      return setIMC(imcFinal);
    }
    if (imcFinal >= 25.0 && imcFinal < 29.90) {
      sobrepeso.classList.add('active');
      return setIMC(imcFinal);
    }
    if (imcFinal >= 30.0 && imcFinal < 39.90) {
      obesidade.classList.add('active');
      return setIMC(imcFinal);
    } 
    else {
      grave.classList.add('active');
      return setIMC(imcFinal);
    }
  }

  return (
    <>
      <div className="container">
        <div className='text'>
          <h1>Cálculo IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <p>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
          <p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.</p>
        </div>
        <form className='form'>
          <div className="inputs">
            <div className='altura-block'>
              <label htmlFor="altura">Altura <small>(ex.: 1,70)</small></label>
              <input type="number" id='altura' onBlur={e => setAltura(e.target.value)} min={0}/>
            </div>
            <div className='peso-block'>
              <label htmlFor="peso">Peso <small>(ex.: 69,2)</small></label>
              <input type="number" id='peso' onBlur={e => setPeso(e.target.value)} min={0}/>
            </div>
          </div>
          <div className='buttons'>
            <button onClick={calculaIMC} type="button">Calcular <i className="bi bi-caret-right"></i></button>
            <button className='clear' type="reset">Limpar <i className="bi bi-caret-right"></i></button>
          </div>
        </form>

        <table className='table-imc' cellSpacing={0} >
          <thead>
              <tr>
                <th colSpan={3}>Veja a interpretação do IMC</th>
              </tr>
          </thead>
          <tbody>
            <tr className='table-heading'>
                <td>imc</td>
                <td>classificação</td>
                <td>Obesidade (Grau)</td>
            </tr>
            <tr className='magreza'>
              <td>menor que 18,5</td>
              <td>magreza</td>
              <td>0</td>
            </tr>
            <tr className='normal'>
              <td>entre 18,5 e 24,9</td>
              <td>normal</td>
              <td>0</td>
            </tr>
            <tr className='sobrepeso'>
              <td>entre 25,0 e 29,9</td>
              <td>sobrepeso</td>
              <td>I</td>
            </tr>
            <tr className='obesidade'>
              <td>entre 30,0 e 39,9</td>
              <td>obesidade</td>
              <td>II</td>
            </tr>
            <tr className='grave'>
              <td>maior que 40,0</td>
              <td>obesidade grave</td>
              <td>III</td>
            </tr>
          </tbody>
        </table>

        <h2>seu imc: <span>{ IMC }</span></h2>
      </div>
      <footer className="footer">
        <div>
            <ul className="footer__links">
                <li className="footer__links__item">
                    <a href="https://www.linkedin.com/in/guilherme-ferreira-camargo/">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
                <li className="footer__links__item">
                    <a href="https://github.com/guicamargo19">
                        <i className="bi bi-github"></i>    
                    </a>
                </li>
            </ul>
            <p className="footer__main-text">
                ® 2024 Guilherme Camargo. Todos os direitos reservados.
            </p>
            <p className="footer__last-text">
                Página desenvolvida no curso de Full Stack Python na EBAC - Escola Britânica de Artes Criativas e Tecnologia.              
            </p>
        </div>
    </footer>
    </>
  )
}

export default App

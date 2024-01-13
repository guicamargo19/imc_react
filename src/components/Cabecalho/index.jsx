import styles from './Cabecalho.module.css';

const Cabecalho = () => {
    return (
        <div className={styles.text}>
          <h1>Cálculo IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <p>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
          <p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Siga os exemplos para preencher os campos.</p>
        </div>
    )
}

export default Cabecalho;
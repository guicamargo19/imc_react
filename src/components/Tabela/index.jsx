import styles from './Tabela.module.css';

const Tabela = ({imc}) => {
    return (
      <>
        <table className={styles.table__imc} cellSpacing={0} >
          <thead>
              <tr>
                <th colSpan={3}>Veja a interpretação do IMC</th>
              </tr>
          </thead>
          <tbody>
            <tr className={styles.table__heading}>
                <td>imc</td>
                <td>classificação</td>
                <td>Obesidade (Grau)</td>
            </tr>
            <tr id='magreza'>
              <td>menor que 18,5</td>
              <td>magreza</td>
              <td>0</td>
            </tr>
            <tr id='normal'>
              <td>entre 18,5 e 24,9</td>
              <td>normal</td>
              <td>0</td>
            </tr>
            <tr id='sobrepeso'>
              <td>entre 25,0 e 29,9</td>
              <td>sobrepeso</td>
              <td>I</td>
            </tr>
            <tr id='obesidade'>
              <td>entre 30,0 e 39,9</td>
              <td>obesidade</td>
              <td>II</td>
            </tr>
            <tr id='grave'>
              <td>maior que 40,0</td>
              <td>obesidade grave</td>
              <td>III</td>
            </tr>
          </tbody>
        </table>
        <h2>seu imc: <span>{imc}</span></h2>
      </>
    )
}

export default Tabela;
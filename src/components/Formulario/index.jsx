import styles from './Formulario.module.css';

// eslint-disable-next-line react/prop-types
const Formulario = ({setAAltura, setOPeso, calculaOIMC, clean}) => {
    return (
        <form className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.altura__block}>
              <label htmlFor="altura">Altura <small>(ex.: 1,70)</small></label>
              <input type="number" id='altura' onBlur={setAAltura} min={0}/>
            </div>
            <div className={styles.peso__block}>
              <label htmlFor="peso">Peso <small>(ex.: 69,2)</small></label>
              <input type="number" id='peso' onBlur={setOPeso} min={0}/>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={clean} className={styles.clear} type="reset">Limpar <i className="bi bi-caret-right"></i></button>
            <button onClick={calculaOIMC} type="button">Calcular <i className="bi bi-caret-right"></i></button>
          </div>
        </form>
    )
}

export default Formulario;
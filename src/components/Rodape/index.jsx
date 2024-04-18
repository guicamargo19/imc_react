import styles from './Rodape.module.css';

const Rodape = () => {

    const getYear = () =>
        new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div>
                <ul className={styles.footer__links}>
                    <li className={styles.footer__links__item}>
                        <a href="https://www.linkedin.com/in/guilherme-ferreira-camargo/">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                    <li className={styles.footer__links__item}>
                        <a href="https://github.com/guicamargo19">
                            <i className="bi bi-github"></i>    
                        </a>
                    </li>
                </ul>
                <p className={styles.footer__main__text}>
                    ® {getYear()} - 
                    <a href="https://portfolio-pink-omega-63.vercel.app/">
                        <strong>Portfólio Guilherme Camargo</strong>
                    </a> - Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Rodape;
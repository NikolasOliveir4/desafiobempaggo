import RadAdesive from '../../Components/RadAdesive/RadAdesive'
import styles from './Form.module.css'

function Form(){
    return(
        <div className={styles.container}>
            <div className={styles.form_container}>
            <header>
                <p className={styles.titlepage}>
                    Formulário <br>
                    </br>para compra de<br>
                    </br><span>Pacote de adesivos</span>
                </p>
                
            </header>
                <div className={styles.form}>
               
                <h2>Quais Adesivos:</h2>
                <RadAdesive adesive={'React'}/>
                </div>
            </div>
        </div>
    )
}

export default Form
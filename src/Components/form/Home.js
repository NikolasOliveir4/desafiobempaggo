import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Gerencie projetos e outros!</p>
            <img src={savings} alt='Costs'/>
            <LinkButton to='/newproject' text='Criar Projeto'/>
        </section>
    )
}

export default Home
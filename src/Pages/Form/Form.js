import { useEffect, useState } from 'react'
import LinkButton from '../../Components/form/LinkButton'
import RadAdesive from '../../Components/RadAdesive/RadAdesive'
import styles from './Form.module.css'

import Footer from '../../Components/layouts/Footer'

function Form(){

    const [adesivos, setAdesivos] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/adesivos',{
            method: 'GET',
            headers: {
                'Content-type': 'aplication/json',
            },
        })  
            .then((resp)=> resp.json())
            .then((data) =>{
                setAdesivos(data)
            })
            .catch((err) => console.log(err))
            
    },[])


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
                <h2>Quais Adesivos:</h2>
                <div className={styles.form}>
                {adesivos.length > 0 &&
                adesivos.map((adesivos)=>(
                    <div className={styles.adesivos}>
                    <RadAdesive adesive={adesivos.name}/>
                    </div>
                ))
                }
               
                </div>
                <div className={styles.btnvoltar}>
                <LinkButton to='/' text='Voltar '/>
                </div>
            
            </div>
        </div>
    )
}

export default Form
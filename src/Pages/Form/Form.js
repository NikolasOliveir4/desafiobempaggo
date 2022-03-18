import { useEffect, useState } from 'react'

import LinkButton from '../../Components/form/LinkButton'
import RadAdesive from '../../Components/RadAdesive/RadAdesive'
import Input from '../../Components/form/input'
import styles from './Form.module.css'

import Footer from '../../Components/layouts/Footer'
import SubmitButton from '../../Components/form/SubmitButton'

import {ReactComponent as Wave} from '../../images/wave.svg'

function Form(){

    const [adesivos, setAdesivos] = useState([])
    const [name, setName] = useState([])
    const [qtd, setQtd] = useState(0)
    const [dcp, setDcp] = useState('')
    


    const [style, setStyle]= useState({ 
        
        class: 'form_column', })
   

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


    const submit = (e) => {
        
        e.preventDefault() 


           createVenda()
        
        setName([])
        setQtd(0)
        setDcp('')
        
        
    }

    function createVenda(){

        if(!name || !qtd || !dcp){
            return alert('Preencha todos os campos')
        }

        const pedido = {
            name,
            qtd,
            dcp,

        }
        
        fetch('http://localhost:5000/pedidos',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(pedido),

        })
       
        
    }


    
    
        function handleChange(e){
            setName([...name, e.target.value])
        }

    function handleChangeQtd(e){
        setQtd(e.target.value)
    }
    function handleChangeDcp(e){
        setDcp(e.target.value)
    }


    return(
        <div className={styles.container}>
            <div className={styles.form_container}>
            <header>
                <div className={styles.wave_container}>
            <Wave className={styles.svgwave}/>            
                </div>
                <p className={styles.titlepage}>
                    Formulário <br>
                    </br>para compra de<br>
                    </br><span>Pacote de adesivos</span>
                </p>
                
            </header>
                <h2 className={styles.title}>Quais Adesivos:</h2>
                <form onSubmit={submit} className={styles.form}>
                {adesivos.length > 0 &&
                adesivos.map((adesivo)=>(
                    <div className={styles.adesivo}>
                    <Input type='checkbox' name={adesivo.name} text={adesivo.name} tipo={styles} handleOnChange={handleChange} value={adesivo.name}/>
                    
                    </div>
                ))
                }
                <Input type='number' text='Quantos adesivos?' name='estoque' placeholder='Insira a quantidade' handleOnChange={handleChangeQtd} value={qtd} tipo={style}/>
                <Input type ='text' text='Observações' name='description' placeholder='Alguma dúvida? Recado?' handleOnChange={handleChangeDcp} value={dcp} tipo={style} />
                <SubmitButton text='adicionar' />
               
               </form>
                <div className={styles.btnvoltar}>
                <LinkButton to='/' text='Voltar ' />
                </div>
            
            </div>
        </div>
    )
}

export default Form
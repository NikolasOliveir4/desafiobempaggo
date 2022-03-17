import AdesiveForm from "../../Components/AdesiveForm/AdesiveForm"
import AdesiveForm2 from "../../Components/AdesiveForm2/AdesiveForm2"
import LinkButton from '../../Components/form/LinkButton'
import styles from './Home.module.css'

import {useState, useEffect} from 'react'

function Home(){

    const [adesivos, setAdesivos] = useState()
    const [showNewTransf, setShowNewTransf] = useState(false)
    const [opcoes, setOpcoes] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:5000/adesivos',{
            method: 'GET',
            headers: {
                'Content-type': 'aplication/json',
            },
        })  
            .then((resp)=> resp.json())
            .then((data) =>{
                setOpcoes(data)
            })
            .catch((err) => console.log(err))
            console.log('fez o fetch')
    },[])

    function createPost(adesivo){
        
        fetch('http://localhost:5000/adesivos',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(adesivo),

        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setAdesivos(data)
            //redirect
           
        })
        .catch(err=>console.log(err))

        
    }

   

    function toggleNewTransf(){
        setShowNewTransf(!showNewTransf)
        
        console.log('apertou o botão')
    }

    return(
        <div className={styles.container}>
            <div>
                <h2>Cadastre os adesivos</h2>
                <AdesiveForm handleSubmit={createPost} btnText='Adicionar'/>
            </div>
            <button  onClick={toggleNewTransf} className={styles.btn}>
                        {!showNewTransf ? 'Adicionar Estoque' : 'Fechar Estoque'}
            </button>
            <div>
                {showNewTransf &&(
                    <div className={styles.estoque}>
                        <h2>Insira o estoque</h2>
                        <AdesiveForm2  btnText='Adicionar' projectData={adesivos}/>

                        <div>
                            <LinkButton to='/form' text='Ir para formulário'/>
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    )
}

export default Home


   
        
    
   
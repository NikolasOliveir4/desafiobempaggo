import {useEffect, useState} from 'react'

import Input from '../form/input'

import SubmitButton from '../form/SubmitButton'
import Select from '../form/Select'


import styles from './AdesiveForm2.module.css'

function AdesiveForm2({handleSubmit ,btnText, projectData, categories}){
    
    
    const [project, setProject] = useState(projectData || {} )
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


    

    const submit = (e) => {
        
        e.preventDefault() 

        console.log('testado')
        fetch(`http://localhost:5000/adesivos/${project.id}`,{
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            
            
        })
        .catch((err) => console.log(err))
        

        
        
    }

    function handleCategory(e){
        setProject({...project, 
            [e.target.name]: e.target.value,
            id: e.target.value,
            
            
        }    
            )
        
    }


    function handleChange(e){
        setProject({...project,
        estoque: e.target.value
        })
    }
  
    


    return (
        <form onSubmit={submit} className={styles.form}>
            <Select name='category_id' placeholder='Selecione o adesivo' text='Escolha o Adesivo'  handleOnChange={handleCategory} options={opcoes} value={project.id ? project.id : ''}/>
            <Input type='number' text='Estoque atual do adesivo' name='estoque' placeholder='Insira o estoque total' handleOnChange={handleChange} value={project.estoque ? project.estoque : null}/>
            
            <SubmitButton text={btnText}/>
            
        </form>
    )
}

export default AdesiveForm2
import {useEffect, useState} from 'react'

import Input from '../form/input'

import SubmitButton from '../form/SubmitButton'
import Select from '../form/Select'


import styles from './AdesiveForm2.module.css'

function AdesiveForm2({handleSubmit ,btnText, projectData, categories}){
    
    
    const [project, setProject] = useState(projectData || {} )
    const [opcoes, setOpcoes] = useState([])
    const [data, setData] = useState([])

    const [style, setStyle]= useState({ 
        
        class: 'form_column', })
    
    console.log(projectData)
     
        const estoque = project[0].estoque

    

    const submit = (e) => {
        
        e.preventDefault() 

        console.log('testado')
        console.log(projectData[0].id)
        console.log(project)
        fetch(`http://localhost:5000/adesivos/${projectData[0].id}`,{
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
            <Select name='category_id' placeholder='Selecione o adesivo' text='Escolha o Adesivo'  handleOnChange={handleCategory} options={projectData} value={project.id ? project.id : ''}/>
            <Input type='number' text='Estoque atual do adesivo' name='estoque' placeholder='Insira o estoque total' handleOnChange={handleChange} value={project.estoque ? project.estoque : null} tipo={style}/>
            
            <SubmitButton text={btnText}/>
            
        </form>
    )
}

export default AdesiveForm2
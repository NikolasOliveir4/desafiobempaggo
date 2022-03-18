import {useState} from 'react'

import Input from '../form/input'

import SubmitButton from '../form/SubmitButton'


import styles from './ProjectForm.module.css'

function AdesiveForm({handleSubmit ,btnText}){

    const [project, setProject] = useState('')
    
    const [style, setStyle]= useState({ 
        
        class: 'form_column', })
    
   
    

    const submit = (e) => {
        
        e.preventDefault() 

        if( project.name == null ){
           
            alert('TÁ VAZIO O CAMPO')
           
        }
        else{
           handleSubmit(project)
           setProject({name:''})
        }
        
        

        
        
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
        
    }



    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' 
            text='Nome do Adesivo' 
            name='name' 
            placeholder='Insira o nome do adesivo' 
            handleOnChange={handleChange} 
            value={project.name ? project.name : null}
            tipo={style}/>
            
            <SubmitButton text={btnText}/>
            
        </form>
    )
}

export default AdesiveForm
import {useState} from 'react'

import Input from '../form/input'

import SubmitButton from '../form/SubmitButton'


import styles from './ProjectForm.module.css'

function AdesiveForm({handleSubmit ,btnText, projectData}){

    const [project, setProject] = useState(projectData || {} )
    
   
    
   
    

    const submit = (e) => {
        
        e.preventDefault() 

        if( project.name == null ){
           
            console.log('TÁ VAZIO O CAMPO')
           
        }
        else{
           handleSubmit(project)
        }
        
        

        
        
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
        
    }



    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' text='Nome do Adesivo' name='name' placeholder='Insira o nome do adesivo' handleOnChange={handleChange} value={project.name ? project.name : null}/>
            
            <SubmitButton text={btnText}/>
            
        </form>
    )
}

export default AdesiveForm
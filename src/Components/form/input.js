import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value, tipo}){
    return(
        <div className={styles[tipo.class]}>
            <label htmlFor={name}>{text}</label>

            <input type={type} name={name} placeholder={placeholder} id={name} onChange={handleOnChange} value={value} />

        </div>
    )
}

export default Input
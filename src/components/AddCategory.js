import React,{useState} from 'react'
import PropTypes from 'prop-types';

//Hay que hacer una desestructuracion si quiero trabajar con setCategories directamente
// porque sino tendria que trabajar con el objeto props es decir props.setCategories..

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('') // '' porque sino le paso nada seria undefined

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    };

    const handleSubmit = (e)  => {
        e.preventDefault(); // Prevenir el comportamiento por defecto
        if(inputValue.trim().length > 2)
        {
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    };
    return (

        <form onSubmit={handleSubmit}>
           <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                
           />
        </form>
      
    )

  
}
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}

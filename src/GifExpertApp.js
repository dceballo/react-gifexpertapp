import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types';

const GifExpertApp = () =>{

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    //Hooks useState

    const [categories, setCategories] = useState(['Dragon Ball']);

    /*const handleAdd = (event) =>{
        //setCategories([...categories,'HunterXHunter']);
        //setCategories(cats =>{
            
            //console.log(cats);
        //    let temp = [...cats];
         //   temp.push('HunterXHunter')
         //   return temp;
        //});
       
       setCategories(cats => [...cats,'HunterXHunter']);
    };
    */
    
    // Se le puede pasar propiedades a los componentes hijos
    return (
        <>
             <h2>GifExpertApp</h2>
             <AddCategory setCategories={setCategories} />
             <hr/>
             {/*<button onClick={handleAdd}>Agregar</button>*/}
             <ol>
                 {
                     categories.map(category =>{
                         return (
                            <GifGrid
                             key={category} 
                             category={category}/>
                         );
                     })
                 }
             </ol>
        </>
    );
}


/*GifExpertApp.propTypes ={
    value: PropTypes.number
}
*/

export default GifExpertApp;
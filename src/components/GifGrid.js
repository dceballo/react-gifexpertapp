import React from 'react'
import { useFechGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [state, setstate] = useState(0);
    const {data:images,loading} = useFechGifs(category);

    

    /*const [images, setImages] = useState([]);

    const key = 'SO98IHqs4bWG6mXop10oEHzd1qrt2b2o'
    useEffect(()=>{
        getGifs(category,key).then((images)=>{
            setImages(images);
        });
    },[category]);
    */

    
    /*console.log('Hubo un cambio');
    const prueba = ()=>{
        console.log('Esto no se llama');
    }*/
    return (
        <>
          <h3 className='animate__animated animate__fadeIn' >{category}</h3>
          {loading && <span className='animate__animated animate__flash'>Cargando...</span>}
           <div className='card-grid'>
            {/* {state}
            <button onClick={() => setstate(state +1)}>Prueba</button>
            */}
          

                {
                     images.map((img) =>{
                         return (
                            <GifGridItem key={img.id} {...img} />
                             
                         );
                     })
                 }
            </div>
            
        </>
    )
}


//podemos enviar un objeto completo
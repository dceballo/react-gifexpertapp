import {useState,useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFechGifs =(category) =>{

    const key = 'SO98IHqs4bWG6mXop10oEHzd1qrt2b2o';

    const [state, setState] = useState({
        data:[],
        loading: true
    });

   useEffect(()=>{
        console.log(category);
        getGifs(category,key).then((images)=>{
            setTimeout(()=>{
                setState({
                    data:images,
                    loading:false
                })
                //console.log(images);
            },3000);
           
        });

    },[category]);
    
    /*setTimeout(()=>{
        setstate({
            data:[1,2,3,4,5,6,7],
            loading:false
        })
    },3000)
    */
    return state; // {data:[],loading:true}
};
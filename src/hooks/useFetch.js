import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
    console.log(url);
    if(!url) {
        throw new Error ('No envio ningun URL');
    }

    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect( ()=>{
        return () => isMounted.current = false;
    },[] );

    useEffect( () => {
        setState({data: null, loading:true, error:null});
        fetch( url )    
            .then( resp => resp.json() )
            .then( data => {

                setTimeout( () => {

                    if(isMounted){

                        setState({
                            loading: false,
                            error:null,
                            data
                        });

                    }
                    else {
                        console.log('setState no se llamo porque fue desmontado');
                    }

                    

                },4000 );

                

            });

    },[url] );

    return state;

}
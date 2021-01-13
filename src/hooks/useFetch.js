import { useEffect, useState, useRef } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({
        data:null,
        loading:true,
        error:null
    });

    useEffect(() => {
        /*esto es para que cuando el componente este desmontado no haga setState*/
        return () => {
            isMounted.current=false;
        }
    }, [])

    useEffect(() => {
        setState({
            data:null,
            loading:true,
            error:null
        })
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            if(isMounted.current){
                setState({
                    loading:false,
                    error:false,
                    data
                });
            }
        });
    }, [url])

    return state;
}

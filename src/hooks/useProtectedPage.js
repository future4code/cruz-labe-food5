import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export const useProtectedPage = () =>{
    const history = useHistory()

    useEffect(()=>{
        if(!window.localStorage.getItem('token')){
            history.push('/login')
        }
    }, [history])
}
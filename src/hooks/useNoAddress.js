import {useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {goToEditAdressPage} from '../routes/coordinator'
import {BASE_URL} from '../constants/urls'

export const useNoAddress = () =>{
    const token = window.localStorage.getItem('token')
    const history = useHistory()

    useEffect(()=>{
        getProfileInfo()
    }, [])

    const getProfileInfo = async() =>{
        try{
            let profileInfo = await axios.get(`${BASE_URL}profile`, {
                headers:{
                    auth: token
                }
            })
            if(!profileInfo.data.user.hasAddress){
                goToEditAdressPage(history)
            }
        }catch(error){
            console.log(error.response)
        }
    }
}
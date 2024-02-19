import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { URI_CAR } from '../utils/constants.js'


export const useAgenteInfoDomiConta = () => {
  
  const {legajo }= useSelector(state=>state.agente)  
  
  const [datosDomiContaAgente, setDatosDomiContaAgente]=useState(null)
  const[loading, setLoading]=useState(true)  
  const [error, setError] = useState('')
  const urlcargos=URI_CAR

   useEffect(() => {
      traerDatosDomiContaAgenteApi()
    
   
      
   },[legajo])


   
  const traerDatosDomiContaAgenteApi =async()=>{
    
    
   try{
     //console.log(`${urlbio}agente_leg/${legajo}`)
     const {data} = await axios.get(`${urlcargos}/datosDomiContactoAgente/${legajo}`)
     //console.log(data)
     setDatosDomiContaAgente(data[0])
   }catch(err){
     setError(err)
   }finally{
     setLoading(false)
   }

  }

 
  
    
  
    return {error, loading, datosDomiContaAgente}
}

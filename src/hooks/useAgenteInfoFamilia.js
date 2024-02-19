import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { URI_CAR } from '../utils/constants.js'


export const useAgenteInfoFamilia = () => {
  
  const {legajo }= useSelector(state=>state.agente)  
  
  const [datosFamiliaAgente, setDatosFamiliaAgente]=useState([])
  const[loading, setLoading]=useState(true)  
  const [error, setError] = useState('')
  const urlcargos=URI_CAR

   useEffect(() => {
      traerDatosFamiliaAgenteApi()
    
   
      
   },[legajo])

   const traerDatosFamiliaAgenteApi =async()=>{
    
    
   try{
     //console.log(`${urlbio}agente_leg/${legajo}`)
     const {data} = await axios.get(`${urlcargos}/datosFamiliaAgente/${legajo}`)
     //
     setDatosFamiliaAgente(data)
   }catch(err){
     setError(err)
   }finally{
     setLoading(false)
   }

  
  }


  
    return {error, loading, datosFamiliaAgente}
}

import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { URI_CAR } from '../utils/constants.js'


export const useAgenteCargos = () => {
  
  const {legajo }= useSelector(state=>state.agente)  
  
  const [cargosAgente, setCargosAgente]=useState([])
  const [cargoshAgente, setCargoshAgente]=useState([])
  const[loading, setLoading]=useState(true)  
  const [error, setError] = useState('')
  
   const urlcargos=URI_CAR

   useEffect(() => {
      traerCargosAgenteApi()
      traerCargosHAgenteApi()
    
   
      
   },[legajo])


   //
   const traerCargosAgenteApi =async()=>{
    
     
    try{
      
      const {data} = await axios.get(`${urlcargos}/cargosvigentes/${legajo}`)
      //console.log(data)
      setCargosAgente(data)
    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }

   
   }

   const traerCargosHAgenteApi =async()=>{
    
    
   try{
     
     const {data} = await axios.get(`${urlcargos}/cargoshistoricos/${legajo}`)
     //console.log(data)
     setCargoshAgente(data)
   }catch(err){
     setError(err)
   }finally{
     setLoading(false)
   }

  
  }
  
    
  
    return {error, loading, cargosAgente,cargoshAgente}
}

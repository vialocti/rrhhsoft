import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { URI_CAR } from '../utils/constants.js'


export const useAgenteInfoPersonal = () => {
  
  const {legajo }= useSelector(state=>state.agente)  
  
  
  const [datosAgente, setDatosAgente]=useState(null)

  const [loading, setLoading]=useState(true)
  const [error, setError] = useState('')
  const urlcargos=URI_CAR

   useEffect(() => {
        traerDatosAgenteApi()
    
      
   },[legajo])


  
 //
   const traerDatosAgenteApi =async()=>{
    
    
   try{
     //console.log(`${urlbio}agente_leg/${legajo}`)
     const {data} = await axios.get(`${urlcargos}/datosAgente/${legajo}`)
     //console.log(data)
     setDatosAgente(data[0])
   }catch(err){
     setError(err)
   }finally{
     setLoading(false)
   }

  
  }

  
  
  
    return {error, loading, datosAgente}
}

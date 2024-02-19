import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { URI_CAR } from '../utils/constants.js'


export const useAgenteInfoAntiguedad = () => {

  const { legajo } = useSelector(state => state.agente)

  const [datosAntiguedadAgente, setDatosAntiguedadAgente] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const urlcargos=URI_CAR
  useEffect(() => {
    traerDatosAntiguedadAgenteApi()



  }, [legajo])



  const traerDatosAntiguedadAgenteApi = async () => {
    

    try {
      //console.log(`${urlbio}agente_leg/${legajo}`)
      const { data } = await axios.get(`${urlcargos}/datosAntiguedadAgente/${legajo}`)
      //console.log(data)
      setDatosAntiguedadAgente(data[0])
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }

  }





  return { error, loading, datosAntiguedadAgente }
}

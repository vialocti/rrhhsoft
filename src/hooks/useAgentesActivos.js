import { useEffect, useState } from 'react'

import axios from 'axios'
import { URI_BIO } from '../utils/constants.js'


export const useAgenteActivos = () => {



    const [agentesActivos, setAgentesActivos] = useState([])

    const [loadingAa, setLoading] = useState(true)
    const [errorAa, setError] = useState('')
    const urlactivos=URI_BIO

    useEffect(() => {

        traerAgenteActivosApi()



    }, [])




    const traerAgenteActivosApi = async () => {
        

        try {

            const { data } = await axios.get(`${urlactivos}/activos`)
            //console.log(data)
            setAgentesActivos(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }


    }



    return { errorAa, loadingAa, agentesActivos }
}

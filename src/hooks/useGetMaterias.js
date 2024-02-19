import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

import axios from 'axios'
import { URI_BIO, URI_CAR, URI_HCD } from "../utils/constants.js";



export const useGetMaterias = () => {

    const { legajo } = useSelector(state => state.agente)


    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [materias, setMaterias] = useState(null)
    const [cargospl, setCargos] = useState(null)
    const [agentesActivos, setAgentesActivos] = useState(null)
    const urih=URI_HCD
    const uric=URI_CAR
    const urib=URI_BIO 



    useEffect(() => {
        getMateriasApi()
        getCargosApi()
        getAgentesActivosApi()
    }, [legajo])



    const getMateriasApi = async () => {

        try {
            
            const { data } = await axios.get(`${urih}/materias/1/1`)
            setMaterias(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)

        }

    }

    const getCargosApi = async () => {

        try {
            //console.log('http://200.12.136.74:4000/cargos/getcargosp/9/9')
            const { data } = await axios.get(`${uric}/getcargosp/9/9`)
            setCargos(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)

        }

    }

    const getAgentesActivosApi = async () => {

        try {
            const { data } = await axios.get(`${urib}/activos`)
            setAgentesActivos(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }




    return { loading, error, materias, cargospl, agentesActivos }
}

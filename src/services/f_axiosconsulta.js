import axios from 'axios'
import { URI_HCD } from '../utils/constants.js'


const uri = URI_HCD

export async function getMaterias(carrera, plan) {


    try {
        //console.log(`${uri}${legajo}`)
        const { data } = await axios.get(`${uri}/materias/${carrera}/${plan}`)
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function getCatedrasDoc(sede, carrera, idmat, tipo) {

    try {

        const { data } = await axios.get(`${uri}/compocatedra/${sede}/${carrera}/${idmat}/${tipo}`)
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

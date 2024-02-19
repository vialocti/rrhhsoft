import axios from 'axios'

import { listMaterias } from './datosfce-slice'
import { URI_HCD } from '../../utils/constants.js'


export const getMaterias = (p, s) => {


    return async (dispatch) => {
        // console.log(`http://200.12.136.74:4000/hcd/materias/${p}/${s}`)
        const { data } = await axios.get(`${URI_HCD}/materias/${p}/${s}`)
        dispatch(listMaterias(data))
    }
}





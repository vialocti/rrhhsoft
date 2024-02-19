import axios from 'axios'

import { findAgente } from './agente-slice'
import { URI_BIO } from '../../utils/constants.js'
const urlbio = URI_BIO

export const AgenteConsulta = (legajo = 0) => {
    const sqlstr = '/agente_leg/'
    return async (dispatch) => {
        const { data } = await axios.get(`${urlbio}${sqlstr}${legajo}`)
        //console.log(data[0].apellido)
        dispatch(findAgente(data[0].apellido))

    }
}

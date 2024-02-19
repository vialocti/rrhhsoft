import React,{useState, useEffect} from 'react'
import { addAgente } from '../dominio/store/agente-slice'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {Wrapper, Button} from '../styles-components/vistas/Personas'
import { LabelF, SelectorV } from '../styles-components/formularios/FormAgente'
import InputComponent from '../elementos/InputComponent'
import { AgenteConsulta } from '../dominio/store/agente-thunx'


const uri = 'http://200.12.136.74:4000/biometrico/'

const expresiones = {
    patronb: /^[a-zA-Z\,\ \-]{1,60}$/, // Letras guion y guion_bajo
    // resolucionA: /^[,a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    // fecha:/^\d{4}([-/.])(0?[1-9]|1[0-1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
}

const BuscarPersona = () => {

    const dispatch =useDispatch()
    const [agentes, setAgentes] = useState([])
    const [rutap, setRutap] = useState(`${uri}agente_name/A`)
    const [patronb, setPatronb] = useState('') 


    useEffect(()=>{

        const traerPersonas =async()=>{

            await axios.get(rutap)
            .then(response =>{
                setAgentes(response.data)
                //console.log(agentes)

            }) 
            .catch (error=> {
                console.log(error)  
            }) 

        }

        traerPersonas()


    },[rutap])

    useEffect(()=>{
        
        setRutap (`${uri}agente_name/${patronb.campo}`)
       //  console.log(rutap)
        


    },[patronb.campo])


    const buscarInfo =()=>{
        dispatch(addAgente(document.getElementById('personas').value))
        dispatch(AgenteConsulta(document.getElementById('personas').value))
    }





  return (
    <Wrapper>
    <div className='container'>


            <div className='row'>
            <div className='col-md-4'>


                <InputComponent 
                    tipo='text'
                    name='search'
                    infoplace='Patron de Busqueda'
                    estado={patronb}
                    cambiarEstado={setPatronb}
                    label='Ingrese Patron de Busqueda'
                    leyendaErr='no ingrese digitos numericos'
                    expreg={expresiones.patronb}

              />
            </div>
            <div  className='col-md-4'>
                <LabelF htmlFor='personas'>Listado Agente</LabelF>
                <SelectorV name="personas" id='personas'>
                {agentes.map((elemento, index)=>(
                        <option value={elemento.legajo} key={index}>
                            {elemento.apellido}
                        </option>
                    ))

                    }
                </SelectorV>
            </div>


            <div className='col-md-2'>

            </div>

            <div className='col-md-2'>
                <br/>

                <Button
                onClick={buscarInfo}
                 >
                 Ver Info Agente

                </Button>
            </div>
          </div>                     


    </div>  
    </Wrapper>
  )

  }

export default BuscarPersona
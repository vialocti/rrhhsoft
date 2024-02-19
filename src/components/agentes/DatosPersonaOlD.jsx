
import React,{ useEffect,useState } from 'react'

import { useSelector} from 'react-redux'
//import { AgenteConsulta } from '../../dominio/store/agente-thunx'
import { Label } from '../../styles-components/formularios/FormAgente'

const DatosPersona = () => {
  const legajo =useSelector(state=>state.agente.legajo)
  const user =useSelector(state=>state.agente.user)
 //const dispatch = useDispatch()


  const [agente, setAgente]=useState({})
  const [nombre,setNombre]=useState('')
  const [claustro, setClaustro]=useState('')
  const [nrodoc, setNrodoc]=useState('')
  const [tipodoc, setTipodoc]=useState('')
  const [sexo, setSexo]=useState('')
  const [cuil, setCuil] = useState('')
  useEffect(()=>{
    if(agente){
    const {apellido,tipodocumento,nrodocumento,sexo,email,telefono,telefonomovil,ecivil,fechaNac,telefonocontacto,nrocuil,emailfce,condicion} = agente
    setNombre(apellido)
    setClaustro(claustro)
    setTipodoc(tipodocumento)
    setNrodoc(nrodocumento)
    setSexo(sexo)
    setCuil(nrocuil)
     
   
    }
    },[agente])

   useEffect(() => {
      //console.log(user)
    setAgente(user[0])
   },[user])
    

return (
    <div className='container m-4'>

        <div className="row">
              <div className='col-md-1'>
                Legajo<Label>{legajo}</Label>
              </div>

            <div className='col-md-4'>
              Nombre<Label> {nombre}</Label>
            </div>

            <div className='col-md-1'>
            T.Doc.<Label> {tipodoc===0?'DNI':tipodoc===2?'LC':'LE'}</Label>
            </div>

            <div className='col-md-3'>
              Nro.Doc.<Label>{nrodoc}</Label>
            </div>

            <div className='col-md-3'>
            Cuil<Label>{cuil}</Label>
            </div>

            
          </div>

          <div className="row">
            
            
            <div className='col-md-2'>
            <Label>Sexo:{sexo}</Label>
            </div>

            <div className='col-md-3'>
            <Label>Fecha Nacimiento: {legajo}</Label>
            </div>

            <div className='col-md-3'>
            <Label>Email: {legajo}</Label>
            </div>

            <div className='col-md-3'>
              <Label>Telefono contacto: {user.legajo}</Label>
            </div>

         </div>


    </div>

  )
}

export default DatosPersona
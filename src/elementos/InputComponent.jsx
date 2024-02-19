import { faCircleCheck,faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { GroupInput, IconoValidacion, Input, Label, LeyendaError } from '../styles-components/formularios/FormAgente'


const InputComponent = ({name,tipo,label,infoplace,leyendaErr,estado,cambiarEstado,expreg,funcion}) => {
  
   const onHandleChange =(e)=>{
    
    cambiarEstado({...estado, campo:e.target.value})
    
   } 


   const validacion =()=>{
    if(expreg){
        if(expreg.test(estado.campo)){
            cambiarEstado({...estado, valido:'true'})
        }else{
            cambiarEstado({...estado, valido:'false'})
        }
    }
    if(funcion){funcion()}
   }
  
   return (
    <div>
                <Label htmlFor={name} valido={estado.valido}>{label}</Label>
                <GroupInput>   
                <Input 
                    type={tipo} 
                    id={name} 
                    placeholder={infoplace}
                    onChange={onHandleChange}
                    value={estado.campo}
                    onBlur={validacion}
                    onKeyUp={validacion}
                    valido={estado.valido}
                    />   
                <IconoValidacion valido={estado.valido} icon={estado.valido === 'true' ? faCircleCheck : faTimesCircle}/>
                </GroupInput>
                <LeyendaError valido={estado.valido}>{leyendaErr}</LeyendaError>

             </div>
  )
}

export default InputComponent
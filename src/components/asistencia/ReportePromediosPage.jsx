import React,{useState, useEffect} from 'react'
import { Container, Table } from 'react-bootstrap'

const ReportePromediosPage = ({datospromedios}) => {
 
  const [promedios, setPromedios] = useState([])
  

  useEffect(() => {
    
    setPromedios(datospromedios)
    
  }, [datospromedios])

  return (
    
    <Container fluid>
      
    <Table striped bordered hover size="sm" className='table'>
    <thead>
      <tr>
        
        <th>Legajo</th>
        <th>Nombre</th>
        <th>Area</th>
        <th>Nro.Registros</th>
        <th>Total Horas</th>
        <th>Promedio</th>
      </tr>
    </thead>
    <tbody>
    {promedios.map((ele, ind) =>
    
    <tr key={ind}>
        <td>{ele.legajo} </td>
        <td>{ele.apellido}</td>
        <td>{ele.area}</td>
        <td>{ele.dias}</td>
        <td>{ele.total}</td>
        <td>{ele.media}</td>

    </tr>
    
    )}
    </tbody>
    </Table>
    
   </Container>  
  )
}

export default ReportePromediosPage
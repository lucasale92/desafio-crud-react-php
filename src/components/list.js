import React from 'react'
import {Link} from 'react-router-dom'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLoad:false,
            empleados:[]
        }
    }
    cargarDatos(){
        fetch("http://localhost/empleados/")
        .then(resp => resp.json())
        .then((dataresponse)=>{

            console.log(dataresponse);
            this.setState({dataload:true, empleados:dataresponse})
        })
        .catch(console.log)
    }
    componentDidMount(){
        this.cargarDatos();
    }
    render() { 
        const { empleados}=this.state

        return (
            <div className="card">
                <div className="card-header">
                <Link className="btn btn-warning" to={"/Crear"}>Agregar nuevo empleado</Link>
                    <h4>Lista de empleados</h4>
                </div>
                <div className="card-body">

            <table className="table">
                <thead>
                <tr>
                    <th>Dni</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>ciudad</th>
                    <th>direccion</th>
                    <th>telefono</th>
                    <th>fecha de alta</th>
                    <th>estado</th>
                </tr>
                </thead>
                <tbody>
                {empleados.map(
                    (empleados)=>(
                    <tr key={empleados.dni}>
                    <td >{empleados.dni}</td>
                    <td >{empleados.nombre}</td>
                    <td >{empleados.apellido}</td>
                    <td>{empleados.ciudad}</td>
                    <td>{empleados.direccion}</td>
                    <td >{empleados.telefono}</td>
                    <td>{empleados.fechaDeAlta}</td>
                    <td>{empleados.estado}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-success" to={"/Editar"}>Editar</Link>
                            <button type="button" className="btn btn-danger">Borrar</button>
                        </div>
                    </td>
                </tr>    
                    )
                    )}
                    </tbody>
        </table>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>

        )
    }
}

export default List;
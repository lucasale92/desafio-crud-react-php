import React from 'react'

class Create  extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div class="card">
                <div className="card-header">
                    Crear Empleado
                </div>
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
                <div className="card-footer text-muted">
                    Footer
                </div>
            </div>
         );
    }
}
 
export default Create;
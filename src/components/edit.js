import React from 'react'

class Edit extends React.Component {
    constructor(props) {
        super(props);
    }
        state = {  }
        render() { 
        return ( <div className="card">
            <div className="card-header">
                Editar empleado
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
export default Edit;